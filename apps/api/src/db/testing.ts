// backend-test.ts
// Simple Supabase backend test using TypeScript

import { createClient } from "@supabase/supabase-js";

// Load from environment variables
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; 
// or SUPABASE_ANON_KEY for public-safe operations

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log("Testing Supabase connection...\n");

  // Example: fetch rows from a table
  const { data, error } = await supabase
    .from("users") // replace with your table name
    .select("*")
    .limit(5);

  if (error) {
    console.error("❌ Supabase Error:");
    console.error(error.message);
    return;
  }

  console.log("✅ Connection successful!");
  console.log("Fetched Data:");
  console.log(data);
}

testConnection();
