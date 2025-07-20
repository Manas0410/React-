import { z } from "zod";

export const taskSchema = z.object({
  taskName: z.string().min(1, "name is required"),
  taskTimer: z.number(),
});

export type TaskSchemaType = z.infer<typeof taskSchema>;

export const defaultTask: TaskSchemaType = {
  taskName: "",
  taskTimer: 2,
};
