import React from "react";
import LinearIcons from "./LinearIcons";
import { FaCircleArrowLeft } from "react-icons/fa6";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import Images from "../../../Setting/Images";

export default function Landing() {
  return (
    <header className="w-full bg-[url('/src/assets/Images/Desktop.png')] bg-cover bg-center flex flex-col items-center pt-40 pb-20 gap-6 relative">
      <img
        src={Images.BigLogoIcon}
        alt=""
        className="absolute w-[550px] right-[-14rem] opacity-5 z-0 rotate-180"
      />
      <img
        src={Images.BigLogoIcon}
        alt=""
        className="absolute w-[550px] top-[-3rem] left-[-11rem] opacity-5 z-0"
      />
      <div className="w-full flex items-center justify-center">
        <img src={Images.LandingSVG} alt="" className="w-[122px]" />
      </div>
      <div className="w-full flex flex-col items-center relative gap-6">
        <img
          src={Images.DotedGroup}
          alt=""
          className="absolute top-10 left-[-30rem]"
        />
        <div className="w-[50%] flex flex-col items-center gap-6">
          <div className="w-full flex items-start">
            <img src={Images.VectorLeft} alt="" className="mt-8" />
            <h2 className="text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF] text-[55px] font-extrabold DanaBold">
              هسته وب؛ در کنار شما برای حل مشکلات کاربرانت
            </h2>
            <img src={Images.VectorRight} alt="" className="mt-8" />
          </div>
          <p className="text-center text-white px-20">
            ما با استعدادترین و توانمندترین افراد در فناوری و داریم و به طور
            مداوم در حال بهبود کیفیت خدمات و محصولاتمون هستیم
          </p>
        </div>
        <img
          src={Images.DotedGroup}
          alt=""
          className="absolute top-10 right-[-20rem]"
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
