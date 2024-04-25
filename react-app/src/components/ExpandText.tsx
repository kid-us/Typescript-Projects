import { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}
const ExpandText = ({ children, maxLength = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (children.length <= maxLength) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxLength);
  return (
    <p>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandText;
