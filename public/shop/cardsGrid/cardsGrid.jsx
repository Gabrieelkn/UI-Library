import React from "react";

export default function GridCards() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card
          title="Card title 1"
          description="This is a description for the first card. It gives a brief overview
            of what the card is about."
          action="Learn more"
        />
        <Card
          title="Card title 2"
          description=" This is a description for the second card. It provides more details
            about the content of the card."
          action="Learn more"
        />
        <Card
          title="Card title 3"
          description=" This is a description for the third card. It provides more details
            about the content of the card."
          action="Learn more"
        />
      </div>
    </div>
  );
}

function Card({ title, description, action }) {
  return (
    <div className="rounded-lg flex justify-between flex-col shadow-lg dark:bg-muted p-5">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className=" mb-4">{description}</p>
      <button className="w-full bg-mainColor text-white px-3 py-2 rounded-lg hover:bg-indigo-600 transition">
        {action}
      </button>
    </div>
  );
}
