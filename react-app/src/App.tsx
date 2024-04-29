import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import categories from "./expense-tracker/expenseCategories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 100, category: "Entertainment" },
    { id: 2, description: "bbb", amount: 100, category: "Groceries" },
    { id: 3, description: "ccc", amount: 100, category: "Utilities" },
    { id: 4, description: "ddd", amount: 100, category: "Utilities" },
    { id: 5, description: "eee", amount: 100, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="p-5 container row justify-content-center">
        <div className="col-6 shadow p-5">
          <p className="fw-semibold font-monospace fs-5">Expense Tracker</p>
          <div className="mb-5">
            <ExpenseForm
              onSubmit={(data) =>
                setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
              }
            />
          </div>
          <div className="mb-3">
            <ExpenseFilter
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
          </div>
          <ExpenseList
            expense={visibleExpenses}
            onDelete={(id) => handleDelete(id)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
