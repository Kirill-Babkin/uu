import * as z from "zod";

export const QuestionsSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters long"
    })
    .max(130, { message: "Title must be at most 130 characters long" }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters long"
    })
    .max(500, { message: "Description must be at most 500 characters long" }),
  tags: z
    .array(z.string().min(1).max(15))
    .nonempty({ message: "Please add at least one tag" })
    .min(1)
    .max(3)
});
