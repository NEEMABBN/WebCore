import React from "react";
import Images from "../../Setting/Images";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function TemplateV2({ title, children }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="">{title}</h2>
          <img src={Images.VectorRight} alt="" className="" />
        </div>
        <button className="bg-Based border-solid border-2 border-[#4C4E59] rounded-full">
          {t("XHomeBtn")}
        </button>
      </div>
      <div className="">{children}</div>
    </div>
  );
}
