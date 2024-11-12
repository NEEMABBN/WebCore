import React, { useEffect, useState } from "react";
import Images from "../../../Setting/Images";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

export default function AboutWebCore() {
  const [count1, setCount1] = useState();
  const [count2, setCount2] = useState();
  const [count3, setCount3] = useState();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = 30;
      const duration = 4000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount1(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }
    if (inView) {
      let start = 0;
      const end = 74;
      const duration = 4000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount2(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }
    if (inView) {
      let start = 0;
      const end = 864;
      const duration = 4000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount3(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }
  }, [inView]);

  return (
    <div className="w-full bg-[#141418] bg-[url('/src/assets/Images/RectGroup.png')] bg-cover py-20">
      <div className="container mx-auto flex flex-col items-start gap-10">
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-between">
          <div className="md:w-1/2 w-full flex flex-col md:items-start items-center gap-4 sm:px-0 px-5">
            <div className="sm:w-auto w-[66px]">
              <img src={Images.VectorRight} alt="" className="" />
            </div>
            <h2
              className={`text-white font-extrabold sm:text-3xl text-2xl ${
                i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
              }`}
            >
              {t("HomeFamilyTitle")}
            </h2>
            <span
              className={`text-white font-bold md:text-start text-center sm:text-base text-[15px] ${
                i18n.language === "fa" ? "PersiaReg" : "EnglishReg"
              }`}
            >
              {t("HomeFamilySubTitle")}
            </span>
            <p className="text-white text-sm leading-6 md:text-start text-center">
              {t("HomeFamilyDesc")}
            </p>
          </div>

          <div className="md:w-auto w-full flex lg:flex-row flex-col items-center sm:gap-3 gap-5 sm:px-0 px-5">
            <div className="flex md:flex-col md:w-auto w-full justify-between items-center">
              <span
                className={`flex items-center ${
                  i18n.language === "fa"
                    ? "PersiaExtra flex-row"
                    : "EnglishExtra flex-row-reverse"
                } py-3 sm:text-[55px] text-4xl text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]`}
              >
                {count1}
                <span className="">+</span>
              </span>
              <span className="text-[#A9C1D4] text-center">
                {t("NumberOfFamilyTitle")}
              </span>
            </div>
            <span className="lg:w-[1px] w-full lg:h-[100px] h-[1px] bg-[#4C4E59]"></span>
            <div className="flex md:flex-col md:w-auto w-full justify-between items-center">
              <span
                className={`flex items-center ${
                  i18n.language === "fa"
                    ? "PersiaExtra flex-row"
                    : "EnglishExtra flex-row-reverse"
                } py-3 sm:text-[55px] text-4xl text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]`}
              >
                {count2}
                <span className="">+</span>
              </span>
              <span className="text-[#A9C1D4] text-center">
                {t("NumberOfProductsTitle")}
              </span>
            </div>
            <span className="lg:w-[1px] w-full lg:h-[100px] h-[1px] bg-[#4C4E59]"></span>
            <div className="flex md:flex-col md:w-auto w-full justify-between items-center">
              <span
                ref={ref}
                className={`flex items-center ${
                  i18n.language === "fa"
                    ? "PersiaExtra flex-row"
                    : "EnglishExtra flex-row-reverse"
                } py-3 sm:text-[55px] text-4xl text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]`}
              >
                {count3}
                <span className="">+</span>
              </span>
              <span className="text-[#A9C1D4] text-center">
                {t("NumberOfProjectTitle")}
              </span>
            </div>
          </div>
        </div>

        <CustomButtonComponent custom="w-full flex items-center md:justify-start justify-center">
          {t("HomeFamilyBtn")}
        </CustomButtonComponent>
      </div>
    </div>
  );
}
