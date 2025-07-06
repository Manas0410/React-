import { useEffect, useRef, useState } from "react";
import "./progress.css";

// Milestone-based colors
const ColorConfig: Record<number, string> = {
  0: "red",
  3: "orange",
  7: "green",
};

// Get the nearest milestone color
const getNearestColor = (progress: number): string => {
  const milestones = Object.keys(ColorConfig)
    .map(Number)
    .sort((a, b) => b - a); // sort descending

  for (const milestone of milestones) {
    if (progress >= milestone) {
      return ColorConfig[milestone];
    }
  }
  return "gray"; // fallback, should never happen if 0 is defined
};

const ProgressBar = () => {
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev === 10) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="progress-cnt">
      <div
        className="filler"
        style={{
          width: `${progress * 10}%`,
          backgroundColor: getNearestColor(progress),
        }}
      >
        {`${progress * 10}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
