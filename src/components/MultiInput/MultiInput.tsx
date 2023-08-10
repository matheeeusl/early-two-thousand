import { IMultiInput } from "@/types";
import React, { useState, useRef, ChangeEvent } from "react";

export const MultiInput = ({
  length,
  onComplete,
}: IMultiInput): React.ReactElement => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef<HTMLInputElement[]>([]);

  const processInput = (e: ChangeEvent<HTMLInputElement>, slot: number) => {
    const num = e.target.value;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot: number) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <div className="code-input">
      <div className="code-inputs gap-1 flex">
        {code.map((num, idx) => {
          return (
            <input
              className="border border-2 border-black w-10 h-16 text-center"
              key={idx}
              type="text"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              ref={(ref) => inputs.current.push(ref as HTMLInputElement)}
            />
          );
        })}
      </div>
    </div>
  );
};
