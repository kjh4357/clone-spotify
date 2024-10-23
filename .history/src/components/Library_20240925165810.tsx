'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';

const Library: React.FC = () => {
    const onClick = () => {
        console.log('Create Playlist    ');
        
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 pt-4'>
        <div className='inline-flex items-center gap-x-2'>
          <TbPlaylist className='text-neutral-400' size={26} />
          <p className='text-neutral-400 font-medium text-md'>your Library</p>
        </div>
        <AiOutlinePlus
          className='text-neutral-400 cursor-pointer hover:text-white transition'
          onClick={onClick}
          size={20}
        />
      </div>
    </div>
  );
};

export default Library;
