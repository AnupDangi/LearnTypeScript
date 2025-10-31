import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../schemas/validation";
import type { User } from "../schemas/validation";

export default function UserForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<User>({
        resolver: zodResolver(UserSchema)
    });

    const onSubmit = (data: User) => {
        console.log("Form Submitted:", data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder="Name" />
            {errors.name && <p>{errors.name.message}</p>}
            <br />

            <input type="email" {...register("email", { required: "Email is required" })} placeholder="Email" />
            <br />
            {errors.email && <p>{errors.email.message}</p>}

            <input type="number" {...register("age", { valueAsNumber: true })} placeholder="Age" />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}
