import React from "react";
import ConfigIcons from "../../../Setting/ConfigIcons";

export default function LinearIcons() {
  return (
    <div className="w-full flex items-center gap-3 my-20">
      {ConfigIcons.map((item, index) => (
        <div
          className="bg-Secoundray p-3 icon rounded-2xl hover:shadow-Primary hover:shadow-[0px_0px_30px_-5px_rgba(23,225,255,0.5)] transition-all"
          key={index}
        >
          <img src={item.Icon} alt="Tools Icon" className="" />
        </div>
      ))}
    </div>
  );
}
