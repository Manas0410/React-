import React, { useEffect, memo } from "react";

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

type ChildProps = {
  complexState: ComplexState;
};

const Child = ({ complexState }: ChildProps) => {
  useEffect(() => {
    console.log("child rerender");
  }, []);

  return <div>child : {complexState?.name?.fname?.id?.val}</div>;
};

const isMemoize = (prev: Readonly<ChildProps>, next: Readonly<ChildProps>) => {
  return (
    prev?.complexState?.name?.fname?.id?.val ===
    next?.complexState?.name?.fname?.id?.val
  );
};

export default Child;

// false => rerender
// true => no rerender
