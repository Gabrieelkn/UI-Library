"use client";
import { useState } from "react";
import dayjs from "dayjs";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const daysInMonth = currentDate.daysInMonth();
  const startOfMonth = currentDate.startOf("month").day();

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const renderDays = () => {
    const days = [];
    const today = dayjs().date(); // Get the current day of the month

    for (let i = 0; i < startOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="text-center text-gray-400"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today && currentDate.isSame(dayjs(), "month");
      days.push(
        <div
          key={day}
          className={`${
            isToday ? "bg-mainColor text-white" : ""
          } text-center py-2 cursor-pointer hover:bg-foreground hover:text-background rounded-lg`}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="w-[95%]  h-96 grid place-items-center">
      <div className="p-4 max-w-md mx-auto shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="px-2 py-1 bg-mainColor text-white rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 className="text-lg font-semibold">
            {currentDate.format("MMMM YYYY")}
          </h2>
          <button
            onClick={handleNextMonth}
            className="px-2 py-1 bg-mainColor text-white rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
            <div key={idx} className="text-center font-semibold">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
}
