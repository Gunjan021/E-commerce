import React from "react";
import { GrFormAdd } from "react-icons/gr";
import CategoryFilter from "./CategoryFilter";

function Grid() {
  return (
    <div className="flex">
      <div className="w-40 md:w-64">
        <CategoryFilter />
      </div>
      <div className="flex-1">
        <div className="p-3 md:p-10 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((items) => {
            return (
              <div className="bg-white w-52 md:w-fit md:max-w-xs flex flex-col items-start rounded-lg overflow-hidden">
                <div className="">
                  <img
                    className=""
                    src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75"
                    alt=""
                  />
                </div>
                <div className="px-10 py-2">
                  <div>${items} </div>
                  <div>Apples</div>
                </div>
                <div className="w-5/6 mx-auto group mb-6 flex rounded-lg overflow-hidden">
                  <button className="py-3 flex-1 px-10 bg-gray-200 w-full group-hover:bg-teal-200 transition-colors duration-200 ease-in-out">
                    Add
                  </button>
                  <button className="py-3 px-3 bg-gray-300 group-hover:bg-teal-300 transition-colors duration-300 ease-in-out">
                    <GrFormAdd />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Grid;
