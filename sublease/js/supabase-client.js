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

// Listing functions
export async function getListings() {
    const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('is_active', true)
    return { data, error }
}

export async function createListing(listing) {
    const { data, error } = await supabase
        .from('listings')
        .insert([listing])
    return { data, error }
}

export async function updateListing(id, updates) {
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