import React from "react";

export default function SomeProductsTemplate({ image, templates }) {
  return (
    <div className="flex items-center gap-2 group bg-[#333546] rounded-2xl px-3 py-2">
      <div className="bg-Based p-2 rounded-2xl">
        <img src={image} alt="" className="" />
      </div>
      <span className="text-[#A9C1D4] group-hover:text-white transition-all duration-300">
        {templates}
      </span>
    </div>
  );
}
