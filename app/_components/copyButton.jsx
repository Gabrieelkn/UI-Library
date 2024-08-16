"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";

function CopyButton({ code }) {
  const [value, setValue] = useState({ code });
  console.log(value);

  const [copied, setCopied] = useState(false);
  return (
    <CopyToClipboard text={value.code} onCopy={() => setCopied(true)}>
      <button className="p-1 dark:text-white absolute top-2 right-2 grid place-items-center hover:text-mainColor text-xl rounded-md w-9 h-9">
        {copied ? <FaRegCopy style={{ color: "green" }} /> : <FaRegCopy />}
      </button>
    </CopyToClipboard>
  );
}

export default CopyButton;
