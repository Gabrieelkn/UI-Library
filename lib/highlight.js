"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

export const HighlightCode = ({ content, language }) => {
  const { theme } = useTheme();
  return (
    <SyntaxHighlighter
      language={language}
      customStyle={{ margin: "0", borderRadius: "6px" }}
      style={theme === "dark" ? coldarkDark : coldarkCold}
    >
      {content}
    </SyntaxHighlighter>
  );
};
