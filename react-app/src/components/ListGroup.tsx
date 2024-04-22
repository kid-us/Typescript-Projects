import { useState } from "react";

const ListGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let cities: string[] = [
    "New York",
    "San francisco",
    "Miami",
    "London",
    "Seoul",
    "Tokio",
  ];

  //   Event Handler
  const handleClickEvent = (item: string, index: number) => {
    console.log(item);
    setSelectedIndex(index);
  };

  return (
    <div>
      <h1>Cities</h1>
      {cities.length === 0 && <p>City not Found</p>}
      <ul className="list-group">
        {cities.map((item, index) => (
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
