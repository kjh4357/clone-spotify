'use client';

import { useRouter } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
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
          <button
            onClick={() => router.back()}
            className='rounded-full bg-black flex items-center justify-center hovre:opacity-75 transition'
          >
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className='rounded-full bg-black flex items-center justify-center hovre:opacity-75 transition'
          >
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center'>
          <button className='rounded-full p02 bg-white flex items-center justify-center hover:opacity-75 transition'>
            <HiHome className='text-black' size={20} />
          </button>
          <button className='rounded-full p02 bg-white flex items-center justify-center hover:opacity-75 transition'>
            <BiSearch className='text-black' size={20} />
          </button>
        </div>
        <div className='flex justify-between items-center gap-x-4'>
          <></>
        </div>
      </div>
    </header>
  );
};

export default Header;