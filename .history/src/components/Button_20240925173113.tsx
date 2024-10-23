interface ButtonProps {
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
}
const Button = () => {
  return (
    <button className='rounded-full bg-white flex items-center justify-center hover:opacity-75 transition'>
      button
    </button>
  );
};

export default Button;
