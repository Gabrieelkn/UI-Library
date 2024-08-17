"use client";
import { useState } from "react";

export default function StarsRating() {
  const [stars, setStars] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleMouseOver = (rating) => {
    if (clicked) return;
    setStars(rating);
  };

  const handleMouseOut = () => {
    if (clicked) return;
    setStars(0);
  };

  const onClick = (rating) => {
    setClicked(true);
    setStars(rating);
  };

  return (
    <div className="w/full h-96 items-center justify-center flex space-x-1">
      {Array(5)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            id={`star-${index + 1}`}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseOut={handleMouseOut}
            onClick={() => onClick(index + 1)}
            className="cursor-pointer"
          >
            {index < stars ? (
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 border-1 border-red"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="gray"
                strokeWidth={1}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            )}
          </div>
        ))}
    </div>
  );
}
