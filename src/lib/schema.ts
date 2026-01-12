import { z } from "zod";

export const schemaSignIn = z.object({
  email: z.string().nonempty("Email is required").email("Email is not valid"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(5, "Password should have min 5 characters"),
});
