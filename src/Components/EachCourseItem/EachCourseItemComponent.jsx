import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import i18n from "../../i18n";

export default function EachCourseItemComponent({
  image,
  title,
  NickTeach,
  teacher,
  description,
  price,
  likes,
  Unit,
}) {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col items-start gap-2 border-l border-solid border-[#4C4E59] px-4 group sm:hover:scale-105 transition-all relative">
      <img src={image} alt="" className="rounded-t-2xl w-full" />
      <h3
        className={`text-white font-extrabold text-xl ${
          i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
        }`}
      >
        {title}
      </h3>
      <div className="flex items-center">
        <span className="text-white">{NickTeach}</span>
        <span className="text-white">{teacher}</span>
      </div>
      <p className="text-[#A9C1D4] text-sm">{description}</p>
      <button className="bg-[#333546] flex items-center justify-between w-full rounded-2xl px-4 py-[0.6rem] sm:group-hover:py-3 transition-all">
        <div className="flex items-center gap-2">
          <GoHeartFill className="text-white text-xl" />
          <span className="text-[#C8DAEA]">{likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white font-bold">{price}</span>
          <span className="text-[#C8DAEA]">{Unit}</span>
          <BsFillArrowUpRightCircleFill className="sm:group-hover:block hidden text-white text-2xl transition-all px-1" />
        </div>
      </button>
    </div>
  );
}
