import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  //
  // const [firstName, setFirstName] = useState("Lorem");
  // const [lastName, setLastName] = useState("Ipsum");

  // const [person, setPerson] = useState({
  //   firstName: "Lorem",
  //   lastName: "Ipsum",
  // });

  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [customer, setCustomer] = useState({
    name: "Lorem",
    address: {
      city: "Dolor",
      zipCode: 1210,
    },
  });

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

  const handleAlert = () => {
    setShowAlert(true);
    console.log(showAlert);
  };

  const handleUpdateObject = () => {
    // const newDrink = {
    //   ...drink,
    //   price: drink.price + 1,
    // };

    setDrink({ ...drink, price: drink.price + 1 });
  };

  const handleNestedObjectUpdate = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 1012 },
    });
  };

  return (
    <>
      <div>
        <ListGroup
          items={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        {showAlert && (
          <Alert onClose={() => setShowAlert(false)}>
            Hello <span className="fw-semibold">React</span> welcome
          </Alert>
        )}

        <Button onClick={() => handleAlert()} color="success">
          My Button
        </Button>

        <p>{drink.price}</p>
        <p>{customer.address.zipCode}</p>
        <button onClick={() => handleUpdateObject()}> Click me</button>
        <button onClick={() => handleNestedObjectUpdate()}> Click</button>
      </div>
    </>
  );
}

export default App;
