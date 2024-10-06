const obj = {
  name: "Manas",
};

function printName(a, b, c) {
  console.log(this.name, a, b, c);
}

/**
 * A polyfill for Function.prototype.apply()
 * Applies the given function to the given context and arguments
 * @param {Object} context The context in which the function is to be applied
 * @param {Array} args The arguments to be applied to the function
 */

Function.prototype.myApply = function (context, args) {
  context.temp = this;
  context.temp(...args);
};

printName.myApply(obj, ["chotu", "my ", "girlfriend"]);
