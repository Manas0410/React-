// useRef is a React Hook that allows you to:

// Create a reference to a DOM element.

// Persist a mutable value across renders without causing re-renders.

import { useEffect, useRef, useState } from "react";
export const UseRef = () => {
  const renderCount = useRef(1);
  const [inputValue, setInputValue] = useState("");

  // first useCase : we can count number of renders
  useEffect(() => {
    renderCount.current++;
  });

  //   Most common use case : used to store the reference of a DOM element
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input field on component mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  //   third useCase : store previous value of any state

  const prevNameRef = useRef<string | null>(null);

  //   useeffect code executes after rerender complte
  useEffect(() => {
    prevNameRef.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 border-blue-500 p-2 rounded-md"
      />
      <p>my name is {inputValue}</p>
      <p>my previous name was {prevNameRef.current}</p>
      <h2>Render Count: {renderCount.current}</h2>
    </div>
  );
};
