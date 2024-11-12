import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const ServiceBoxItemComponent = forwardRef(
  ({ icon, title, description, customClass }, ref) => {
    const { i18n } = useTranslation();
    return (
      <div
        ref={ref}
        className={`${customClass} p-4 bg-[#333546] rounded-2xl flex flex-col z-[2] items-start gap-5`}
      >
        <div className="w-full flex flex-row items-center gap-2">
          <img src={icon} alt="" className="" />
          <span
            className={`text-base text-white font-bold ${
              i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
            }`}
          >
            {title}
          </span>
        </div>
        <p className="text-white">{description}</p>
      </div>
    );
  }
);

export default ServiceBoxItemComponent;
