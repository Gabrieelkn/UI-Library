export default function List() {
  const items = [
    "First item in the list",
    "Second item with more content",
    "Third item with some additional detail",
    "Fourth item, which is quite descriptive",
  ];

  return (
    <div className="w-full h-96 grid items-center place-items-center">
      <div className="p-4 shadow-md border-[1px] border-gray-100 rounded-lg max-w-md mx-auto">
        <ul className=" space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className=" transition-all duration-100 ease-in-out px-1 rounded-md hover:bg-gray-300 dark:hover:text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
