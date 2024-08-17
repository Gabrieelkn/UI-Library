export default function PriceWrapper() {
  return <PriceDiscount originalPrice={350} discount={10} />;
}

function PriceDiscount({ originalPrice, discount }) {
  const discountedPrice = originalPrice - (originalPrice * discount) / 100;

  return (
    <div className="h-96 grid items-center">
      <div className=" p-4 bg-white shadow-md rounded-lg max-w-xs mx-auto">
        <div className="flex justify-center items-center text-center">
          <p className="text-xl font-bold text-gray-900 line-through">
            ${originalPrice.toFixed(2)}
          </p>
          <p className="ml-2 text-sm font-medium text-gray-500">
            -({discount}%)
          </p>
        </div>
        <div className="flex justify-center items-baseline mt-2">
          <p className="text-4xl font-extrabold text-green-600">
            ${discountedPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
