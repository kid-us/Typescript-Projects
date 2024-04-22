import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  //   Event Handler
  const handleClickEvent = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 && <p>City not Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              handleClickEvent(index);
              onSelectItem(item);
            }}
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
