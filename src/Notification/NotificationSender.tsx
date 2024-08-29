import { useEffect, useState } from "react";
import { Sender } from "./NotificationServer";

const NotificationSender = () => {
  const [Noti, setNoti] = useState("");

  useEffect(() => {
    Sender(setNoti);
  }, []);

  useEffect(() => {
    console.log("Noti: ", Noti);
  }, [Noti]);

  return <section>Chotuu is my pyaaaaariiiiiiiiiii babybyyyyy</section>;
};

export default NotificationSender;
