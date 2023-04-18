import { z } from "zod";

const email = z
  .string({
    required_error: "Email is required - z",
    invalid_type_error: "Email is string - z"
  })
  .email({ message: "Invalid email address" });
const password = z.string({
  required_error: "Password is required - z",
  invalid_type_error: "Password is string - z"
});

export const zodLoginForm = (values: any) =>
  z
    .object({
      email,
      password
    })
    .parse(values);