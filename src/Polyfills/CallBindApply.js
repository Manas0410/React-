const obj = {
  name: "qwe",
  print: function () {
    console.log(this.name);
  },
};

function pr2(n2) {
  console.log(this.name + " x " + n2 + " is good");
}

Function.prototype.myCall = function (context, ...args) {
  context.fn = this; // Assign the function to a property of the context
  context.fn(...args); // Call the function with the context and arguments
  delete context.fn; // Clean up the property
  return this; // Return the original function
};

Function.prototype.myBind = function (context, ...args) {
  context.fn = this; // Assign the function to a property of the context
  return function (...newArgs) {
    context.fn(...args, ...newArgs); // Call the function with the context and combined arguments
  };
};

obj.print.myCall(obj); // Call the print method with obj as context

// pr2.myCall(obj);

const res = pr2.myBind(obj, "rty");
res(); // Call the bound function, which will use obj as context

Function.prototype.myApply = function (context, args) {
  context.fn = this;
  context.fn(...args);
  delete context.fn; // Clean up the property
  return this;
};

pr2.myApply(obj, ["wewwwe"]);
