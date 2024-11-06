import React, { useEffect, useRef } from "react";
import Images from "../Setting/Images";
import { Link, NavLink } from "react-router-dom";
import anime from "animejs";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Footer() {
  const { t } = useTranslation();
  const AnimatedText = ({ text }) => {
    const textRef = useRef(null);
    const hasAnimated = useRef(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              const words = textRef.current.querySelectorAll(".word");
              anime({
                targets: words,
                scale: [0.4, 1],
                easing: "easeOutBack",
                duration: 700,
                delay: anime.stagger(100),
                complete: () => {
                  hasAnimated.current = true;
                },
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      if (textRef.current) {
        observer.observe(textRef.current);
      }
      return () => {
        if (textRef.current) {
          observer.unobserve(textRef.current);
        }
      };
    }, []);
    const splitTextToWords = (text) => {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className="word"
          style={{ display: "inline-block", margin: "0 5px" }}
        >
          {word}
        </span>
      ));
    };
    return (
      <div ref={textRef} style={{ display: "inline-block" }}>
        {splitTextToWords(text)}
      </div>
    );
  };

  return (
    <div className="w-[95%] flex flex-col items-center relative md:bg-[url('/src/assets/Images/FooterBg.png')] bg-[url('/src/assets/Images/TabletFooterBg.png')] bg-top bg-cover py-10 bg-no-repeat mt-16 rounded-2xl sm:px-0 px-3">
      <Link
        to="/"
        className="absolute top-[-2rem] w-full flex items-center justify-center"
      >
        <img
          src={Images.Logo}
          alt="Logo"
          className="lg:w-[60px] md:w-[70px] sm:w-[70px] w-[65px] max-[600px]:w-[60px] max-[490px]:w-[54px] max-[450px]:w-[50px]"
        />
      </Link>
      <div className="w-full flex items-center lg:justify-center justify-between lg:gap-48 translate-y-[-1rem]">
        <ul className="lg:w-1/2 px-7 flex md:flex-row flex-col md:items-center items-start md:justify-end justify-normal lg:gap-16 md:gap-11 gap-4">
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              {t("NavbarServices")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              {t("NavbarProducts")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              {t("NavbarTrainingCourse")}
            </NavLink>
          </li>
        </ul>
        <ul className="lg:w-1/2 px-7 flex md:flex-row flex-col md:items-center items-end md:justify-start justify-normal lg:gap-16 md:gap-11 gap-4">
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              {t("NavbarColleagues")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              {t("NavbarContactUs")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              {t("NavbarBlog")}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="container mx-auto flex md:flex-row flex-col md:items-start items-center justify-between border-solid border-t-2 border-[#4C4E59] py-5">
        <p className="text-[#C8DAEA] text-sm leading-6 xl:w-[35%] md:w-[45%] w-full md:text-start text-center md:border-none border-solid border-b-2 border-[#4C4E59] md:p-0 px-5 pb-5">
          <AnimatedText text={t("FooterDesc")} />
        </p>
        <div className="xl:w-[35%] md:w-[45%] w-full flex flex-col md:justify-start justify-normal md:items-start items-center md:gap-4 sm:gap-2 gap-4 md:pt-0 pt-5">
          <div className="flex items-center gap-2">
            <img src={Images.LocationIcon} alt="" className="" />
            <span className="text-[#C8DAEA] text-sm">
              {t("FooterLocation")}
            </span>
          </div>

          <div className=" flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 w-full md:justify-between justify-evenly md:pb-0 pb-5">
            <div className="md:w-full flex flex-row items-center gap-2">
              <img src={Images.CallIcon} alt="" className="" />
              <span className="text-[#C8DAEA] text-sm">{t("FooterPhone")}</span>
            </div>
            <div className="md:w-full flex flex-row items-center gap-2">
              <img src={Images.MessageIcon} alt="" className="" />
              <span className="text-[#C8DAEA] text-sm">info@webcore.ir</span>
            </div>
          </div>

          <div className="md:w-auto w-full flex flex-col md:items-start sm:items-center items-start gap-6 md:mt-6 md:border-none border-solid border-t-2 border-[#4C4E59] md:pt-0 pt-5 sm:px-0 px-3">
            <span className="text-white">{t("FooterCertificates")}</span>
            <div className="sm:w-auto w-full sm:justify-normal justify-between flex items-center gap-7">
              <img
                src={Images.Certificate1}
                alt=""
                className="sm:w-auto w-[30px]"
              />
              <img
                src={Images.Certificate2}
                alt=""
                className="sm:w-auto w-[30px]"
              />
              <img
                src={Images.Certificate3}
                alt=""
                className="sm:w-auto w-[30px]"
              />
              <img
                src={Images.Certificate4}
                alt=""
                className="sm:w-auto w-[30px]"
              />
              <img
                src={Images.Certificate5}
                alt=""
                className="sm:w-auto w-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
