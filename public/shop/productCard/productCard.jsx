import Image from "next/image";
import React from "react";
import clock from "@/public/clock.jpg";

export default function Wrapper() {
  return (
    <div className="grid place-items-center h-96 w-full">
      <ProductCard name="Watch" price={20} image={clock} />
    </div>
  );
}

function ProductCard({ image, name, price }) {
  return (
    <div className=" w-3/4 max-w-[250px] rounded-lg shadow-sm shadow-foreground overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="w-full h-48"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className=" mb-4">${price}</p>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition flex items-center">
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
}
