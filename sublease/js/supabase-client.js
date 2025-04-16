// Import Supabase client from CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Initialize the Supabase client
const supabaseUrl = 'https://rtsldpieaokbfnhmmnzx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsc2xkcGllYW9rYmZuaG1tbnp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NjY5ODIsImV4cCI6MjA2MDM0Mjk4Mn0.TjEnWgZBvprCPXjZ3IRSe3pGMf2IY5qDF5zRnIpQDJg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Authentication functions
export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })
    return { data, error }
}

export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    return { data, error }
}

export async function signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
}

// Enhanced listing functions
export async function searchListings({
    query = null,
    minPrice = null,
    maxPrice = null,
    minBedrooms = null,
    propertyTypes = null,
    availableAfter = null,
    amenities = null,
    latitude = null,
    longitude = null,
    radiusKm = null,
    page = 1,
    limit = 10
} = {}) {
    const { data, error } = await supabase
        .rpc('search_listings', {
            search_query: query,
            min_price: minPrice,
            max_price: maxPrice,
            min_bedrooms: minBedrooms,
            property_types: propertyTypes,
            available_after: availableAfter,
            amenities_filter: amenities,
            lat: latitude,
            lng: longitude,
            radius_km: radiusKm
        })
        .range((page - 1) * limit, page * limit - 1)

    return { data, error, page, limit }
}

export async function getListings() {
    const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('is_active', true)
    return { data, error }
}

export async function createListing(listing) {
    // Add geocoding if coordinates are not provided
    if (!listing.latitude || !listing.longitude) {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(listing.location)}&key=YOUR_GOOGLE_MAPS_API_KEY`);
            const data = await response.json();
            if (data.results && data.results[0]) {
                listing.latitude = data.results[0].geometry.location.lat;
                listing.longitude = data.results[0].geometry.location.lng;
            }
        } catch (error) {
            console.error('Geocoding failed:', error);
        }
    }

    const { data, error } = await supabase
        .from('listings')
        .insert([listing])
    return { data, error }
}

export async function updateListing(id, updates) {
    // Add geocoding if location is updated
    if (updates.location && (!updates.latitude || !updates.longitude)) {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(updates.location)}&key=YOUR_GOOGLE_MAPS_API_KEY`);
            const data = await response.json();
            if (data.results && data.results[0]) {
                updates.latitude = data.results[0].geometry.location.lat;
                updates.longitude = data.results[0].geometry.location.lng;
            }
        } catch (error) {
            console.error('Geocoding failed:', error);
        }
    }

    const { data, error } = await supabase
        .from('listings')
        .update(updates)
        .eq('id', id)
    return { data, error }
}

export async function deleteListing(id) {
    const { data, error } = await supabase
        .from('listings')
        .delete()
        .eq('id', id)
    return { data, error }
}

// User preferences
export async function saveSearchPreferences(userId, preferences) {
    const { data, error } = await supabase
        .from('user_preferences')
        .upsert([{
            user_id: userId,
            search_preferences: preferences
        }])
    return { data, error }
}

export async function getSearchPreferences(userId) {
    const { data, error } = await supabase
        .from('user_preferences')
        .select('search_preferences')
        .eq('user_id', userId)
        .single()
    return { data, error }
} 