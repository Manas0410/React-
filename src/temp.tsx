import React, { useMemo, useState } from "react";

const throttl1 = (cb, delay) => {
  let shouldWait = false;
  let waitingArgs = null;

  const timeoutFunction = () => {
    shouldWait = false; //
    if (waitingArgs) {
      cb(...waitingArgs);
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
    console.log("asdfghj");
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
