import { z } from "zod";

export const marksSchema = z.coerce
    .number({
        error: "Marks must be a number"
    })
    .min(0, "Marks cannot be less than 0")
    .max(100, "Marks cannot be greater than 100");

export const sgpaFormSchema = z.record(z.string(), marksSchema);

export type SGPAFormValues = z.infer<typeof sgpaFormSchema>;
