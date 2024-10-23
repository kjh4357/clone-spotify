'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../database.types';
import { useState } from 'react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};
