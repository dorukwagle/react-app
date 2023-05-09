import { FieldValues } from "react-hook-form";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";

const headings = ["Description", "Amount", "Category"];
const rows = [
    { id: 1, data: {desc:"Milk", price: 5, category:"Groceries"} },
    { id: 2, data: {desc:"Electricity", price: 100, category: "Utilities"} },
    { id: 3, data: {desc:"Movie", price:15, category:"Entertainment"} },
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
