console.log("Start"); //1

const p1 = new Promise((resolve, reject) => {
  console.log("Inside p1 executor"); //2
  resolve("Resolved p1");
});

const p2 = p1
  .then((value) => {
    console.log("p1 then:", value); //4
    return new Promise((resolve, reject) => {
      console.log("Inside nested promise in p1 then"); //5
      reject("Error from nested promise");
    });
  })
  .catch((err) => {
    console.log("p2 catch:", err); //6
    return "Recovered from error";
  })
  .then((val) => {
    console.log("After recovery:", val); //7
    throw new Error("Something went wrong again");
  })
  .catch((e) => {
    console.log("Final catch:", e.message); //8
  });

console.log("End"); //3
