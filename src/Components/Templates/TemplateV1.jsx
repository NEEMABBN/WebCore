import React from "react";
import Images from "../../Setting/Images";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function TemplateV1({
  title,
  description,
  body,
  buttons,
  CustomBody,
  CustomButtons,
  className,
}) {
  const { i18n } = useTranslation();
  return (
    <div
      className={`${className} w-full flex flex-col items-center justify-between`}
    >
      <div className="w-full flex flex-col items-center gap-4">
        <img src={Images.VectorRight} alt="" className="sm:w-auto w-[66px]" />
        <h2
          className={`text-white sm:text-3xl text-2xl font-extrabold ${
            i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
          }`}
        >
          {title}
        </h2>
        <span className="text-white text-center">{description}</span>
      </div>
      <div className={`w-full ${CustomBody}`}>{body}</div>
      <div className={`w-full ${CustomButtons}`}>{buttons}</div>
    </div>
  );
}
