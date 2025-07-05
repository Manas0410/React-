// useCallback is a React Hook used to memoize a function, so the same function instance is returned unless dependencies change.

import { useCallback, useMemo, useState } from "react";
import List from "./List";

const UseCallBack = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // this function will be recreted everytime the component re-renders
  // const getItems = () => [number, number + 1, number + 2];

  // using useCallback to memoize the function so that it is not recreated on every render

  // const getItems = useMemo(() => {
  //   return () => [number, number + 1, number + 2];
  // }, [number]);

  const getItems = useCallback(
    (incrementor: number) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div style={themeStyles}>
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
        <List getItems={getItems} />
      </div>
    </div>
  );
};

export default UseCallBack;

// the difference between useMemo and useCallback is that useMemo is used to memoize a value, while useCallback is used to memoize a function.
// useMemo returns a memoized value, while useCallback returns a memoized function.
// useMemo is useful when you want to avoid expensive calculations on every render, while useCallback is useful when you want to avoid recreating functions on every render.
