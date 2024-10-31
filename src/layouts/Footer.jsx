import React from "react";
import Images from "../Setting/Images";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
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
        <ul className="lg:w-1/2 px-7 flex md:flex-row flex-col md:items-center items-end md:justify-start justify-normal lg:gap-16 md:gap-11 gap-4">
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
      <div className="container mx-auto flex md:flex-row flex-col md:items-start items-center justify-between border-solid border-t-2 border-[#4C4E59] py-5">
        <p className="text-[#C8DAEA] text-sm leading-6 xl:w-[35%] md:w-[45%] w-full md:text-start text-center md:border-none border-solid border-b-2 border-[#4C4E59] md:p-0 px-5 pb-5">
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
        <div className="xl:w-[35%] md:w-[45%] w-full flex flex-col md:justify-start justify-normal md:items-start items-center md:gap-4 sm:gap-2 gap-4 md:pt-0 pt-5">
          <div className="flex items-center gap-2">
            <img src={Images.LocationIcon} alt="" className="" />
            <span className="text-[#C8DAEA] text-sm">
              مازندران، ساری، خ جمهوری، ساختمان پارک علم و فناوری (واحد ۳۰۹ و
              ۱۰۴)
            </span>
          </div>

          <div className=" flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 w-full md:justify-between justify-evenly md:pb-0 pb-5">
            <div className="md:w-full flex flex-row items-center gap-2">
              <img src={Images.CallIcon} alt="" className="" />
              <span className="text-[#C8DAEA] text-sm">۰۱۱-۴۴۴۳۰۳۸۰</span>
            </div>
            <div className="md:w-full flex flex-row items-center gap-2">
              <img src={Images.MessageIcon} alt="" className="" />
              <span className="text-[#C8DAEA] text-sm">info@webcore.ir</span>
            </div>
          </div>

          <div className="md:w-auto w-full flex flex-col md:items-start sm:items-center items-start gap-6 md:mt-6 md:border-none border-solid border-t-2 border-[#4C4E59] md:pt-0 pt-5 sm:px-0 px-3">
            <span className="text-white">گواهینامه‌ها :</span>
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
