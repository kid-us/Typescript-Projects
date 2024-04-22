import "./App.css";
import Alert from "./components/Alert";
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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <Alert>
          Hello <span className="fw-semibold">React</span> welcome
        </Alert>
      </div>
    </>
  );
}

export default App;
