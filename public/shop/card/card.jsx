export default function CardWrapper() {
  return (
    <div className="h-96 grid place-items-center w-full">
      <Card title="Title" text="This is the text for the card" />
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className=" w-3/4 flex items-center justify-center z-50">
      <div className="dark:bg-gray-800 rounded-lg shadow-lg w-3/4 p-6 relative">
        <h2 className="text-xl dark:text-white font-semibold mb-4">{title}</h2>
        <p className="dark:text-white">{text}</p>
      </div>
    </div>
  );
}
