"use client";

import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full h-96 grid place-items-center">
      <div className="flex justify-center items-center">
        <input
          type="checkbox"
          className="h-5 w-5 transition-all duration-200 ease-in-out bg-gray-100 shadow-lg border-[1px] border-slate-300 rounded-md checked:bg-blue-500"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className="ml-2">Accept terms and conditions</label>
      </div>
    </div>
  );
}
