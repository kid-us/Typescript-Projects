import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 100, category: "Lorem" },
    { id: 2, description: "bbb", amount: 100, category: "Lorem" },
    { id: 3, description: "ccc", amount: 100, category: "Lorem" },
    { id: 4, description: "ddd", amount: 100, category: "Lorem" },
    { id: 5, description: "eee", amount: 100, category: "Lorem" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="p-5">
        <ExpenseList expense={expenses} onDelete={(id) => handleDelete(id)} />
      </div>
    </>
  );
}

export default App;
