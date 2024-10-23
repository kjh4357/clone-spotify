import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <a
      href={href}
      className={twMerge(
        'flex items-center gap-x-2 p-2 rounded-md',
        active ? 'bg-neutral-800' : 'hover:bg-neutral-800'
      )}
    >
      <Icon className='w-6 h-6' />
      <span>{label}</span>
    </a>
  );
};

export default SidebarItem;
