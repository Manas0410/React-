Promise.resolve("Go")
  .then((val) => {
    console.log(val);
    return Promise.resolve("Next");
  })
  .then((val) => {
    console.log(val);
    return Promise.resolve("Final");
  })
  .then((val) => {
    console.log(val);
  });

Promise.resolve().then(() => {
  console.log("Parallel");
});

// go Parallel next final Parallel

// first it will push first pro mmise to queue and thes paralel promise an d then when it will come inside and found other promises then starts puahing them and it will get executed in the order the n got queued
