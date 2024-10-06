const obj = {
  name: "Manas",
};

function printName(a, b, c) {
  console.log(this.name, a, b, c);
}

Function.prototype.myBind = function (context = {}, ...args) {
  context.temp = this;
  return function (...newArgs) {
    context.temp(...args, ...newArgs);
  };
};

const fn = printName.myBind(obj);
fn("chotu", "my ", "girlfriend");
