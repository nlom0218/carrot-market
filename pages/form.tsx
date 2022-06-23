import React from "react";
import { useForm } from "react-hook-form";

// Less code
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events
// Easier Inputs

export default function Form() {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("im vaild bby");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", {
          required: true,
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: true,
        })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: true,
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
