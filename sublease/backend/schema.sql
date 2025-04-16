-- Create listings table
create table listings (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  price decimal not null,
  location text not null,
  bedrooms integer not null,
  bathrooms decimal not null,
  square_feet integer,
  available_from date not null,
  available_to date,
  amenities text[],
  images text[],
  user_id uuid references auth.users not null,
  is_active boolean default true
);

-- Create indexes for faster queries
create index listings_location_idx on listings using gin (to_tsvector('english', location));
create index listings_price_idx on listings (price);
create index listings_available_from_idx on listings (available_from);
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