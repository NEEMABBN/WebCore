import React from "react";
import Images from "../../../Setting/Images";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

export default function ProductsSection() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full sm:bg-[url('/src/assets/Images/LinearBgV2.png')] bg-[url('/src/assets/Images/ProductsMobileBg.png')] bg-center bg-no-repeat sm:translate-y-[-9rem] sm:p-0 pb-10 pt-16">
      <div className="container mx-auto flex items-center justify-between xl:gap-48 gap-20 lg:py-60 sm:pt-60 sm:pb-32 pb-10 bg-[url('/src/assets/Images/ColumLine.svg')] lg:bg-center bg-top lg:bg-auto bg-cover">
        <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center lg:gap-6 gap-12 sm:px-0 px-5">
          <div className="flex lg:flex-row flex-col-reverse items-center gap-3">
            <h2
              className={`text-white font-extrabold sm:text-3xl text-2xl ${
                i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
              }`}
            >
              {t("HomeProductTitle")}
            </h2>
            <img
              src={Images.VectorRight}
              alt=""
              className="sm:w-auto w-[66px]"
            />
          </div>
          <div className="w-full lg:hidden flex items-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              centeredSlides={false}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full h-[100%] rounded-2xl overflow-hidden relative group transition-all">
                  <img src={Images.YaraShop} alt="" className="w-full" />
                  <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                    <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                    <span className="text-[#A9C1D4]">
                      {t("HomeProductImgTitle1")}
                    </span>
                    <span className="text-white">/</span>
                    <span className="text-white">
                      {t("HomeProductImgValue1")}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[100%] rounded-2xl overflow-hidden relative group">
                  <img src={Images.YaraShop} alt="" className="w-full" />
                  <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                    <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                    <span className="text-[#A9C1D4]">
                      {t("HomeProductImgTitle2")}
                    </span>
                    <span className="text-white">/</span>
                    <span className="text-white">
                      {t("HomeProductImgValue2")}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[100%] rounded-2xl overflow-hidden relative group">
                  <img src={Images.YaraShop} alt="" className="w-full" />
                  <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                    <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                    <span className="text-[#A9C1D4]">
                      {t("HomeProductImgTitle3")}
                    </span>
                    <span className="text-white">/</span>
                    <span className="text-white">
                      {t("HomeProductImgValue2")}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[100%] rounded-2xl overflow-hidden relative group">
                  <img src={Images.YaraShop} alt="" className="w-full" />
                  <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                    <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                    <span className="text-[#A9C1D4]">
                      {t("HomeProductImgTitle2")}
                    </span>
                    <span className="text-white">/</span>
                    <span className="text-white">
                      {t("HomeProductImgValue2")}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="text-white leading-6 lg:text-start text-center">
            {t("HomeProductDesc")}
          </p>
          <div className="bg-[#333546] flex sm:flex-row flex-col sm:gap-0 gap-5 items-center justify-between rounded-2xl p-3 w-full">
            <span className="text-[#A9C1D4]">{t("HomeProductSubTitle")}</span>
            <div className="sm:w-auto w-full flex items-center sm:justify-normal justify-between sm:gap-3 sm:px-0 px-2">
              <span className="text-white hover:text-Primary transition-all">
                {t("HomeProductTag1")}
              </span>
              <span className="text-white hover:text-Primary transition-all">
                {t("HomeProductTag2")}
              </span>
              <span className="text-white hover:text-Primary transition-all">
                {t("HomeProductTag3")}
              </span>
              <span className="text-white hover:text-Primary transition-all">
                {t("HomeProductTag4")}
              </span>
            </div>
          </div>
          <button className="bg-Secoundray rounded-3xl border-solid border-2 border-[#4C4E59] text-white py-2 px-3">
            {t("HomeProductBtn")}
          </button>
        </div>

        <div className="w-1/2 lg:flex hidden flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[40%] rounded-2xl overflow-hidden relative group">
              <img src={Images.YaraShop} alt="" className="" />
              <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                <span className="text-[#A9C1D4]">
                  {t("HomeProductImgTitle1")}
                </span>
                <span className="text-white">/</span>
                <span className="text-white">{t("HomeProductImgValue1")}</span>
              </div>
            </div>
            <div className="w-[60%] rounded-2xl overflow-hidden relative group">
              <img src={Images.AppXHomeV1} alt="" className="" />
              <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                <span className="text-[#A9C1D4]">
                  {t("HomeProductImgTitle2")}
                </span>
                <span className="text-white">/</span>
                <span className="text-white">{t("HomeProductImgValue2")}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[50%] rounded-2xl overflow-hidden relative group">
              <img src={Images.WebXHome} alt="" className="" />
              <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                <span className="text-[#A9C1D4]">
                  {t("HomeProductImgTitle3")}
                </span>
                <span className="text-white">/</span>
                <span className="text-white">{t("HomeProductImgValue2")}</span>
              </div>
            </div>

            <div className="w-[50%] rounded-2xl overflow-hidden relative group">
              <img src={Images.AppXHomeV2} alt="" className="" />
              <div className="bg-[#202026] flex items-center rounded-tr-2xl absolute bottom-0 left-0 gap-2 p-3 group-hover:px-7 transition-all">
                <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                <span className="text-[#A9C1D4]">
                  {t("HomeProductImgTitle2")}
                </span>
                <span className="text-white">/</span>
                <span className="text-white">{t("HomeProductImgValue2")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
