import React from "react";
import { FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <div
      className="flex flex-col px-5 md:px-80 justify-center items-center h-screen w-full bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(
          "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=1200&q=75"
        )`,
      }}
    >
      <div className="mb-28 text-center">
        <div className="text-5xl font-bold">
          Groceries Delivered in 90 Minute
        </div>
        <div className="text-md text-gray-700 mt-5 font-normal">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </div>
        <div className="mt-5 w-full flex rounded-md shadow ">
          <input
            type="text"
            placeholder="Search your products from here"
            className="py-3 w-full flex-1 border outline-none px-2 md:px-14 rounded-l-md"
          />
          <button className="py-3 flex items-center gap-3 border px-2 md:px-14 rounded-r-md outline-none bg-teal-600 text-white">
            <FiSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
