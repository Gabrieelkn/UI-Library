export default function Pricing() {
  return (
    <div className="flex flex-col justify-start gap-5 items-center min-h-screen p-4">
      <div className="text-center max-w-md">
        <h1 className="h1">All access</h1>
        <h3 className="h3">
          Get lifetime access to 30+ components, all for a one-time payment.
        </h3>
      </div>
      <div className="bg-slate-300 grid place-items-center max-w-md h-[400px] w-full dark:bg-slate-700  shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Premium</h2>{" "}
        <span className="text-green-500 text-6xl font-bold">$50</span>
        <p className="text-center mb-6">one-time payment </p>
        <ul className="list-disc list-inside mb-6">
          <li>Access to all components</li>
          <li>Future updates included</li>
          <li>Customer support</li>
        </ul>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-150">
          Buy Now
        </button>
      </div>
    </div>
  );
}
