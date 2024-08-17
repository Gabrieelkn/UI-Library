export default function User() {
  return (
    <div className="w-full h-96 grid place-items-center">
      <div className="flex items-center p-4 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="rounded-full bg-gray-200 dark:bg-gray-700 w-12 h-12 p-2 flex items-center justify-center">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-4 text-gray-800 dark:text-gray-200">
          <span className="block text-lg font-semibold">Joe</span>
          <span className="block text-sm text-gray-600 dark:text-gray-400">
            @joedoe
          </span>
        </div>
      </div>
    </div>
  );
}
