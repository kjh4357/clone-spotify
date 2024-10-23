interface HeaderProps {
  children: React.ReactNode;
  classname: string;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className='bg-neutral-800 text-white p-2'>{children}</header>;
};

export default Header;
