"use client";
import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that enables server-side rendering and static site generation, making it easy to build fast and scalable web applications.",
    },
    {
      question: "How does Next.js handle routing?",
      answer:
        "Next.js uses a file-based routing system. Each file inside the `pages` directory automatically becomes a route in your application.",
    },
    {
      question: "What are the benefits of using Next.js?",
      answer:
        "Next.js offers performance optimizations, built-in CSS and Sass support, API routes, and more, making it a powerful framework for modern web development.",
    },
  ];

  return (
    <div className="max-w-lg mx-auto my-8">
      {faq.map((item, index) => (
        <div key={index} className="border-b border-gray-600">
          <button
            className="w-full text-left p-4 focus:outline-none transition duration-300 ease-in-out"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-medium flex justify-between items-center">
              {item.question}
              <span className="text-indigo-500">
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7-7-7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 10l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </h3>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="p-4 dark:text-gray-300">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
