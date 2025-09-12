// src/supabase.js
import { createClient } from '@supabase/supabase-js';

// Use environment variables in production (dotenv), hardcoded here for demo
const SUPABASE_URL = 'https://chlirisnlmyavzyoycaf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNobGlyaXNubG15YXZ6eW95Y2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NDQzNTIsImV4cCI6MjA2NjMyMDM1Mn0.e-qdR3jF1oHb4R9l6aCkB1Or8PKX-vw1BaP4EkRi_q8';

// Create a single supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("✅ Supabase client initialized");

export default supabase;
