interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
