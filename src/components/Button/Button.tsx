type ButtonProps = {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
  className: string,
  handler?: () => void
}

const Button = ({ type, className, handler }: ButtonProps) => {
  return (
    <button type={type} className={`button ${className}`} onClick={handler}></button>
  );
}

export default Button;