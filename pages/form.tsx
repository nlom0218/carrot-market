import React from "react";
import { FieldError, useForm } from "react-hook-form";

// Less code
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events
// Easier Inputs

interface FormTypes {
  username: string;
  password: string;
  email: string;
}

export default function Form() {
  const { register, handleSubmit } = useForm<FormTypes>({
    mode: "onChange",
  });
  const onSubmit = (data: FormTypes) => {
    console.log("im vaild bby");
  };
  const onInvaild = (errors: FieldError) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvaild)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            value: 5,
            message: "The username should be longer than 5 chars.",
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "Password is required",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
