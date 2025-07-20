import React, { useEffect, useRef } from "react";

type ProgressBarProps = {
  timeRemaining?: number; // in seconds
};

const ProgressBar: React.FC<ProgressBarProps> = ({ timeRemaining = 2 }) => {
  const [progress, setProgress] = React.useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
