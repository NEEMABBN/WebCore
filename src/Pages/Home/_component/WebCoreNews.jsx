import React, { useRef } from "react";
import TemplateV1 from "../../../Components/Templates/TemplateV1";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import EachNewsBoxItemComponent from "../../../Components/EachNewsBoxItem/EachNewsBoxItemComponent";
import Images from "../../../Setting/Images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WebCoreNews() {
  const swiperRef = useRef(null);

  const NextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };
  const PrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="w-full bg-[url('/src/assets/Images/CustomBgV3.png')] bg-center">
      <div className="w-full flex items-center justify-center px-5">
        <TemplateV1
          className="py-20 gap-9"
          title="اخبار"
          CustomBody=""
          body={
            <>
              <Swiper
                dir="rtl"
                navigation={false}
                loop={true}
                slidesPerView={1}
                spaceBetween={15}
                modules={[Navigation]}
                ref={swiperRef}
                breakpoints={{
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  765: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <EachNewsBoxItemComponent
                    title="افتتاح استودیو تولیدمحتوای هسته‌وب ایرانیان"
                    image={Images.NewsImageV1}
                    CustomMiniBg="bg-[#354447]"
                    category="خبر"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <EachNewsBoxItemComponent
                    title="حضور مدیر و کارشناسان هسته وب ایرانیان در اولین نمایشگاه ارز دیجیتال و متاورس"
                    image={Images.NewsImageV2}
                    CustomMiniBg="bg-[#473538]"
                    category="بلاگ"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <EachNewsBoxItemComponent
                    title="افتتاح استودیو تولیدمحتوای هسته‌وب ایرانیان"
                    image={Images.NewsImageV1}
                    CustomMiniBg="bg-[#354447]"
                    category="خبر"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <EachNewsBoxItemComponent
                    title="حضور مدیر و کارشناسان هسته وب ایرانیان در اولین نمایشگاه ارز دیجیتال و متاورس"
                    image={Images.NewsImageV2}
                    CustomMiniBg="bg-[#473538]"
                    category="بلاگ"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <EachNewsBoxItemComponent
                    title="افتتاح استودیو تولیدمحتوای هسته‌وب ایرانیان"
                    image={Images.NewsImageV1}
                    CustomMiniBg="bg-[#354447]"
                    category="خبر"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <EachNewsBoxItemComponent
                    title="حضور مدیر و کارشناسان هسته وب ایرانیان در اولین نمایشگاه ارز دیجیتال و متاورس"
                    image={Images.NewsImageV2}
                    CustomMiniBg="bg-[#473538]"
                    category="بلاگ"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <EachNewsBoxItemComponent
                    title="افتتاح استودیو تولیدمحتوای هسته‌وب ایرانیان"
                    image={Images.NewsImageV1}
                    CustomMiniBg="bg-[#354447]"
                    category="خبر"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <EachNewsBoxItemComponent
                    title="حضور مدیر و کارشناسان هسته وب ایرانیان در اولین نمایشگاه ارز دیجیتال و متاورس"
                    image={Images.NewsImageV2}
                    CustomMiniBg="bg-[#473538]"
                    category="بلاگ"
                  />
                </SwiperSlide>
              </Swiper>
            </>
          }
          CustomButtons="gap-4 flex items-center justify-center"
          buttons={
            <>
              {" "}
              <button
                onClick={NextSlide}
                className="border-solid border border-[#4C4E59] text-white rounded-full p-3 text-xl"
              >
                <FaAngleRight />
              </button>
              <button className="border-solid border border-[#4C4E59] text-white rounded-full py-3 px-5">
                مشاهده همه
              </button>
              <button
                onClick={PrevSlide}
                className="border-solid border border-[#4C4E59] text-white rounded-full p-3 text-xl"
              >
                <FaAngleLeft />
              </button>
            </>
          }
        />
      </div>
    </div>
  );
}
