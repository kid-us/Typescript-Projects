import { useEffect, useRef } from "react";
import "./App.css";
// import Expense from "./expense-tracker/components/Expesnse";
function App() {
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focusRef.current) focusRef.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <>
      <div className="container mt-5">
        {/* <Expense /> */}
        <input ref={focusRef} type="text" className="form-control" />
      </div>
    </>
  );
}

export default App;
