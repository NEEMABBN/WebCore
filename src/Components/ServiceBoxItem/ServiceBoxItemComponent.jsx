import React from "react";

export default function ServiceBoxItemComponent({
  icon,
  title,
  description,
  customClass,
}) {
  return (
    <div
      className={`${customClass} w-[23rem] p-4 bg-[#333546] rounded-2xl flex flex-col items-start gap-5`}
    >
      <div className="w-full flex flex-row items-center gap-2">
        <img src={icon} alt="" className="" />
        <span className="text-base text-white font-bold">{title}</span>
      </div>
      <p className="text-white">{description}</p>
    </div>
  );
}
