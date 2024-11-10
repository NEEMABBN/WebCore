import React, { useEffect, useRef, useState } from "react";
import Images from "../../../Setting/Images";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

export default function AboutWebCore() {
  const [count1, setCount1] = useState();
  const [count2, setCount2] = useState();
  const [count3, setCount3] = useState();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const paragraphRef = useRef(null);
  const { t } = useTranslation();

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
  const formattedCount1 = new Intl.NumberFormat("fa-IR").format(count1);
  const formattedCount2 = new Intl.NumberFormat("fa-IR").format(count2);
  const formattedCount3 = new Intl.NumberFormat("fa-IR").format(count3);

  useEffect(() => {
    gsap.from(imageRef.current, {
      y: -40,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        scrub: false,
      },
      ease: "elastic.out",
    });
    gsap.from(titleRef.current, {
      y: -40,
      duration: 2,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        scrub: false,
      },
      ease: "elastic.out",
    });
    gsap.from(descriptionRef.current, {
      y: -40,
      duration: 2,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
        scrub: false,
      },
      ease: "elastic.out",
    });
    gsap.from(paragraphRef.current, {
      y: -40,
      duration: 2,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        scrub: false,
      },
      ease: "elastic.out",
    });
  }, []);

  return (
    <div className="w-full bg-[#141418] bg-[url('/src/assets/Images/RectGroup.png')] bg-cover py-20">
      <div className="container mx-auto flex flex-col items-start gap-10">
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-between">
          <div className="md:w-1/2 w-full flex flex-col md:items-start items-center gap-4 sm:px-0 px-5">
            <div ref={imageRef} className="sm:w-auto w-[66px]">
              <img src={Images.VectorRight} alt="" className="" />
            </div>
            <h2
              ref={titleRef}
              className="text-white font-extrabold sm:text-3xl text-2xl"
            >
              {t("HomeFamilyTitle")}
            </h2>
            <span
              ref={descriptionRef}
              className="text-white font-bold md:text-start text-center sm:text-base text-[15px]"
            >
              {t("HomeFamilySubTitle")}
            </span>
            <p
              ref={paragraphRef}
              className="text-white text-sm leading-6 md:text-start text-center"
            >
              {t("HomeFamilyDesc")}
            </p>
          </div>

          <div className="md:w-auto w-full flex lg:flex-row flex-col items-center sm:gap-3 gap-5 sm:px-0 px-5">
            <div className="flex md:flex-col md:w-auto w-full justify-between items-center">
              <span className="DanaBold py-3 sm:text-[55px] text-4xl text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
                {formattedCount1}+
              </span>
              <span className="text-[#A9C1D4] text-center">
                {t("NumberOfFamilyTitle")}
              </span>
            </div>
            <span className="lg:w-[1px] w-full lg:h-[100px] h-[1px] bg-[#4C4E59]"></span>
            <div className="flex md:flex-col md:w-auto w-full justify-between items-center">
              <span className="DanaBold py-3 sm:text-[55px] text-4xl text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
                {formattedCount2}+
              </span>
              <span className="text-[#A9C1D4] text-center">
                {t("NumberOfProductsTitle")}
              </span>
            </div>
            <span className="lg:w-[1px] w-full lg:h-[100px] h-[1px] bg-[#4C4E59]"></span>
            <div className="flex md:flex-col md:w-auto w-full justify-between items-center">
              <span
                ref={ref}
                className="DanaBold py-3 sm:text-[55px] text-4xl text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]"
              >
                {formattedCount3}+
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
