import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
// import ProductList from "./components/ProductList";
// import Expense from "./expense-tracker/components/Expesnse";
interface User {
  id: number;
  name: string;
}
function App() {
  // const focusRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  // const [category, setCategory] = useState("");

  // useEffect(() => {
  //   if (focusRef.current) focusRef.current.focus();
  // });

  useEffect(() => {
    // document.title = "My App";
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((response) => setUsers(response.data))
      .catch((error) => setErrors(error.message));
  });

  return (
    <>
      <div className="container mt-5">
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
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
