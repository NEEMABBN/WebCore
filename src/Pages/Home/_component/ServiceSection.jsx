import React, { useEffect, useRef } from "react";
import Images from "../../../Setting/Images";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import ServiceBoxItemComponent from "../../../Components/ServiceBoxItem/ServiceBoxItemComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import BackGroundAnimation from "../../../Components/Animations/BackGroundAnimation";

export default function ServiceSection() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    gsap.from(box1Ref.current, {
      opacity: 0,
      x: -350,
      y: 80,
      scale: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: box1Ref.current,
        start: "top 85%",
        scrub: false,
      },
      ease: "elastic.inOut",
    });
    gsap.from(box2Ref.current, {
      opacity: 0,
      x: -350,
      y: -100,
      delay: 0.3,
      scale: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: box2Ref.current,
        start: "top 85%",
        scrub: false,
      },
      ease: "elastic.inOut",
    });
    gsap.from(box3Ref.current, {
      opacity: 0,
      x: 350,
      y: 80,
      scale: 0,
      delay: 0.1,
      duration: 1.5,
      scrollTrigger: {
        trigger: box3Ref.current,
        start: "top 85%",
        scrub: false,
      },
      ease: "elastic.inOut",
    });
    gsap.from(box4Ref.current, {
      opacity: 0,
      x: 350,
      y: -80,
      scale: 0,
      delay: 0.2,
      duration: 1.5,
      scrollTrigger: {
        trigger: box4Ref.current,
        start: "top 95%",
        scrub: false,
      },
      ease: "elastic.inOut",
    });
  }, []);

  return (
    <div className="w-full bg-[url('/src/assets/Images/CustomBgV1.png')] md:bg-cover md:gap-0 gap-8 md:bg-center bg-no-repeat bg-top sm:my-16 my-10 lg:py-80 md:py-64 sm:py-32 py-14 flex flex-col items-center justify-center relative">
      <div className="xl:w-[60%] lg:w-[40%] md:w-[60%] w-full flex flex-col items-center gap-4 px-14 z-[2] relative">
        <div className="w-full absolute top-[-15rem] z-0">
          <BackGroundAnimation />
        </div>
        <div className="sm:w-auto w-[66px] z-[1]">
          <img src={Images.VectorRight} alt="" className="" />
        </div>
        <h2
          className={`sm:text-3xl text-xl z-[1] text-white font-extrabold text-center ${
            i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
          }`}
        >
          {t("HomeServiceTitle")}
        </h2>
        <p className="text-white z-[1] text-center sm:px-28">
          {t("HomeServiceDesc")}
        </p>
        <CustomButtonComponent>{t("HomeServiceBtn")}</CustomButtonComponent>
      </div>

      <div className="md:container md:mx-auto w-full md:px-0 px-4 md:flex-row flex-col md:gap-0 gap-4 flex items-center justify-between md:absolute static">
        <div className="flex flex-col items-center lg:gap-32 md:gap-72 gap-4">
          <ServiceBoxItemComponent
            ref={box1Ref}
            icon={Images.UiUxIcon}
            title={t("HomeServiceCardTitle1")}
            description={t("HomeServiceCardDesc1")}
            customClass="md:rotate-[5deg] md:w-[23rem] w-full"
          />
          <ServiceBoxItemComponent
            ref={box2Ref}
            icon={Images.WebIcon}
            title={t("HomeServiceCardTitle2")}
            description={t("HomeServiceCardDesc2")}
            customClass="md:rotate-[-5deg] md:w-[23rem] w-full"
          />
        </div>
        <div className="flex flex-col items-center lg:gap-32 md:gap-72 gap-4">
          <ServiceBoxItemComponent
            ref={box3Ref}
            icon={Images.MobileIcon}
            title={t("HomeServiceCardTitle3")}
            description={t("HomeServiceCardDesc3")}
            customClass="md:rotate-[-5deg] md:w-[23rem] w-full"
          />
          <ServiceBoxItemComponent
            ref={box4Ref}
            icon={Images.ContentIcon}
            title={t("HomeServiceCardTitle4")}
            description={t("HomeServiceCardDesc4")}
            customClass="md:rotate-[5deg] md:w-[23rem] w-full"
          />
        </div>
      </div>
    </div>
  );
}
