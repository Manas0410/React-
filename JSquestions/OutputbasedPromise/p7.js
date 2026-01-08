async function foo() {
  console.log("A");
  await Promise.resolve(); //- micro 1
  console.log("B");
}

console.log("C");

foo();

setTimeout(() => {
  console.log("D"); //macro 1
}, 0);

Promise.resolve().then(() => console.log("E")); // micro 2

console.log("F");

// c a f b e d
