import React from "react";

function TopHeader() {
  return (
    <div className="hidden md:flex justify-between items-center px-5 py-3 bg-[#111111] text-[#999983]">
      <div className="flex flex-col lg:flex-row md:gap-0 lg:gap-4">
        <p>+222-1800-2628</p>
        <p>blueskytechcompany@gmail.com</p>
      </div>
      <div className="flex flex-row md:gap-0 lg:gap-4">
        <p>Sign up for 10% off your first order: </p>
        <p className="text-white underline">Sign Up</p>
      </div>
      <div className="flex flex-col lg:flex-row md:gap-0 lg:gap-4">
        <p>Our Stores</p>
        <p>United States (USD $)</p>
        <p>English </p>
      </div>
    </div>
  );
}

export default TopHeader;
