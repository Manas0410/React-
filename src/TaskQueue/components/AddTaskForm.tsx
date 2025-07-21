import { useForm } from "react-hook-form";
import { defaultTask, taskSchema, TaskSchemaType } from "../utils/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskContext } from "../services/DataContext";

const AddTaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskSchemaType>({
    mode: "all",
    resolver: zodResolver(taskSchema),
    defaultValues: defaultTask,
  });

  const { addTask } = useTaskContext();

  const onSubmit = (data: TaskSchemaType) => {
    console.log(data);
    addTask({ ...data, id: crypto.randomUUID() }); // Generate a unique ID for the task
    reset(); // Reset the form after submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-[600px] p-4 border rounded-lg h-max   bg-white shadow-md"
    >
      <input
        {...register("taskName")}
        placeholder="Task Name"
        className="border p-2 rounded "
      />
      {errors?.taskName && (
        <p className=" text-sm text-orange-700">{errors.taskName.message}</p>
      )}
      <input
        {...register("taskTimer", { valueAsNumber: true })}
        type="number"
        placeholder="Task Timer"
        className="border p-2 rounded mb-2"
      />
      {errors?.taskTimer && (
        <p className=" text-sm text-orange-700">{errors.taskTimer.message}</p>
      )}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
