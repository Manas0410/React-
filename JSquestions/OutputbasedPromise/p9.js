setTimeout(async () => {
  // macro 1
  console.log("1");
  await Promise.resolve(); //macro 2 pushed from micro 1
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("6");
}, 0);

console.log("3");

Promise.resolve().then(() => console.log("4")); //micro 1

console.log("5");

// 3 5 4 1 2

// sync
// sync
// microtask
// macrotask 1
// microtask (from inside async in macrotask 1)
// macrotask 2
