import { TextInput, Label } from "flowbite-react";
import ButtonPrimary from "./Buttons";
import { FieldValues, useForm } from "react-hook-form";
import { BsFillPersonFill, BsFillLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    fullname: z.string().min(5).max(25),
    email: z.string().max(75),
    password: z.string().min(6).max(25),
});

type FormData = z.infer<typeof formSchema>;

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(formSchema) });

    const lockFailureIcon = () => <BsFillLockFill color="red" />;
    const lockIcon = BsFillLockFill;
    const personFailureIcon = () => <BsFillPersonFill color="red" />;
    const personIcon = BsFillPersonFill;
    const emailFailureIcon = () => <MdEmail color="red" />;
    const emailIcon = MdEmail;

    const handleFormSubmit = (e: FieldValues) => {
        console.log(e);
    };

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Your email"
                        color={errors.email ? "failure" : "default"}
                    />
                </div>
                <TextInput
                    {...register("email")}
                    id="email2"
                    type="email"
                    placeholder="email@example.com"
                    required={true}
                    shadow={true}
                    icon={errors.email ? emailFailureIcon : emailIcon}
                    color={errors.email && "failure"}
                    helperText={errors.email && errors.email.message}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="full-name"
                        value="Full Name"
                        color={errors.fullname ? "failure" : "default"}
                    />
                </div>
                <TextInput
                    {...register("fullname")}
                    id="full-name"
                    type="text"
                    placeholder="Full Name"
                    icon={errors.fullname ? personFailureIcon : personIcon}
                    shadow={true}
                    required={true}
                    color={errors.fullname && "failure"}
                    helperText={errors.fullname && errors.fullname.message}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password2"
                        value="Your password"
                        color={errors.password ? "failure" : "default"}
                    />
                </div>
                <TextInput
                    {...register("password")}
                    id="password2"
                    type="password"
                    placeholder="Password"
                    required={true}
                    shadow={true}
                    icon={errors.password ? lockFailureIcon : lockIcon}
                    color={errors.password && "failure"}
                    helperText={errors.password && errors.password.message}
                />
            </div>
            <div>
                <ButtonPrimary color="purple">
                    Register new account
                </ButtonPrimary>
            </div>
        </form>
    );
};

export default Form;
