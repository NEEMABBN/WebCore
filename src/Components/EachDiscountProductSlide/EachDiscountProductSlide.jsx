import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function EachDiscountProductSlide({
  image,
  title,
  percentNumber,
  Desc,
  versionNumber,
  saleNumber,
  scoreNumber,
  hashtag,
}) {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-Based w-full flex items-center p-3 gap-9 rounded-2xl">
      <div className="w-[25%] rounded-t-2xl rounded-br-2xl overflow-hidden">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="w-[75%] flex flex-col items-center gap-3">
        <div className="w-full flex items-center justify-between">
          <h3
            className={`text-2xl ${
              i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
            } text-white font-bold`}
          >
            {title}
          </h3>
          <div className="flex items-center bg-[#FF858538] rounded-2xl px-3 py-1 gap-1">
            <span className="text-[#FF3D3D]">%</span>
            <span className="text-[#FF3D3D]">{percentNumber}</span>
            <span className="text-[#FF3D3D]">
              {t("DiscountProductSlideDisName")}
            </span>
          </div>
        </div>
        <p className="text-white text-sm leading-6">{Desc}</p>
        <div className="w-full flex items-center justify-between pt-4">
          <div className="flex items-center bg-[#333546] py-2 px-5 rounded-b-2xl rounded-tl-2xl">
            <div className="flex items-center gap-1 border-solid border-l border-[#4C4E59] pl-7">
              <span className="text-white">{versionNumber}</span>
              <span className="text-[#7C89A3]">
                {t("DiscountProductSlideVersion")}
              </span>
            </div>
            <div className="flex items-center gap-1 border-solid border-l border-[#4C4E59] px-7">
              <span className="text-white">{saleNumber}</span>
              <span className="text-[#7C89A3]">
                {t("DiscountProductSlideSale")}
              </span>
            </div>
            <div className="flex items-center gap-1 border-solid border-l border-[#4C4E59] px-7">
              <span className="text-white">{scoreNumber}</span>
              <span className="text-[#7C89A3]">
                {t("DiscountProductSlideAs")}
              </span>
              <span className="text-white">{t("DiscountProductSlideTo")}</span>
              <span className="text-[#7C89A3]">
                {t("DiscountProductSlideScore")}
              </span>
            </div>
            <span className="text-white pr-7">{hashtag}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-Primary text-[#333546] hover:text-Primary hover:bg-[#333546] transition-all duration-300 rounded-2xl py-2 px-6 shadow-xl">
              {t("DiscountProductSlidePreviewBtn")}
            </button>
            <button className="bg-[#333546] text-Primary hover:text-[#333546] hover:bg-Primary transition-all duration-300 rounded-2xl py-2 px-6 shadow-xl">
              {t("DiscountProductSlideDetailBtn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
