Promise.resolve()
  .then(() => {
    console.log("1");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("2");
        resolve("3");
      }, 0);
    });
  })
  .then((val) => {
    console.log(val);
  });

console.log("4");

// 4 1 2 3
