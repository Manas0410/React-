// it is similar as useeffect
// but it runs synchronusly in between react  calclulates all layout positions and tell them to browser to browser actually paint those

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setShow((p) => !p);
  };

  //   useeffect will show flicker here
  useEffect(() => {
    if (show && popup.current && button.current) {
      const { bottom } = button.current.getBoundingClientRect();
      popup.current.style.top = `${bottom + 100}px`;
    }
  }, [show]);

  return (
    <div>
      <h1>UseLayoutEffect</h1>
      <button ref={button} onClick={handleClick}>
        Show Popup
      </button>
      {show && (
        <div
          ref={popup}
          className="absolute bg-gray-200 p-4 border border-gray-400 rounded shadow-lg"
        >
          this is popup
        </div>
      )}
    </div>
  );
};

export default UseLayoutEffect;
