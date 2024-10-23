interface BoxProps {
  children: React.ReactNode;
  classname: string;
}
const Box: React.FC<BoxProps> = ({ children }) => {
  return <div className=''>{children}</div>;
};

export default Box;
