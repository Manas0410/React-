import { useEffect, useState } from "react";
import "./progress.css";

const ColorConfig = {
  0: "red",
  1: "red",
  2: "red",
  3: "red",
  4: "orange",
  5: "orange",
  6: "orange",
  7: "orange",
  8: "green",
  9: "green",
  10: "green",
};

const ProgressBar = () => {
  const [progerss, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p == 10) {
          clearInterval(timer);
          return p;
        }
        return p + 1;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="progress-cnt">
      <div
        className="filler"
        style={{
          width: `${progerss * 10}%`,
          backgroundColor: `${ColorConfig[progerss]}`,
        }}
      >
        {`${progerss * 10} %`}
      </div>
    </div>
  );
};

export default ProgressBar;
