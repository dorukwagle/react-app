import { FieldValues } from "react-hook-form";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";

const headings = ["Description", "Amount", "Category"];
const rows = [
    { id: 1, data: ["Milk", 5, "Groceries"] },
    { id: 2, data: ["Electricity", 100, "Utilities"] },
    { id: 3, data: ["Movie", 15, "Entertainment"] },
];

const generateId = () => rows.length + 1;

const ExpenseTracker = () => {
    const handleFormSubmit = (data: FieldValues) => {
        console.log(data);
    };

    const handleOnFilter = (type: string) => {
        console.log(type);
    };

    const handleDelete = (id: number) => {
        console.log(id);
    };

    return (
        <>
            <ExpenseForm onFormSubmit={handleFormSubmit} />
            <Expenses
                headings={headings}
                rows={rows}
                onDelete={handleDelete}
                onSelect={handleOnFilter}
            ></Expenses>
        </>
    );
};

export default ExpenseTracker;
