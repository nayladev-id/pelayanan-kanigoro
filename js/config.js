// Ganti dengan URL dan Anon Key dari Project Settings > API di Supabase
const SUPABASE_URL = 'ISI_URL_SUPABASE_DI_SINI';
const SUPABASE_KEY = 'ISI_ANON_KEY_DI_SINI';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);