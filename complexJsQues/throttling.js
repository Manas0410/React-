const throttle = (cb, delay) => {
  let shouldStop = false;
  let waitingArgs = null;

  const timeoutFunction = () => {
    if (!waitingArgs) {
      shouldStop = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunction, delay);
    }
  };

  return (...args) => {
    if (shouldStop) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldStop = true;

    setTimeout(timeoutFunction, delay);
  };
};
