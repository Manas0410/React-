import React, { useEffect, useRef } from "react";
import { useTaskContext } from "../services/DataContext";

type ProgressBarProps = {
  timeRemaining?: number; // in seconds
  taskId?: string; // Optional, can be used for tracking or identification
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  timeRemaining = 2,
  taskId,
}) => {
  const [progress, setProgress] = React.useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { setTaskCompleted } = useTaskContext();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p == 9) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return p + 1;
      });
    }, timeRemaining * 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress === 10) {
      setTaskCompleted(taskId || "");
    }
  }, [progress]);

  return (
    <div className="w-full h-4 rounded-lg bg-slate-400 relative">
      <div
        className={`absolute h-full bg-blue-500 rounded-lg text-right text-white transition-all px-4 pb-2`}
        style={{ width: `${progress * 10}%` }}
      >
        {`${progress * 10} %`}
      </div>
    </div>
  );
};

export default ProgressBar;
