import React, { useState } from "react";
import Child from "./Child";

type ComplexState = {
  name: {
    fname: {
      val: string;
      id: {
        val: number;
      };
    };
    lname: {
      val: string;
    };
  };
};

const Parent = () => {
  const [Val, setVal] = useState<string>("");
  const [complexState, setComplexState] = useState<ComplexState>({
    name: {
      fname: {
        val: "manas",
        id: {
          val: 1,
        },
      },
      lname: { val: "sr" },
    },
  });

  const changeFnameId = () => {
    setComplexState((prevState) => ({
      ...prevState,
      name: {
        ...prevState.name,
        fname: {
          ...prevState.name.fname,
          id: {
            val: prevState.name.fname.id.val + 1,
          },
        },
      },
    }));
  };

  return (
    <div>
      Parent
      <input
        type="text"
        onChange={(e) => setVal(e.target.value)}
        className="border-2 border-cyan-400"
      />
      <Child complexState={complexState} />
      <button onClick={changeFnameId}>Change fname id</button>
    </div>
  );
};

export default Parent;
