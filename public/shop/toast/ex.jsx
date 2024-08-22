"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Toast from "./toast";

export default function ToastDemo() {
  const [toast, setToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const handleToast = () => {
    setToast(true);
  };
  const handleErrorToast = () => {
    setErrorToast(true);
  };

  return (
    <div className="w-full h-96 grid content-center justify-center gap-2">
      <Button variant="secondary" onClick={handleToast}>
        Show toast
      </Button>
      <Toast toast={toast} setToast={setToast} text="Form submitted" />
      <Button variant="secondary" onClick={handleErrorToast}>
        Show error toast
      </Button>
      <Toast
        toast={errorToast}
        setToast={setErrorToast}
        variant="error"
        text="Ups! Try again!"
      />
    </div>
  );
}
