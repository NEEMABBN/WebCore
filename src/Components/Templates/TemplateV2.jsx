import React from "react";
import Images from "../../Setting/Images";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function TemplateV2({ title, children }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center gap-9">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2
            className={`${
              i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
            } text-3xl font-bold text-white`}
          >
            {title}
          </h2>
          <img src={Images.VectorRight} alt="" className="" />
        </div>
        <button className="bg-Based border-solid border-2 border-[#4C4E59] rounded-full text-white py-2 px-5">
          {t("XHomeBtn")}
        </button>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
