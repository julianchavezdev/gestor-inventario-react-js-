import {} from "@supabase/supabase"
export const supabase = createClien(
    import.meta.env.VITE_APP_SUPABASE_URL,
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY
  );
