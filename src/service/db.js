
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jqgjzvzteupearqjhaxy.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY

export default function supabase() {
    return createClient(supabaseUrl, supabaseKey)
}

export const supabaseAdmin = () => createClient(supabaseUrl, serviceKey)