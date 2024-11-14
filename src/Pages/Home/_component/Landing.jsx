import React, { useEffect, useRef, useState } from "react";
import LinearIcons from "./LinearIcons";
import { FaCircleArrowLeft } from "react-icons/fa6";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import Images from "../../../Setting/Images";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { Link } from "react-router-dom";

export default function Landing() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState("up");
  const step = 80;
  const maxSteps = 3;
  const elementRef = useRef(null);
  const circleIconRef = useRef(null);
  const bigLogoIconRefX = useRef(null);
  const bigLogoIconRefY = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lerpFactor = 0.08;
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [texts, setTexts] = useState([
    t("SubTitle1"),
    t("SubTitle2"),
    t("SubTitle3"),
  ]);

  useEffect(() => {
    gsap.from(circleIconRef.current, {
      duration: 2,
      scale: 0,
      ease: "back.out",
    });

    const rotationAnimation = gsap.to(elementRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    const hoverAnimation = gsap.to(elementRef.current, {
      scale: 0.5,
      duration: 0.5,
      paused: true,
    });

    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();
    const currentCircleRef = circleIconRef.current;

    if (currentCircleRef) {
      currentCircleRef.addEventListener("mouseenter", handleMouseEnter);
      currentCircleRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentCircleRef) {
        currentCircleRef.removeEventListener("mouseenter", handleMouseEnter);
        currentCircleRef.removeEventListener("mouseleave", handleMouseLeave);
      }
      rotationAnimation.kill();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition =
          direction === "up" ? prevPosition + step : prevPosition - step;
        if (direction === "up" && newPosition / step >= maxSteps) {
          setDirection("down");
          return prevPosition;
        } else if (direction === "down" && newPosition <= 0) {
          setDirection("up");
          return 0;
        }
        return newPosition;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [direction, step]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current.x = event.clientX;
      mousePos.current.y = event.clientY;
    };
    const animate = () => {
      const icon = bigLogoIconRefX.current;
      if (icon) {
        const targetX = mousePos.current.x - 25;
        const targetY = mousePos.current.y - 25;
        const newX = targetX * lerpFactor;
        const newY = targetY * lerpFactor;
        gsap.to(icon, {
          x: newX,
          y: newY,
          duration: 3,
          ease: "power2.out",
        });
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current.x = event.clientX;
      mousePos.current.y = event.clientY;
    };
    const animate = () => {
      const icon = bigLogoIconRefY.current;
      if (icon) {
        const targetX = -(mousePos.current.x - 25);
        const targetY = -(mousePos.current.y - 25);
        const newX = targetX * lerpFactor;
        const newY = targetY * lerpFactor;
        gsap.to(icon, {
          x: newX,
          y: newY,
          duration: 3,
          ease: "power2.out",
        });
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setTexts([t("SubTitle1"), t("SubTitle2"), t("SubTitle3")]);
  }, [i18n.language, t]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <header className="w-full bg-[url('/src/assets/Images/Desktop.png')] bg-cover bg-center flex flex-col items-center pt-40 pb-20 gap-6 relative">
      <div
        ref={bigLogoIconRefX}
        className="md:block hidden absolute w-[550px] lg:right-[-14rem] right-[-17rem] opacity-5 z-0 rotate-180"
      >
        <img src={Images.BigLogoIcon} alt="" />
      </div>
      <div
        ref={bigLogoIconRefY}
        className="md:block hidden absolute w-[550px] top-[-3rem] lg:left-[-11rem] left-[-18rem] opacity-5 z-0"
      >
        <img src={Images.BigLogoIcon} alt="" />
      </div>
      <Link
        ref={circleIconRef}
        to="https://www.youtube.com/@bahramsiadati"
        className="flex items-center justify-center relative z-[3] group cursor-pointer"
      >
        <img
          src={Images.LandingSVG}
          ref={elementRef}
          alt=""
          className="w-[122px] z-[2]"
        />
        <img
          src={Images.ProveLandingSvg}
          alt=""
          className="absolute left-[31px] z-[3] group-hover:!scale-150 transition-transform duration-500"
        />
      </Link>
      <div className="w-full flex flex-col items-center relative sm:gap-6">
        <img
          src={Images.DotedGroup}
          alt=""
          className="absolute lg:top-10 md:top-8 sm:top-[-10rem] top-[-10rem] max-[400px]:top-[-8.5rem] md:left-[-34rem] sm:left-[-3rem] md:w-auto w-full md:scale-100 scale-150 max-[635px]:scale-[1.8] max-[500px]:scale-[2.2] max-[400px]:scale-[3]"
        />
        <div className="xl:w-[55%] lg:w-[60%] md:w-[80%] w-full flex flex-col items-center sm:gap-7 gap-4">
          <div className="w-full flex items-start justify-center py-2 relative">
            <img
              src={Images.VectorRight}
              alt=""
              className="sm:w-auto w-[66px] lg:mt-8 mt-5 md:static absolute top-0 sm:right-[6.7rem] right-[9rem] max-[560px]:right-[7rem] max-[490px]:right-[5rem] max-[430px]:right-[3rem] max-[380px]:right-[2rem]"
            />
            <div
              className={`w-full flex flex-col items-center ${
                i18n.language === "fa" ? "PersiaExtra" : "EnglishExtra"
              }`}
            >
              <div className="flex sm:flex-row flex-col items-center gap-1 text-center bg-clip-text py-2 text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
                <span className="lg:text-[55px] md:text-5xl text-3xl font-extrabold text-nowrap">
                  {t("CompanyName")}
                </span>
                <span className="lg:text-[55px] md:text-5xl text-3xl font-extrabold text-nowrap">
                  {t("SubTitle")}
                </span>
              </div>
              <div className="w-full sm:h-20 h-14 overflow-hidden flex flex-col items-center">
                {texts.map((text, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 absolute w-full text-center bg-clip-text py-2 text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF] lg:text-[55px] md:text-5xl text-3xl max-[377px]:text-[29px] font-extrabold ${
                      index === currentIndex
                        ? "transform translate-y-0 opacity-100 scale-100"
                        : index === (currentIndex + 1) % texts.length
                        ? "transform translate-y-full opacity-0 scale-100"
                        : "transform -translate-y-full opacity-0 scale-75"
                    }`}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <img
              src={Images.VectorLeft}
              alt=""
              className="sm:w-auto w-[66px] lg:mt-8 mt-5 md:static absolute top-0 sm:left-[6.7rem] left-[9rem] max-[560px]:left-[7rem] max-[490px]:left-[5rem] max-[430px]:left-[3rem] max-[380px]:left-[2rem]"
            />
          </div>
          <p className="text-center text-white sm:px-20 px-7">
            {t("HomeHeaderDesc")}
          </p>
        </div>
        <img
          src={Images.DotedGroup}
          alt=""
          className="md:block hidden absolute lg:top-10 top-8 xl:right-[-20rem] right-[-27rem]"
        />
      </div>
      <CustomButtonComponent>
        {t("HomeHeaderBtn")}
        <FaCircleArrowLeft
          className={`text-xl ${
            i18n.language === "fa" ? "rotate-0" : "rotate-180"
          }`}
        />
      </CustomButtonComponent>
      <div className="w-full my-20">
        <LinearIcons />
      </div>
    </header>
  );
}
