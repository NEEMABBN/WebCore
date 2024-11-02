import React, { useEffect, useState } from "react";
import Images from "../../../Setting/Images";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import { useInView } from "react-intersection-observer";

export default function AboutWebCore() {
  const [count1, setCount1] = useState();
  const [count2, setCount2] = useState();
  const [count3, setCount3] = useState();
  const { ref, inView } = useInView({ threshold: 0.1 });

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

  return (
    <div className="w-full bg-[#141418] bg-[url('/src/assets/Images/RectGroup.png')] bg-cover py-20">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col md:items-start items-center gap-4 sm:px-0 px-5">
          <img src={Images.VectorRight} alt="" className="sm:w-auto w-[66px]" />
          <h2 className="text-white font-extrabold sm:text-3xl text-2xl">
            درباره خانواده وب‌کور
          </h2>
          <span className="text-white font-bold md:text-start text-center sm:text-base text-[15px]">
            شرکت تخصصی توسعه نرم‌افزارهای شبکه رمز ارز و مالی
          </span>
          <p className="text-white text-sm leading-6 md:text-start text-center">
            ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در
            کنار هم پیشرفت خواهیم کرد. هر روز از هم درس می‌گیریم و مکمل یکدیگر
            خواهیم بود. مشکلاتی که برای هرشخص در این خانواده پیش بیاید، همه با
            هم برای رفع مشکل آن تلاش خواهیم کرد. ما در هسته وب زندگی می‌کنیم.
            هیچ سدی نمی تواند مانع پیشرفت ما شود و هر روز در حال یادگرفتن
            اتفاقات جدید دنیای تکنولوژی هستیم.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col items-center sm:gap-3 gap-5 xl:mr-52 sm:px-0 px-5">
          <div className="flex md:flex-col md:w-auto w-full justify-between items-center">
            <span className="DanaBold py-3 sm:text-[55px] text-4xl text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
              {formattedCount1}+
            </span>
            <span className="text-[#A9C1D4] text-center">اعضای خانواده ما</span>
          </div>
          <span className="lg:w-[1px] w-full lg:h-[100px] h-[1px] bg-[#4C4E59]"></span>
          <div className="flex md:flex-col md:w-auto w-full justify-between items-center">
            <span className="DanaBold py-3 sm:text-[55px] text-4xl text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
              {formattedCount2}+
            </span>
            <span className="text-[#A9C1D4] text-center">
              محصولات تولید شده
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
              پروژه موفق داخلی و بین‌المللی
            </span>
          </div>
        </div>

        <CustomButtonComponent custom="w-full flex items-center md:justify-start justify-center">
          همکاری با ما
        </CustomButtonComponent>
      </div>
    </div>
  );
}
