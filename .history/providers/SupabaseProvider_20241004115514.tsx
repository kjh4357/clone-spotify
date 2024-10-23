'use client';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../database.types';

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );
};
