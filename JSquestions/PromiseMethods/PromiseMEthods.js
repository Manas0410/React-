const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected");
  }, 500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 800);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 100);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rej4");
  }, 50);
});

const res = Promise.any([p1, p2, p3, p4])
  .then((res) => console.log("dumdum:", res))
  .catch((err) => {
    console.log(err);
  });

console.log(res);
