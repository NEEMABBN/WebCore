import React from "react";
import Images from "../Setting/Images";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-[95%] flex flex-col items-center relative bg-[url('/src/assets/Images/FooterBg.png')] bg-top bg-cover py-10 bg-no-repeat mt-16 rounded-2xl">
      <img src={Images.Logo} alt="" className="absolute top-[-2rem] w-[60px]" />
      <div className="w-full flex items-center justify-center gap-48 translate-y-[-1rem]">
        <ul className="w-1/2 flex items-center justify-end gap-16">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              خدمات
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              محصولات
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              دوره‌های آموزشی
            </NavLink>
          </li>
        </ul>
        <ul className="w-1/2 flex items-center justify-start gap-16">
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              همکارامون
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              تماس با ما
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/somePage"
              className={({ isActive }) =>
                `${isActive ? "text-Primary" : "text-white"} text-nowrap`
              }
            >
              بلاگ
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="container mx-auto flex items-start justify-between border-solid border-t-2 border-[#4C4E59] py-5">
        <p className="text-[#C8DAEA] text-sm leading-6 w-[35%] text-start">
          شرکت ایده گستران هوشمند طبرستان یک شرکت پیشرو با ارائه خدمات در
          حوزه‌های وب، اپلیکیشن موبایل، تحلیل داده، بازی سازی و تولید محتوا است
          که برای اولین بار در سال ۱۳۸۵ شروع به کار کرده است و در ابتدای آغاز
          کار خود بر تولید نرم افزارهای تخصصی مالی متمرکز بوده است. تیم هسته وب
          ایرانیان دارای با استعدادترین و تواناترین افراد در حوزه فناوری بوده و
          با توجه به اهداف بزرگی که برای آینده خود در نظر گرفته است به‌طور مداوم
          در حال بهبود کیفیت خدمات، محصولات و توسعه تیم خود است و راهی طولانی و
          دشوار را برای کسب تجربه، دانش و مدیریت منابع انسانی در حوزه فناوری‌
          پیموده است.
        </p>
        <div className="w-[35%] flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <img src={Images.LocationIcon} alt="" className="" />
            <span className="text-[#C8DAEA] text-sm">
              مازندران، ساری، خ جمهوری، ساختمان پارک علم و فناوری (واحد ۳۰۹ و
              ۱۰۴)
            </span>
          </div>
          <div className="flex flex-row items-center w-full justify-between">
            <div className="w-full flex flex-row items-center gap-2">
              <img src={Images.CallIcon} alt="" className="" />
              <span className="text-[#C8DAEA] text-sm">۰۱۱-۴۴۴۳۰۳۸۰</span>
            </div>
            <div className="w-full flex flex-row items-center gap-2">
              <img src={Images.MessageIcon} alt="" className="" />
              <span className="text-[#C8DAEA] text-sm">info@webcore.ir</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 mt-6">
            <span className="text-white">گواهینامه‌ها :</span>
            <div className="flex items-center gap-7">
              <img src={Images.Certificate1} alt="" className="" />
              <img src={Images.Certificate2} alt="" className="" />
              <img src={Images.Certificate3} alt="" className="" />
              <img src={Images.Certificate4} alt="" className="" />
              <img src={Images.Certificate5} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
