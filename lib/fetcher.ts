import { supabase } from "./supabase"

export const fetcher = async (key: string) => {
  const { data, error } = await supabase.from(key).select()
  if (error) {
    throw new Error(error.message)
  }
  return data
}