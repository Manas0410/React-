import { Profiler, useMemo, useState } from "react";

const ReactProfiler = () => {
  const [counter, setCounter] = useState(0);
  // @ts-ignore
  const onReder = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    console.log(
      {
        id,
        phase,
        actualTime,
        baseTime,
        startTime,
        commitTime,
      },
      "profiler"
    );
  };

  //   const CounterUI = () => <p>Counter: {counter}</p>;
  //   actualTime: 0.29999999701976776;
  //   baseTime: 0.10000000894069672;
  //   commitTime: 227;
  //   id: "app";
  //   phase: "mount";
  //   startTime: 226.5;

  //   actualTime: 0.7999999970197678;
  //   baseTime: 0.3999999910593033;
  //   commitTime: 2559;
  //   id: "app";
  //   phase: "update";
  //   startTime: 2558.1000000089407;

  const CounterUI = useMemo(() => <p>Counter: {counter}</p>, [counter]);
  //   actualTime: 0.20000000298023224;
  //   baseTime: 0.09999999403953552;
  //   commitTime: 234.19999998807907;
  //   id: "app";
  //   phase: "mount";
  //   startTime: 233.79999999701977;

  //   actualTime: 0.20000000298023224;
  //   baseTime: 0.10000000894069672;
  //   commitTime: 27860;
  //   id: "app";
  //   phase: "update";
  //   startTime: 27859.69999998808;

  return (
    <Profiler id="app" onRender={onReder}>
      <div>
        <h1>React Profiler Example</h1>
        {CounterUI}
        <button onClick={() => setCounter(counter + 1)}>
          Increment Counter
        </button>
      </div>
    </Profiler>
  );
};

export default ReactProfiler;

// | Property                  | Description                                                                                                                           |
// | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
// | `id`                      | Matches the `id` prop of `<Profiler>` ("app" in your case)                                                                            |
// | `phase`                   | `"mount"` (on first render) or `"update"` (on re-renders)                                                                             |
// | `actualTime`              | Time spent rendering components that weren’t memoized                                                                                 |
// | `baseTime`                | Time React estimates it would take to re-render the entire tree without optimizations (memoization, `PureComponent`, `useMemo`, etc.) |
// | `startTime`               | When React began rendering this update (timestamp)                                                                                    |
// | `commitTime`              | When React committed this render (applied to DOM)                                                                                     |
// | `interactions` (optional) | A Set of interactions tracked via `Scheduler` API (useful for advanced tracing, often omitted)                                        |
