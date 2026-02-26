import React, { useMemo, useState } from "react";

const throttl1 = (cb, delay) => {
  let shouldWait = false;
  let waitingArgs = null;

  const timeoutFunction = () => {
    if (!waitingArgs)
      shouldWait = false; //
    else {
      cb(...waitingArgs);
      console.log("waiting");
      waitingArgs = null;
      setTimeout(timeoutFunction, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    console.log("main");

    setTimeout(() => {
      timeoutFunction();
    }, delay);
  };
};

const throttl2 = (fun, delay) => {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now; // ✅ update time
      fun.apply(this, args);
    }
  };
};

function Temp() {
  const [state, setState] = useState();
  const handleChange = (e) => {
    setState(e.target.value);
  };

  const throttlChange = useMemo(() => throttl1(handleChange, 2000), []);

  return (
    <>
      <input
        className="border"
        type="text"
        onChange={throttlChange}
        // value={state}
      />

      <p>{state}</p>
    </>
  );
}

export default Temp;
