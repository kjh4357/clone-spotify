const Library: React.FC = () => {
  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='text-lg font-semibold text-white'>Library</h2>
      <div className='flex flex-col gap-y-2'>
        <LibraryItem label='Songs' />
        <LibraryItem label='Albums' />
        <LibraryItem label='Artists' />
      </div>
    </div>
  );
};
