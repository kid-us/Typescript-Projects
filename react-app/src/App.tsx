import { useEffect, useRef, useState } from "react";
import "./App.css";
import { CanceledError } from "./services/api-clients";
import userServices, { User } from "./services/user-service";

// import ProductList from "./components/ProductList";
// import Expense from "./expense-tracker/components/Expesnse";

function App() {
  // const focusRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [category, setCategory] = useState("");

  // useEffect(() => {
  //   if (focusRef.current) focusRef.current.focus();
  // });

  // Get User
  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userServices.getAllUsers();

    request
      .then((response) => {
        setIsLoading(false);
        setUsers(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  // Delete User
  const deleteUser = (user: User) => {
    const original = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    userServices.deleteUser(user.id).catch((error) => {
      setErrors(error.message);
      setUsers(original);
    });
  };

  // Add User
  const addUser = () => {
    const original = [...users];
    const newUser = { id: 0, name: "Lorem" };
    setUsers([...users, newUser]);

    userServices
      .addUser(newUser)
      .then((response) => setUsers([...users, response.data]))
      .catch((error) => {
        setErrors(error.message);
        setUsers(original);
      });
  };

  // Update User
  const updateUser = (user: User) => {
    const original = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userServices.updateUser(user.id, updatedUser).catch((error) => {
      setErrors(error.message);
      setUsers(original);
    });
  };

  return (
    <>
      <div className="container mt-5">
        {isLoading && <div className="spinner-border"></div>}
        {errors && <p className="text-danger small">{errors}</p>}
        {/* <Expense /> */}
        {/* <input ref={focusRef} type="text" className="form-control" /> */}
        {/* <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          className="form-select"
          onChange={(event) => setCategory(event.currentTarget.value)}
        >
          <option value=""></option>
          <option value="Lorem">Lorem</option>
          <option value="Ipsum">Ipsum</option>
        </select>
        <ProductList category={category} /> */}

        {/* Fetching Data */}

        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger small"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary mt-3 w-25" onClick={addUser}>
          Add
        </button>
      </div>
    </>
  );
}

export default App;
