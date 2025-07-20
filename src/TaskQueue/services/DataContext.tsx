import { createContext, useContext, useState } from "react";
import { TaskSchemaType } from "../utils/taskSchema";

const TaskContext = createContext<{
  tasks: TaskSchemaType[];
  addTask: (task: TaskSchemaType) => void;
  emptyTask: () => void;
}>({
  tasks: [],
  addTask: () => {},
  emptyTask: () => {},
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<TaskSchemaType[]>([]);

  const addTask = (task: TaskSchemaType) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const emptyTask = () => {
    setTasks([]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, emptyTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
