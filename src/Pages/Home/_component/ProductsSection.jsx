import React from "react";
import Images from "../../../Setting/Images";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";

export default function ProductsSection() {
  return (
    <div className="w-full bg-[url('/src/assets/Images/LinearBgV2.png')] bg-center bg-no-repeat translate-y-[-9rem]">
      <div className="container mx-auto flex items-center justify-between gap-48 py-60 bg-[url('/src/assets/Images/ColumLine.svg')] bg-center">
        <div className="w-1/2 flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-white font-extrabold text-3xl">
              محصولات هسته‌وب
            </h2>
            <img src={Images.VectorRight} alt="" className="" />
          </div>
          <p className="text-white leading-6">
            محصولاتی که در این بخش مشاهده می کنید محصولاتی هستند که به طور عمومی
            به فروش می رسند و شما میتوانید محصولات را خریداری نمایید. از امکان
            نمایش محصولات اختصاصی کاربران در این بخش معذوریم. محصولاتی که در این
            بخش مشاهده می کنید محصولاتی هستند که به طور عمومی به فروش می رسند و
            شما میتوانید محصولات را خریداری نمایید. از امکان نمایش محصولات
            اختصاصی کاربران در این بخش معذوریم
          </p>
          <div className="bg-[#333546] flex items-center justify-between rounded-2xl p-3 w-full">
            <span className="text-[#A9C1D4]">محصولات ما در زمینه :</span>
            <div className="flex items-center gap-3">
              <span className="text-white hover:text-Primary transition-all">
                #فروشگاهی
              </span>
              <span className="text-white hover:text-Primary transition-all">
                #رزومه
              </span>
              <span className="text-white hover:text-Primary transition-all">
                #رزومه
              </span>
              <span className="text-white hover:text-Primary transition-all">
                #صرافی
              </span>
            </div>
          </div>
          <button className="bg-Secoundray rounded-3xl border-solid border-2 border-[#4C4E59] text-white py-2 px-3">
            مشاهده همه
          </button>
        </div>

        <div className="w-1/2 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[40%] rounded-2xl overflow-hidden relative group transition-all">
              <img src={Images.YaraShop} alt="" className="" />
              <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                <span className="text-[#A9C1D4]">اسکریپت</span>
                <span className="text-white">/</span>
                <span className="text-white">یاراشاپ</span>
              </div>
            </div>
            <div className="w-[60%] rounded-2xl overflow-hidden relative group">
              <img src={Images.AppXHomeV1} alt="" className="" />
              <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                <span className="text-[#A9C1D4]">اپلیکیشن</span>
                <span className="text-white">/</span>
                <span className="text-white">خانه هوشمند</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[50%] rounded-2xl overflow-hidden relative group">
              <img src={Images.WebXHome} alt="" className="" />
              <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                <span className="text-[#A9C1D4]">وبسایت</span>
                <span className="text-white">/</span>
                <span className="text-white">خانه هوشمند</span>
              </div>
            </div>

            <div className="w-[50%] rounded-2xl overflow-hidden relative group">
              <img src={Images.AppXHomeV2} alt="" className="" />
              <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                <span className="text-[#A9C1D4]">اپلیکیشن</span>
                <span className="text-white">/</span>
                <span className="text-white">خانه هوشمند</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
