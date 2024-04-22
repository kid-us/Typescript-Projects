interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "danger"
    | "warning"
    | "success"
    | "dark";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "info" }: Props) => {
  return (
    <button onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
};

export default Button;
