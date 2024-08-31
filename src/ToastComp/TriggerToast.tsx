import { useToast } from "./ToastContext";

const TriggerToast = () => {
  const { addToast } = useToast();
  const triggerToast = () => addToast("Hii chotu baby!");
  return (
    <div>
      <button onClick={triggerToast}>Toast</button>
    </div>
  );
};

export default TriggerToast;
