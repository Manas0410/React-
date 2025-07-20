import AddTaskForm from "./components/AddTaskForm";
import { TaskProvider } from "./services/DataContext";
import TaskCard from "./components/TaskCard";

const TaskQueue = () => {
  return (
    <>
      <TaskProvider>
        <section className="flex justify-center min-h-screen bg-gray-100 gap-8 p-12">
          <AddTaskForm />
          <TaskCard />
        </section>
      </TaskProvider>
    </>
  );
};

export default TaskQueue;
