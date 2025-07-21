import { createContext, useContext, useEffect, useState } from "react";
import { Task } from "../utils/taskSchema";

const TaskContext = createContext<{
  tasks: Task[];
  addTask: (task: Task) => void;
  emptyTask: () => void;
  taskExecutorQueue: string[];
  setTaskCompleted: (taskId: string) => void;
  taskCompleted: Record<string, string>;
}>({
  tasks: [],
  addTask: () => {},
  emptyTask: () => {},
  taskExecutorQueue: [],
  setTaskCompleted: () => {},
  taskCompleted: {},
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<(Task & { id: string })[]>([]);
  const [taskExecutorQueue, setTaskExecutorQueue] = useState<string[]>([]);
  const [taskCompleted, setTaskCompletedState] = useState<
    Record<string, string>
  >({});

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    setTaskExecutorQueue((prevQueue) => {
      if (prevQueue.length < 3 && !prevQueue.includes(task.id)) {
        return [...prevQueue, task.id];
      }
      return prevQueue;
    });
  };

  const emptyTask = () => {
    setTasks([]);
  };

  const setTaskCompleted = (taskId: string) => {
    setTaskCompletedState((prev) => ({
      ...prev,
      [taskId]: "completed",
    }));
  };

  useEffect(() => {
    setTaskExecutorQueue((prevQueue) => {
      // Remove completed tasks from the queue
      let newQueue = prevQueue.filter((id) => !taskCompleted[id]);
      // Fill up to 3 with uncompleted tasks not already in the queue
      for (let task of tasks) {
        if (newQueue.length >= 3) break;
        if (!taskCompleted[task.id] && !newQueue.includes(task.id)) {
          newQueue.push(task.id);
        }
      }
      return newQueue;
    });
  }, [taskCompleted, tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        emptyTask,
        taskExecutorQueue,
        setTaskCompleted,
        taskCompleted,
      }}
    >
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
