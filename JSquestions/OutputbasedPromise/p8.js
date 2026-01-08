async function outer() {
  try {
    await inner(); // micro 1
    console.log("Outer End");
  } catch (e) {
    console.log("Caught:", e.message);
  }
}

async function inner() {
  console.log("asdfghj");
  throw new Error("Failure");
}

outer();
console.log("After Call");
