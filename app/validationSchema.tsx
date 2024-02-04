import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required."),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65500)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "User Id is required.")
    .max(255)
    .optional()
    .nullable(),
  status: z.enum(["OPEN", "IN_PROGRESS", "CLOSED"]).optional(),
});

export const userSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required." })
    .min(1, { message: "Name is required." })
    .max(191, { message: "Name can't be more than 191 characters." }),
  email: z
    .string({ invalid_type_error: "Invalid email." })
    .email({ message: "Email is required." })
    .min(3, { message: "Email is required." })
    .max(191, { message: "Email can't be more than 191 characters." }),
  password: z
    .string({ invalid_type_error: "Invalid password." })
    .min(8, { message: "Password must be atlease 8 characters." })
    .max(20, { message: "Password can't be more than 20 characters." }),
});
