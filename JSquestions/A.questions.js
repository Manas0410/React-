const thenable = {
  then: function (callback) {
    setTimeout(() => {
      callback(1);
    }, 100);
  },
};

// const val = await thenable;
// console.log(val);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

const val2 = await p;
console.log(val2);
const val = await thenable;
console.log(val);

// methods of promises
