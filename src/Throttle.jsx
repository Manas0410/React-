const Throttle = () => {
  const myThrottle = (callback, delay) => {
    let lastExecutionTime = 0; // 'let' so it can be updated

    return (...args) => {
      const currentTime = Date.now();
      if (currentTime - lastExecutionTime > delay) {
        callback(...args);
        lastExecutionTime = currentTime; // Update last execution time
      }
    };
  };

  return <section></section>;
};

export default Throttle;
