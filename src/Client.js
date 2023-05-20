

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://pednhqmbuykjzqnbsntk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlZG5ocW1idXlranpxbmJzbnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ2MTI2MjgsImV4cCI6MjAwMDE4ODYyOH0.hdL_q18gfY6gmga_mi7BBi-8d8VLZmJdSEAtInxOttI'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase