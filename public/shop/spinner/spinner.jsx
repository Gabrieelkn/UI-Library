export default function Spinner() {
  return (
    <div className="w-full  h-96 grid place-items-center">
      <div className="flex justify-center items-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-[6px] border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
