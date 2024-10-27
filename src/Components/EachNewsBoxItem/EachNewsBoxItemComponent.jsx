import React from "react";

export default function EachNewsBoxItemComponent({
  title,
  CustomMiniBg,
  image,
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-7 h-[300px] bg-[#333546] rounded-2xl p-3">
      <span className="text-white text-lg font-bold">{title}</span>
      <div className="w-full relative rounded-b-2xl object-cover">
        <img src={image} alt="" className="w-full" />
        <span
          className={`absolute top-2 left-2 text-[#C8DAEA] ${CustomMiniBg}`}
        ></span>
      </div>
    </div>
  );
}
