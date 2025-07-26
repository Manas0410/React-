async function outer() {
  try {
    await inner(); // micro 1
    console.log("Outer End");
  } catch (e) {
    console.log("Caught:", e); //2
  }
}

async function inner() {
  console.log("asdfghj");
  throw new Error("Failure");
}

outer();
console.log("After Call"); //1
