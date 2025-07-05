// useMemo is a React Hook used to memoize a computed value so that React doesn’t re-compute it unnecessarily on every render.

// drawback : if it is used everywhere it can lead to memory leaks and performance issues, as it stores references to previous values.

// another usecase is refrencial equality, where you want to ensure that a function or object reference remains the same between renders unless its dependencies change.

import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //   const doubleNumber = slowFunction(number);
  //1st use case : Using useMemo to memoize the result of slowFunction
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //   on each rerender new object is created, so we use useMemo to memoize the styles
  //   const themeStyles = {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };

  //   2nd use case : Using useMemo to memoize the values
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <div>
      <input
        className="border-2 border-black rounded-md p-2 m-2"
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <div
        style={themeStyles}
        className="border-2 border-green-500 rounded-md p-2 m-2"
      >
        {doubleNumber}{" "}
      </div>
    </div>
  );
};

export default UseMemo;

function slowFunction(num: number) {
  console.log("Calling slow function");
  for (let i = 0; i < 1000000000; i++) {} // Simulating a slow function
  return num * 2;
}
