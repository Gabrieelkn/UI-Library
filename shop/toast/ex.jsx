"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Toast from "./toast";

export default function ToastDemo() {
  const [toast, setToast] = useState(false);
  const handleToast = () => {
    setToast(true);
  };

  return (
    <>
      <Button variant="outline" onClick={handleToast}>
        Show toast
      </Button>
      <Toast toast={toast} setToast={setToast} text="Form submitted" />
    </>
  );
}
