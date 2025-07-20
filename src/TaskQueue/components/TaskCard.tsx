import { useTaskContext } from "../services/DataContext";
import ProgressBar from "./ProgressBar";

const TaskCard = () => {
  const { tasks, emptyTask } = useTaskContext();

  return (
    <div className="flex flex-col gap-4 w-[600px] p-4 h-max border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <button
        className="bg-orange-700 text-white p-2 rounded"
        onClick={() => emptyTask()}
      >
        Clear All Tasks
      </button>
      {tasks.map((task, index) => (
        <div key={`task-${index}`} className="p-4 border rounded mb-2 shadow">
          <h3>{task.taskName}</h3>
          <p>Time: {task.taskTimer} seconds</p>
          <ProgressBar timeRemaining={task.taskTimer} />
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
