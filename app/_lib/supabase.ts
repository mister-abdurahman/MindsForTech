import { createClient } from "@supabase/supabase-js";
import getEnvVariable from "./getEnv";

export const supabase = createClient(
  getEnvVariable("SUPABASE_URL"),
  getEnvVariable("SUPABASE_KEY")
);
