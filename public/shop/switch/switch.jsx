"use client";
import { useState } from "react";

export default function Switch() {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => setEnabled(!enabled);

  return (
    <div className="grid place-items-center h-96 w-full">
      <div
        onClick={toggleSwitch}
        className="bg-foreground
       relative inline-flex h-7 w-14 items-center rounded-full cursor-pointer transition-colors duration-300 ease-in-out"
      >
        <span
          className={`${
            enabled
              ? "translate-x-8 bg-mainColor"
              : "translate-x-1 bg-background"
          } inline-block w-5 h-5 transform  rounded-full transition-transform duration-300 ease-in-out`}
        />
      </div>
    </div>
  );
}
