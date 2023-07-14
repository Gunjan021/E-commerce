import React, { useEffect, useState } from "react";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import data from "../Data.json";

function ProductGrid() {
  const [cart, setCart] = useState(data);

  const incrementItem = (id) => {
    const temp = cart.map((e) => {
      if (e.id == id) {
        e.quentity += 1;
      }
      console.log(e);
      return e;
    });
    setCart(temp);
  };
  useEffect(() => {}, [cart]);

  const decrementItem = (id) => {
    const temp = cart.map((e) => {
      if (e.id == id) {
        e.quentity -= 1;
      }
      console.log(e);
      return e;
    });
    setCart(temp);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {cart.map((items) => {
        return (
          <div
            key={items.id}
            className="bg-white md:w-fit md:max-w-xs flex flex-col items-start rounded-lg overflow-hidden"
          >
            <div className="">
              <img className="" src={items.image} alt="" />
            </div>
            <div className="px-10 py-2">
              <div>$ {items.price}</div>
              <div>{items.title}</div>
            </div>
            <div className="w-5/6 mx-auto group mb-6 flex rounded-lg overflow-hidden">
              <button
                onClick={() => decrementItem(items.id)}
                className={`py-3 px-3 ${
                  items.quentity !== 0 ? "block" : "hidden"
                } bg-gray-300 group-hover:bg-teal-300 transition-colors duration-300 ease-in-out`}
              >
                <GrFormSubtract />
              </button>
              <button
                onClick={() => incrementItem(items.id)}
                disabled={items.quentity > 0 ? true : false}
                className="py-3 flex-1 px-2 md:px-10 bg-gray-200 w-full group-hover:bg-teal-200 transition-colors duration-200 ease-in-out"
              >
                {items.quentity <= 0 ? "Add" : items.quentity}
              </button>
              <button
                onClick={() => incrementItem(items.id)}
                className="py-3 px-3 bg-gray-300 group-hover:bg-teal-300 transition-colors duration-300 ease-in-out"
              >
                <GrFormAdd />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
