import { useToast } from "./ToastContext";

const TriggerToast = () => {
  const { addToast } = useToast();
  const triggerToast1 = () => addToast("Hii chotu baby! 1", 2);
  const triggerToast2 = () => addToast("Hii chotu baby! 2", 3);
  const triggerToast3 = () => addToast("Hii chotu baby! 3", 4);
  return (
    <div>
      <button onClick={triggerToast1}>Toast1</button>
      <button onClick={triggerToast2}>Toast2</button>
      <button onClick={triggerToast3}>Toast3</button>
    </div>
  );
};

export default TriggerToast;
