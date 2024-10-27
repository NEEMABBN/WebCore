import React from "react";
import Images from "../../../Setting/Images";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";

export default function AboutWebCore() {
  return (
    <div className="w-full bg-black bg-[url('/src/assets/Images/RectGroup.png')] bg-cover py-20">
      <div className="container mx-auto grid grid-cols-2 gap-10">
        <div className="flex flex-col items-start gap-4">
          <img src={Images.VectorRight} alt="" className="" />
          <h2 className="text-white font-extrabold text-3xl">
            درباره خانواده وب‌کور
          </h2>
          <span className="text-white font-bold">
            شرکت تخصصی توسعه نرم‌افزارهای شبکه رمز ارز و مالی
          </span>
          <p className="text-white text-sm leading-6">
            ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در
            کنار هم پیشرفت خواهیم کرد. هر روز از هم درس می‌گیریم و مکمل یکدیگر
            خواهیم بود. مشکلاتی که برای هرشخص در این خانواده پیش بیاید، همه با
            هم برای رفع مشکل آن تلاش خواهیم کرد. ما در هسته وب زندگی می‌کنیم.
            هیچ سدی نمی تواند مانع پیشرفت ما شود و هر روز در حال یادگرفتن
            اتفاقات جدید دنیای تکنولوژی هستیم.
          </p>
        </div>

        <div className="flex flex-row items-center gap-3 mr-52">
          <div className="flex flex-col items-center">
            <span className="DanaBold text-[55px] text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
              ۳۰+
            </span>
            <span className="text-[#A9C1D4] text-center">اعضای خانواده ما</span>
          </div>
          <span className="w-[1px] h-[100px] bg-white"></span>
          <div className="flex flex-col items-center">
            <span className="DanaBold text-[55px] text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
              ۷۴+
            </span>
            <span className="text-[#A9C1D4] text-center">
              محصولات تولید شده
            </span>
          </div>
          <span className="w-[1px] h-[100px] bg-white"></span>
          <div className="flex flex-col items-center">
            <span className="DanaBold text-[55px] text-center bg-clip-text text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]">
              ۸۴۶+
            </span>
            <span className="text-[#A9C1D4] text-center">
              پروژه موفق داخلی و بین‌المللی
            </span>
          </div>
        </div>

        <CustomButtonComponent>همکاری با ما</CustomButtonComponent>
      </div>
    </div>
  );
}
