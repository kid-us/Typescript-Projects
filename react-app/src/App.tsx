import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [showAlert, setShowAlert] = useState(false);

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

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: "false" },
    { id: 2, title: "Bug 1", fixed: "false" },
  ]);

  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
    ],
  });

  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, title: "Edited" } : item
      ),
    });
  };

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

  const handleArray = () => {
    // Add
    // setTags([...tags, "exciting"]);

    // Remove
    // setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  const handleArrayObject = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: "true" } : bug))
    );
  };

  const handleChangeName = () => {
    setGame({ ...game, player: { ...game.player, name: "Lorem" } });
  };

  const handleToopings = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
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
        <button onClick={() => handleUpdateObject()}>
          Click and Let's update the Object
        </button>
        <br />
        <p>{customer.address.zipCode}</p>
        <button onClick={() => handleNestedObjectUpdate()}>
          Click and Let's update nested Object
        </button>
        <br />
        <p>{tags}</p>
        <button onClick={() => handleArray()}>
          Click and Let's update an array
        </button>
        <br />
        {bugs.map((bug, index) => (
          <li key={index}>{bug.fixed}</li>
        ))}
        <button onClick={() => handleArrayObject()}>
          Click and Let's update an object array
        </button>
        <Navbar cartItemCount={cartItems.length} />
        <Cart cartItems={cartItems} onRemove={() => setCartItems([])} />
        {/* Game */}
        <br />
        <p>{game.player.name}</p>
        <button onClick={() => handleChangeName()}>
          Click and Let's change the name John to Lorem
        </button>
        {/* Pizza */}
        <br />
        <p>{pizza.toppings}</p>
        <button onClick={() => handleToopings()}>
          Click and Let's change the Topping
        </button>
        {/* Cart */}
        <br />
        <p>
          {cart.items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </p>
        <button onClick={() => handleCart()}>Click and Let's cart title</button>
      </div>
    </>
  );
}

export default App;
