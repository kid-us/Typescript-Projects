import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let cities: string[] = [
    "New York",
    "San francisco",
    "Miami",
    "London",
    "Seoul",
    "Tokio",
    "Addis Ababa",
  ];
  return (
    <>
      <div>
        <ListGroup items={cities} heading="Cities" />
      </div>
    </>
  );
}

export default App;
