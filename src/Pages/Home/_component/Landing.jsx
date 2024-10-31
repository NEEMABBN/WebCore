import React, { useEffect, useState } from "react";
import LinearIcons from "./LinearIcons";
import { FaCircleArrowLeft } from "react-icons/fa6";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import Images from "../../../Setting/Images";

export default function Landing() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState("up");
  const step = 80;
  const maxSteps = 3;

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
    }, 1000);
    return () => clearInterval(interval);
  }, [direction, step]);

  return (
    <header className="w-full bg-[url('/src/assets/Images/Desktop.png')] bg-cover bg-center flex flex-col items-center pt-40 pb-20 gap-6 relative">
      <img
        src={Images.BigLogoIcon}
        alt=""
        className="md:block hidden absolute w-[550px] lg:right-[-14rem] right-[-17rem] opacity-5 z-0 rotate-180"
      />
      <img
        src={Images.BigLogoIcon}
        alt=""
        className="md:block hidden absolute w-[550px] top-[-3rem] lg:left-[-11rem] left-[-18rem] opacity-5 z-0"
      />
      <div className="w-full flex items-center justify-center">
        <img src={Images.LandingSVG} alt="" className="w-[122px] z-[2]" />
      </div>
      <div className="w-full flex flex-col items-center relative sm:gap-6">
        <img
          src={Images.DotedGroup}
          alt=""
          className="absolute lg:top-10 md:top-8 sm:top-[-10rem] top-[-8.5rem] md:left-[-25rem] sm:left-[-3rem] md:w-auto w-full md:scale-100 scale-150 max-[400px]:scale-[3]"
        />
        <div className="xl:w-[50%] lg:w-[60%] md:w-[80%] w-full flex flex-col items-center gap-6">
          <div className="w-full flex items-start py-2 relative">
            <img
              src={Images.VectorRight}
              alt=""
              className="sm:w-auto w-[66px] lg:mt-8 mt-5 md:static absolute top-0 sm:right-[6.7rem] right-[9rem] max-[560px]:right-[7rem] max-[490px]:right-[5rem] max-[430px]:right-[3rem] max-[380px]:right-[2rem]"
            />

            <div className="w-full flex flex-col items-center sm:gap-3 gap-2">
              <div className="flex sm:flex-row flex-col items-center gap-1 text-center bg-clip-text py-2 text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
                <span className="lg:text-[55px] md:text-5xl text-3xl font-extrabold DanaBold">هسته وب؛</span>
                <span className="lg:text-[55px] md:text-5xl text-3xl font-extrabold DanaBold">در کنار شما برای</span>
              </div>
              <div className="w-full h-20 overflow-hidden">
                <div
                  className="w-full flex flex-col items-center transition-all duration-1000 delay-300 sm:gap-[6px]"
                  style={{ transform: `translateY(-${position}px)` }}
                >
                  <span className="text-center bg-clip-text py-2 text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF] lg:text-[55px] md:text-5xl text-3xl font-extrabold DanaBold h-20">
                    حل مشکلات کاربرانت
                  </span>
                  <span className="text-center bg-clip-text py-2 text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF] lg:text-[55px] md:text-5xl text-3xl font-extrabold DanaBold h-20">
                    رشد کسب و کارت
                  </span>
                  <span className="text-center sm:text-nowrap bg-clip-text py-2 text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF] lg:text-[55px] md:text-5xl text-3xl font-extrabold DanaBold h-20">
                    ساخت لحظه‌های خوب کاربرانت
                  </span>
                </div>
              </div>
            </div>
            <img
              src={Images.VectorLeft}
              alt=""
              className="sm:w-auto w-[66px] lg:mt-8 mt-5 md:static absolute top-0 sm:left-[6.7rem] left-[9rem] max-[560px]:left-[7rem] max-[490px]:left-[5rem] max-[430px]:left-[3rem] max-[380px]:left-[2rem]"
            />
          </div>
          <p className="text-center text-white sm:px-20 px-7">
            ما با استعدادترین و توانمندترین افراد در فناوری و داریم و به طور
            مداوم در حال بهبود کیفیت خدمات و محصولاتمون هستیم
          </p>
        </div>
        <img
          src={Images.DotedGroup}
          alt=""
          className="md:block hidden absolute lg:top-10 top-8 xl:right-[-20rem] right-[-27rem]"
        />
      </div>
      <CustomButtonComponent>
        <FaCircleArrowLeft className="text-xl" />
        تماس با ما
      </CustomButtonComponent>
      <LinearIcons />
    </header>
  );
}
