import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";

const headings = ["Description", "Amount", "Category"];

const ExpenseTracker = () => {
    const [rows, setRows] = useState([
        {
            id: 1,
            description: "Milk",
            amount: 5,
            category: "Groceries",
        },
        {
            id: 2,
            description: "Electricity",
            amount: 100,
            category: "Utilities",
        },
        {
            id: 3,
            description: "Movie",
            amount: 15,
            category: "Entertainment",
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState("");

    const handleDelete = (id: number) => setRows(rows.filter((row) => row.id !== id));

    const generateId = () => rows.length + 1;

    const getAvailableRows = () =>
        !selectedCategory
            ? rows
            : rows.filter((item) => item.category === selectedCategory);

    return (
        <div>
            <ExpenseForm onFormSubmit={expense => setRows([...rows, {...expense, id: generateId()}])} />
            <div className="mb-5">
                <ExpenseFilter
                    onSelect={(category) => setSelectedCategory(category)}
                ></ExpenseFilter>
            </div>
            <Expenses
                headings={headings}
                rows={getAvailableRows()}
                onDelete={handleDelete}
            ></Expenses>
        </div>
    );
};

export default ExpenseTracker;
