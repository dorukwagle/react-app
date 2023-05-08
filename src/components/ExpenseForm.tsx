import ButtonPrimary from "./Buttons";
import { Label, TextInput, Select } from "flowbite-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const expenseSchema = z.object({
    description: z
        .string()
        .min(3, "Description must be at least 3 characters")
        .max(25, "Description cannot exceed 25 characters"),
    amount: z.number().min(1, "Amount cannot be less than Rs. 1"),
    category: z.string().min(3, "please select an option")
});

type FormData = z.infer<typeof expenseSchema>;

const ExpenseForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(expenseSchema) });

    const handleFormSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-4"
        >
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="description"
                        value="Description"
                        color={errors.description && "failure"}
                    />
                </div>
                <TextInput
                    {...register("description")}
                    id="description"
                    type="text"
                    placeholder="Grocery item"
                    color={errors.description && "failure"}
                    required={true}
                    helperText={errors.description?.message}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="amount"
                        value="Amount"
                        color={errors.amount && "failure"}
                    />
                </div>
                <TextInput
                    {...register("amount", { valueAsNumber: true })}
                    id="amount"
                    type="number"
                    step="0.01"
                    color={errors.amount && "failure"}
                    placeholder="$Amount"
                    helperText={errors.amount?.message}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="category"
                        value="Category"
                        color={errors.category && "failure"}
                    />
                </div>
                <Select
                    {...register("category")}
                    id="category"
                    color={errors.category && "failure"}
                    helperText={errors.category?.message}
                >
                    <option selected></option>
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </Select>
            </div>
            <div>
                <ButtonPrimary color="purple">Submit Product</ButtonPrimary>
            </div>
        </form>
    );
};

export default ExpenseForm;
