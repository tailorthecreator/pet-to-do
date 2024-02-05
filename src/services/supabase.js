import { createClient } from '@supabase/supabase-js';

const supabaseUrl = https://hxgsaararittrvuoclko.supabase.co;
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4Z3NhYXJhcml0dHJ2dW9jbGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDYyNjQsImV4cCI6MjAyMjcyMjI2NH0.tR4YkF1Ao2_b626ESNxvJJtS7pyqw3u3hVZQHfvQRyQ;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;