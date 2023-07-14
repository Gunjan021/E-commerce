import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

function SmallFilter() {
  return (
    <div className="flex justify-between py-2 px-5 items-center bg-white">
      <div>
        <button className="bg-gray-100 px-10 flex items-center gap-3 rounded-lg py-1">
          <span>
            <BsFilter />
          </span>
          Filter
        </button>
      </div>
      <div>
        <button className="px-5 flex items-center gap-4 py-2">
          Grossory
          <span>
            <AiOutlineDown />
          </span>
        </button>
      </div>
    </div>
  );
}

export default SmallFilter;
