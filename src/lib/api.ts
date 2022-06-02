import {createClient} from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL || "nope",
    process.env.REACT_APP_SUPABASE_KEY || "nope"
);