import React from "react";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";

export default function ProductImageItem({
  size,
  title,
  category,
  image,
  hoverBox,
  display = "flex",
}) {
  return (
    <div className={`${size} rounded-2xl overflow-hidden relative group`}>
      <img src={image} alt="" className="w-full" />
      {hoverBox}
      <div
        className={`${display} bg-[#202026] items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 duration-300 transition-all`}
      >
        <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all duration-300 text-3xl" />
        <span className="text-[#A9C1D4]">{title}</span>
        <span className="text-white">/</span>
        <span className="text-white">{category}</span>
      </div>
    </div>
  );
}
