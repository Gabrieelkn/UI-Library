"use client";
import { useState } from "react";

export default function TooltipWrapper() {
  return (
    <div className="w-full h-96 grid place-items-center">
      <Tooltip text="This is a tooltip">
        <button className="p-2 bg-blue-500 w-3/4 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  );
}

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="w-32 grid place-items-center relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div
        className={`${
          visible ? "opacity-100" : "opacity-0 z-[-99999]"
        } absolute transition-all duration-500 ease-in-out bottom-full text-center mb-2 w-32 p-2 text-sm rounded-md shadow-foreground shadow-sm`}
      >
        {text}
      </div>
    </div>
  );
}
