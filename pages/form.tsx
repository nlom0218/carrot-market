import React from "react";
import { useForm } from "react-hook-form";

// Less code
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events
// Easier Inputs

export default function Form() {
  const { register, watch, handleSubmit } = useForm({
    mode: "onChange",
  });
  console.log(watch());

  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
