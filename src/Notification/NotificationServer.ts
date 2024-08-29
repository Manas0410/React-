export const Sender = (setNoti: any) => {
  setInterval(() => {
    // console.log("interval print");
    setNoti(crypto.randomUUID());
  }, 2000);
};
