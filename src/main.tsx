import ReactDOM from "react-dom/client";
import App from "./App";
import ToastProvider from "./ToastComp/ToastHoc.tsx";
import "./index.css";
import { ToastContextProvider } from "./ToastComp/ToastContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ToastContextProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
  </ToastContextProvider>
);
