import React from "react";
import { CiApple } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

function CategoryFilter() {
  return (
    <div className="sticky top-0 md:top-16 w-full px-2 md:px-5 pt-10 flex flex-col justify-start gap-5 items-start">
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Fruits & Vegetables</div>
        </div>
        <div className="">
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Meat and Fish</div>
        </div>
        <div className="">
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Snaks</div>
        </div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Pet care</div>
        </div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Home and Cleaning</div>
        </div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Dairy</div>
        </div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Cooking</div>
        </div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Breakfast</div>
        </div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Beverage</div>
        </div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex w-full  gap-3 justify-between items-center">
        <div className="flex gap-4">
          <CiApple size={25} />
          <div>Health & Beauty</div>
        </div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
