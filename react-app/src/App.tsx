import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
// import Expense from "./expense-tracker/components/Expesnse";
function App() {
  // const focusRef = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState("");

  // useEffect(() => {
  //   if (focusRef.current) focusRef.current.focus();
  // });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <>
      <div className="container mt-5">
        {/* <Expense /> */}
        {/* <input ref={focusRef} type="text" className="form-control" /> */}
        <label htmlFor="category" className="form-label">
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
        <ProductList category={category} />
      </div>
    </>
  );
}

export default App;
