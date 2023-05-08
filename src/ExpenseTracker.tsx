import { FieldValues } from "react-hook-form";
import ExpenseForm from "./components/ExpenseForm";

const ExpenseTracker = () => {
    
    const handleFormSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <>
            <ExpenseForm onFormSubmit={handleFormSubmit} />
        </>
    );
}

export default ExpenseTracker;