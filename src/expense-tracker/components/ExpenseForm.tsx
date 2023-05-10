import ButtonPrimary from "../../components/Buttons";
import { Label, TextInput, Select } from "flowbite-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "../categories";

const expenseSchema = z.object({
    description: z
        .string()
        .min(3, "Description must be at least 3 characters")
        .max(50, "Description cannot exceed 50 characters"),
    amount: z.number().min(0.01, "Amount cannot be less than Rs 0.01"),
    category: z.enum(categories, {
        errorMap: () => ({message: "Category is required"})
    })
});

type FormData = z.infer<typeof expenseSchema>;

interface Props {
    onFormSubmit?: (data: FormData) => void;
}

const ExpenseForm = ({ onFormSubmit }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(expenseSchema) });

    const handleFormSubmit = (data: FormData) => {
        onFormSubmit && onFormSubmit(data);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-4 mb-10"
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
                    <option></option>
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </Select>
            </div>
            <div>
                <ButtonPrimary color="purple">Submit Product</ButtonPrimary>
            </div>
        </form>
    );
};

export default ExpenseForm;
