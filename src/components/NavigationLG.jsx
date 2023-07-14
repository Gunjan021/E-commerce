import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavigationLG() {
  return (
    <div className="sticky bg-slate-200 py-7 z-50 top-0 hidden md:flex justify-between items-center px-5">
      <div>
        <img
          className="h-6"
          src="https://umino-demo.myshopify.com/cdn/shop/files/lgh_f6.png?v=1679891172&width=165"
          alt=""
        />
      </div>
      <ul className="flex md:gap-6 lg:gap-10">
        <li>Home</li>
        <li>Shop</li>
        <li>Product</li>
        <li>Blog</li>
        <li>Page</li>
        <li>Sale</li>
        <li>Buy Umino!</li>
      </ul>
      <div className="flex items-center md:gap-2 lg:gap-3">
        <FiSearch size={20} />
        <BiUser size={20} />
        <IoMdTime size={20} />
        <FcLike size={20} />
        <div>
          <AiOutlineShoppingCart size={20} />
        </div>
        <div className="absolute top-3 right-2 px-1  rounded-full bg-red-600 text-center text-white">
          1
        </div>
      </div>
    </div>
  );
}

export default NavigationLG;
