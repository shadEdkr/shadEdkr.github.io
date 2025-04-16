-- Create an enum for property types
create type property_type as enum ('apartment', 'house', 'room', 'studio');

-- Create listings table with enhanced search capabilities
create table listings (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  property_type property_type not null,
  price decimal not null,
  location text not null,
  latitude decimal(10,8),
  longitude decimal(11,8),
  bedrooms integer not null,
  bathrooms decimal not null,
  square_feet integer,
  available_from date not null,
  available_to date,
  lease_duration integer, -- in months
  amenities text[],
  images text[],
  user_id uuid references auth.users not null,
  is_active boolean default true,
  search_vector tsvector generated always as (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(location, '')), 'C')
  ) stored
);

-- Create indexes for faster queries
create index listings_search_idx on listings using gin(search_vector);
create index listings_location_idx on listings using gist (ll_to_earth(latitude, longitude));
create index listings_price_idx on listings (price);
create index listings_available_from_idx on listings (available_from);
create index listings_property_type_idx on listings (property_type);
create index listings_user_id_idx on listings (user_id);

-- Enable Row Level Security
alter table listings enable row level security;

-- Create policies
create policy "Public listings are viewable by everyone"
  on listings for select
  using (is_active = true);

create policy "Users can insert their own listings"
  on listings for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own listings"
  on listings for update
  using (auth.uid() = user_id);

create policy "Users can delete their own listings"
  on listings for delete
  using (auth.uid() = user_id);

-- Create a function to search listings with various filters
create or replace function search_listings(
  search_query text default null,
  min_price decimal default null,
  max_price decimal default null,
  min_bedrooms integer default null,
  property_types property_type[] default null,
  available_after date default null,
  amenities_filter text[] default null,
  lat decimal default null,
  lng decimal default null,
  radius_km decimal default null
) returns setof listings as $$
begin
  return query
  select *
  from listings
  where
    is_active = true
    and (search_query is null or search_vector @@ plainto_tsquery('english', search_query))
    and (min_price is null or price >= min_price)
    and (max_price is null or price <= max_price)
    and (min_bedrooms is null or bedrooms >= min_bedrooms)
    and (property_types is null or property_type = any(property_types))
    and (available_after is null or available_from >= available_after)
    and (amenities_filter is null or amenities @> amenities_filter)
    and (
      lat is null 
      or lng is null 
      or radius_km is null 
      or earth_distance(
        ll_to_earth(latitude, longitude),
        ll_to_earth(lat, lng)
      ) <= radius_km * 1000
    )
  order by
    case when search_query is not null
      then ts_rank(search_vector, plainto_tsquery('english', search_query))
      else 1
    end desc,
    case when lat is not null and lng is not null
      then earth_distance(ll_to_earth(latitude, longitude), ll_to_earth(lat, lng))
      else 0
    end;
end;
$$ language plpgsql security definer; 