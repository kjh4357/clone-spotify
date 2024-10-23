'use client';

import { useRouter } from 'next/navigation';
import { RxCaretLeft } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  children: React.ReactNode;
  classname?: string;
}

const Header: React.FC<HeaderProps> = ({ children, classname }) => {
  const router = useRouter();

  const handleLogout = () => {};
  return (
    <header
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        classname
      )}
    >
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button>
            <RxCaretLeft className='text-white' size={35} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
