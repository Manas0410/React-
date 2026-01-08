// const a = async () => {
//   console.log("fetching"); //2
//   return "data";
// };

// const call = async () => {
//   console.log("start"); //1
//   const res = await a();
//   console.log(res); // 4
//   console.log("end"); //5
// };

// call();

// console.log("done"); //3

// console.log(1);

// const p = new Promise((res, rej) => {
//   console.log(2);
//   res(3);
// });

// console.log(4);

// p.then((res) => {
//   console.log(res);
// });

// console.log(5);

// 1 2       3

const a = "sdf";
const b = new String("sdf");
console.log(a == b, a === b);
