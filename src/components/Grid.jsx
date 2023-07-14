import React from "react";

import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import SmallFilter from "./SmallFilter";

function Grid() {
  return (
    <>
      <div className="w-full sticky top-10 md:hidden border-gray-400 border">
        <SmallFilter />
      </div>
      <div className="flex">
        <div className="md:block mb-5 hidden w-40 bg-white md:w-64">
          <CategoryFilter />
        </div>
        <div className="flex-1 p-3 md:p-5">
          <ProductGrid />
        </div>
      </div>
    </>
  );
}

export default Grid;
