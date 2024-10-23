'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../database.types';

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );
};
