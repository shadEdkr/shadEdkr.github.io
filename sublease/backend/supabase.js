import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Helper functions for common operations
export const getListings = async () => {
  const { data, error } = await supabase
    .from('listings')
    .select('*')
    .eq('is_active', true)
  if (error) throw error
  return data
}

export const createListing = async (listing) => {
  const { data, error } = await supabase
    .from('listings')
    .insert([listing])
  if (error) throw error
  return data
}

export const updateListing = async (id, updates) => {
  const { data, error } = await supabase
    .from('listings')
    .update(updates)
    .eq('id', id)
  if (error) throw error
  return data
}

export const deleteListing = async (id) => {
  const { data, error } = await supabase
    .from('listings')
    .delete()
    .eq('id', id)
  if (error) throw error
  return data
} 