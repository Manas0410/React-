// create data
//  add data
// remove data

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type data = {
  message: string;
  id: string;
};

type ToastValues = {
  addToast: (message: string) => void;
  removeToast: (id: string) => void;
  ToastData: data[];
};

const ToastContext = createContext<ToastValues | undefined>(undefined);

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [ToastData, setToastData] = useState<data[]>([]);

  const addToast = useCallback((message: string) => {
    const newData = {
      message,
      id: crypto.randomUUID(),
    };
    setToastData((prev) => [newData, ...prev]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToastData((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, ToastData }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { addToast, removeToast, ToastData } = context;

  return { addToast, removeToast, ToastData };
};
