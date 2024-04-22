import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  //   Event Handler
  const handleClickEvent = (item: string, index: number) => {
    console.log(item);
    setSelectedIndex(index);
  };

  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 && <p>City not Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => handleClickEvent(item, index)}
            className={`list-group-item ${selectedIndex === index && "active"}`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
