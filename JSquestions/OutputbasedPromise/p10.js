Promise.resolve()
  .then(() => {
    console.log("A");
    return Promise.resolve();
  })
  .then(() => {
    console.log("B");
  });

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// D A C B
