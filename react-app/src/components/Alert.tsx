import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      {children}
      <button onClick={onClose} className="btn-close"></button>
    </div>
  );
};

export default Alert;
