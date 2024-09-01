import { ReactNode, useEffect, useState } from "react";
import { useToast } from "./ToastContext";

const Progressbar = ({ time }: { time: number }) => {
  const [progressWidth, setProgressWidth] = useState(100);

  useEffect(() => {
    const intervalTime = 100;
    const totalSteps = (time * 1000) / intervalTime;
    let currentStep = 0;

    const intervalId = setInterval(() => {
      currentStep++;
      const newWidth = 100 - (currentStep / totalSteps) * 100;
      setProgressWidth(newWidth);

      if (currentStep >= totalSteps) {
        clearInterval(intervalId);
      }
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="w-full bg-gray-200">
      <div
        className="h-2 bg-gray-900 transition-all"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const { ToastData, removeToast } = useToast();
  return (
    <section>
      <div className="fixed bottom-6 right-2 flex flex-col gap-3 ">
        {ToastData.map((item, i) => (
          <div className="relative">
            <div
              key={i}
              className="h-20 w-[400px] items-center rounded-sm bg-green-300 flex justify-center "
            >
              {`${item.message}`}
            </div>
            <button
              onClick={() => removeToast(item.id)}
              className="absolute top-4 right-4"
            >
              X
            </button>
            <Progressbar time={item.delay} />
          </div>
        ))}
      </div>
      {children}
    </section>
  );
};
export default ToastProvider;
