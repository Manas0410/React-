import { useEffect, useRef, useState } from "react";

const noOfFields = 4;

const OTP = () => {
  const inputRefs = new Array(noOfFields)
    .fill(null)
    .map(() => useRef<HTMLInputElement>(null));

  const [Value, setValue] = useState<string[]>([
    ...new Array(noOfFields).fill(""),
  ]);

  const inpChange = (index: number, key: string) => {
    if (key >= "0" && key <= "9") {
      setValue((prev) => {
        prev[index] = key;
        return [...prev];
      });
      if (index < noOfFields - 1) {
        inputRefs[index + 1].current?.focus();
      }
    } else {
      if (key === "Backspace") {
        if (Value[index] !== "") {
          setValue((prev) => {
            prev[index] = "";
            return [...prev];
          });
        } else if (index > 0) inputRefs[index - 1].current?.focus();
      }
    }
  };

  return (
    <div>
      {Array.from({ length: noOfFields }).map((_, i) => (
        <input
          key={i}
          type="number"
          className="w-12 h-12 border-2 border-gray-300 rounded-md text-center"
          autoFocus={i === 0}
          ref={inputRefs[i]}
          onKeyDown={(e) => inpChange(i, e.key)}
          value={Value[i]}
        />
      ))}
    </div>
  );
};

export default OTP;
