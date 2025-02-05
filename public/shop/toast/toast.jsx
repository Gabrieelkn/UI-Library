"use client";
import { useEffect } from "react";

export default function Toast({ toast, setToast, text, variant = "success" }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        // Trigger the slide-out animation by setting a CSS class
        document.getElementById("toast").classList.add("animate-slide-out-top");

        // Set toast to false after the animation ends
        setTimeout(() => {
          setToast(false);
        }, 500); // Match this duration to the slide-out animation duration
      }, 2500); // Display the toast for 2.5 seconds before starting to slide out

      return () => clearTimeout(timer); // Clear timeout if the effect is cleaned up
    }
  }, [toast, setToast]);

  const toastVariants = {
    success: `fixed top-[5%] left-1/2 transform -translate-x-1/2 z-[9999] w-[200px] p-4 flex justify-center items-center gap-2 bg-[rgb(0,229,0)] text-white font-bold rounded-lg shadow-lg animate-slide-in-top`,
    error: ` fixed top-[5%] left-1/2 transform -translate-x-1/2 z-[9999] w-[200px] p-4 flex justify-center items-center gap-2 bg-[rgb(229,0,0)] text-white font-bold rounded-lg shadow-lg animate-slide-in-top`,
  };

  return (
    toast && (
      <div id="toast" className={toastVariants[variant]}>
        <span>{text}</span>
        {variant === "success" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="#ffffff"
          >
            <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
          </svg>
        ) : (
          <svg width="18" height="18">
            <line
              x1="2"
              y1="2"
              x2="16"
              y2="16"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="16"
              y1="2"
              x2="2"
              y2="16"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        )}
      </div>
    )
  );
}
