import { supabase } from "./supabase"

export const fetcherForOne = async (key: string) => {
    const table = key.split(' ')[0];
    const id = key.split(' ')[1];
  const { data, error } = await supabase.from(table).select().eq("id", id)
  if (error) {
    throw new Error(error.message)
  }
  return data
}