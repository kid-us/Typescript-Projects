const ListGroup = () => {
  let cities: string[] = [
    "New York",
    "San francisco",
    "Miami",
    "London",
    "Seoul",
    "Tokio",
  ];

  const logToConsole = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <h1>Cities</h1>
      {cities.length === 0 && <p>City not Found</p>}
      <ul className="list-group">
        {cities.map((item) => (
          <li
            onClick={() => logToConsole(item)}
            className="list-group-item"
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
