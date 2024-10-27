import React, { useRef } from "react";
import Images from "../../../Setting/Images";
import EachCourseItemComponent from "../../../Components/EachCourseItem/EachCourseItemComponent";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import TemplateV1 from "../../../Components/Templates/TemplateV1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TrainingCourses() {
  const swiperRef = useRef(null);

  const NextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };
  const PrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <TemplateV1
        className="pb-20 gap-9"
        title="دوره‌های آموزشی"
        CustomBody="flex items-center gap-8 py-5"
        body={
          <>
            <Swiper
              dir="rtl"
              navigation={false}
              loop={true}
              slidesPerView={4}
              spaceBetween={20}
              modules={[Navigation]}
              ref={swiperRef}
              className="mySwiper !py-8"
            >
              <SwiperSlide>
                <EachCourseItemComponent
                  image={Images.CourseImage1}
                  title="دوره آموزش نکست جی‌اس"
                  teacher="محمد محمدی"
                  description="دوره آموزش Next.js به شما کمک می‌کند SSR را برای React به سادگی راه‌اندازی کنید و یک وبسایت با سئو مناسب با React بوجود آورید."
                  price={"۱۳۰.۰۰۰"}
                  likes={"۱۲"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <EachCourseItemComponent
                  image={Images.CourseImage2}
                  title="دوره آموزش نکست جی‌اس"
                  teacher="محمد محمدی"
                  description="دوره آموزش Next.js به شما کمک می‌کند SSR را برای React به سادگی راه‌اندازی کنید و یک وبسایت با سئو مناسب با React بوجود آورید."
                  price={"۱۳۰.۰۰۰"}
                  likes={"۱۲"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <EachCourseItemComponent
                  image={Images.CourseImage3}
                  title="دوره آموزش نکست جی‌اس"
                  teacher="محمد محمدی"
                  description="دوره آموزش Next.js به شما کمک می‌کند SSR را برای React به سادگی راه‌اندازی کنید و یک وبسایت با سئو مناسب با React بوجود آورید."
                  price={"۱۳۰.۰۰۰"}
                  likes={"۱۲"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <EachCourseItemComponent
                  image={Images.CourseImage2}
                  title="دوره آموزش نکست جی‌اس"
                  teacher="محمد محمدی"
                  description="دوره آموزش Next.js به شما کمک می‌کند SSR را برای React به سادگی راه‌اندازی کنید و یک وبسایت با سئو مناسب با React بوجود آورید."
                  price={"۱۳۰.۰۰۰"}
                  likes={"۱۲"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <EachCourseItemComponent
                  image={Images.CourseImage1}
                  title="دوره آموزش نکست جی‌اس"
                  teacher="محمد محمدی"
                  description="دوره آموزش Next.js به شما کمک می‌کند SSR را برای React به سادگی راه‌اندازی کنید و یک وبسایت با سئو مناسب با React بوجود آورید."
                  price={"۱۳۰.۰۰۰"}
                  likes={"۱۲"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <EachCourseItemComponent
                  image={Images.CourseImage3}
                  title="دوره آموزش نکست جی‌اس"
                  teacher="محمد محمدی"
                  description="دوره آموزش Next.js به شما کمک می‌کند SSR را برای React به سادگی راه‌اندازی کنید و یک وبسایت با سئو مناسب با React بوجود آورید."
                  price={"۱۳۰.۰۰۰"}
                  likes={"۱۲"}
                />
              </SwiperSlide>
            </Swiper>
          </>
        }
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
        CustomButtons="gap-4 flex items-center justify-center"
      />
    </div>
  );
}
