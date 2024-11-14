import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function MiniBoxProductsItems({ text }) {
  return (
    <div className="!p-[1.5px] cursor-pointer group transition-all duration-300 bg-[#4C4E59] hover:bg-gradient-to-r hover:from-Primary hover:to-white hover:shadow-[0_0_20px_-5px_rgba(83,233,255,0.3)] rounded-full">
      <div className="bg-Based rounded-full flex items-center px-3 py-1 gap-3">
        <span className="text-white text-nowrap">{text}</span>
        <div className="bg-[#4C4E59] group-hover:bg-gradient-to-l group-hover:from-Primary group-hover:to-white transition-all duration-300 p-2 rounded-full flex items-center justify-center">
          <FaCheck className="group-hover:text-Based text-Primary transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}
