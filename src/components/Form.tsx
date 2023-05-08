import { TextInput, Label } from "flowbite-react";
import ButtonPrimary from "./Buttons";
import { FieldValues, useForm } from "react-hook-form";

interface FormDate {
    fullname: string;
    email: string;
    password: string;
}

const Form = () => {
    const { register, handleSubmit, setError } = useForm<FormDate>();

    const handleFormSubmit = (e: FieldValues) => { 
        console.log(e);
    }

    return (
        <form className="flex flex-col gap-4" 
            onSubmit={handleSubmit(handleFormSubmit)}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput
                    {...register('email')}
                    id="email2"
                    type="email"
                    placeholder="email@example.com"
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="full-name" value="Full Name" />
                </div>
                <TextInput
                    {...register('fullname')}
                    id="full-name"
                    type="text"
                    placeholder="Full Name"
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput
                    {...register('password')}
                    id="password2"
                    type="password"
                    placeholder="Password"
                    required={true}
                    shadow={true}
                />
            </div>
            <div>
                <ButtonPrimary color="purple">Register new account</ButtonPrimary>
            </div>
        </form>
    );
}

export default Form;