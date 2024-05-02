import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios, { AxiosError, CanceledError } from "axios";
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
  const [isLoading, setIsLoading] = useState(false);
  // const [category, setCategory] = useState("");

  // useEffect(() => {
  //   if (focusRef.current) focusRef.current.focus();
  // });

  useEffect(() => {
    // const fetchUsers = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     setUsers(res.data);
    //   } catch (err) {
    //     setErrors((err as AxiosError).message);
    //   }
    // };
    // fetchUsers();
    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setIsLoading(false);
        setUsers(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

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
