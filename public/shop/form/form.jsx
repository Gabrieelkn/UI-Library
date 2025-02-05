"use client";
import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    number: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full  h-96 grid place-items-center">
      <form
        className="w-[95%] max-w-[300px] mx-auto grid place-items-center gap-4 relative"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col items-start">
          <input
            className="p-2 rounded-md dark:bg-muted dark:placeholder-foreground border border-gray-300 w-full outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleInputChange}
            required
            placeholder="Name"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <input
            className="p-2 rounded-md dark:bg-muted dark:placeholder-foreground border border-gray-300 w-full outline-none focus:border-blue-500"
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            required
            placeholder="Email"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <input
            className="p-2 rounded-md dark:bg-muted dark:placeholder-foreground border border-gray-300 w-full outline-none focus:border-blue-500"
            type="text"
            name="street"
            value={formData.street || ""}
            onChange={handleInputChange}
            required
            placeholder="Street"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <input
            className="p-2 rounded-md dark:bg-muted dark:placeholder-foreground border border-gray-300 w-full outline-none focus:border-blue-500"
            type="text"
            name="number"
            value={formData.number || ""}
            onChange={handleInputChange}
            required
            placeholder="Number"
          />
        </div>

        <button
          className={`p-2 w-full max-w-[150px] rounded-md text-white ${
            isSent ? "bg-green-500" : "bg-blue-500"
          }`}
          type="submit"
        >
          {isSent ? "Sent" : "Submit"}
        </button>
      </form>
    </div>
  );
}
