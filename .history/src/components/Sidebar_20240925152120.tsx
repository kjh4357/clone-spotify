'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';

interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname !== '/search',
        href: '/search',
      },
    ],
    [pathname]
  );
  return (
    <div className='flex h-full'>
      <div className='hidden md:flex flex-col gap-y-2 bg-black w-[300px] p-2'>
        <Box>SideBar</Box>
      </div>
    </div>
  );
};

export default Sidebar;
