import { ReactNode } from "react";
import { useToast } from "./ToastContext";

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
          </div>
        ))}
      </div>
      {children}
    </section>
  );
};
export default ToastProvider;
