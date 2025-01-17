import { createContext } from 'react';
import { Subscription, UserDetails } from '../../types';
import { User } from '@supabase/auth-helpers-nextjs';
import { useSessionContext } from '@supabase/auth-helpers-react';

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const {} = useSessionContext();
};
