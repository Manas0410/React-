const obj = {
  name: "Manas",
};

function printName(a, b, c) {
  console.log(this.name, a, b, c);
}

// printName.call(obj);

Function.prototype.myCall = function (context, ...args) {
  context.temp = this;
  context.temp(...args);
};
printName.myCall(obj, "chotu", "my ", "girlfriend");
