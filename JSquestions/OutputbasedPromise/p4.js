const promise = Promise.resolve("resolved");

promise.then((val) => console.log("First then:", val));
promise.then((val) => console.log("Second then:", val));

console.log("Outside");

// Outside First then:
