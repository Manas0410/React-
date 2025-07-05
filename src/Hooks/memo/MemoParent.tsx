// Higherv order componennt in react that prevents unneccessary rerenders
// when props dont change child component will not rerender
// use shallow comparison to check if props have changed

import { useState } from "react";
import MemoChild from "./MemoChild";

const MemoParent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  return (
    <div>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Inc Parent Count
      </button>
      <button onClick={() => setChildCount(childCount + 1)}>
        Inc Child Count
      </button>
      <h1>Parent Count: {parentCount}</h1>

      <MemoChild count={childCount} />
    </div>
  );
};

export default MemoParent;
