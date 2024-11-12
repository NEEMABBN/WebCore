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
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

export default function TrainingCourses() {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();

  const NextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };
  const PrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const data = [
    {
      image: Images.CourseImage1,
      title: t("HomeCourseSlideTitle"),
      teacher: t("HomeCourseSlideSubName"),
      NickTeach: t("HomeCourseSlideName"),
      description: t("HomeCourseSlideDesc"),
      Unit: t("HomeCourseSlidePriceUnit"),
      price: t("HomeCourseSlidePrice"),
      likes: t("HomeCourseSlideLike"),
    },
    {
      image: Images.CourseImage2,
      title: t("HomeCourseSlideTitle"),
      teacher: t("HomeCourseSlideSubName"),
      NickTeach: t("HomeCourseSlideName"),
      description: t("HomeCourseSlideDesc"),
      Unit: t("HomeCourseSlidePriceUnit"),
      price: t("HomeCourseSlidePrice"),
      likes: t("HomeCourseSlideLike"),
    },
    {
      image: Images.CourseImage3,
      title: t("HomeCourseSlideTitle"),
      teacher: t("HomeCourseSlideSubName"),
      NickTeach: t("HomeCourseSlideName"),
      description: t("HomeCourseSlideDesc"),
      Unit: t("HomeCourseSlidePriceUnit"),
      price: t("HomeCourseSlidePrice"),
      likes: t("HomeCourseSlideLike"),
    },
    {
      image: Images.CourseImage1,
      title: t("HomeCourseSlideTitle"),
      teacher: t("HomeCourseSlideSubName"),
      NickTeach: t("HomeCourseSlideName"),
      description: t("HomeCourseSlideDesc"),
      Unit: t("HomeCourseSlidePriceUnit"),
      price: t("HomeCourseSlidePrice"),
      likes: t("HomeCourseSlideLike"),
    },
    {
      image: Images.CourseImage2,
      title: t("HomeCourseSlideTitle"),
      teacher: t("HomeCourseSlideSubName"),
      NickTeach: t("HomeCourseSlideName"),
      description: t("HomeCourseSlideDesc"),
      Unit: t("HomeCourseSlidePriceUnit"),
      price: t("HomeCourseSlidePrice"),
      likes: t("HomeCourseSlideLike"),
    },
    {
      image: Images.CourseImage3,
      title: t("HomeCourseSlideTitle"),
      teacher: t("HomeCourseSlideSubName"),
      NickTeach: t("HomeCourseSlideName"),
      description: t("HomeCourseSlideDesc"),
      Unit: t("HomeCourseSlidePriceUnit"),
      price: t("HomeCourseSlidePrice"),
      likes: t("HomeCourseSlideLike"),
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <TemplateV1
        className="pb-20 gap-9"
        title={t("HomeCourseTitle")}
        CustomBody="flex items-center py-5"
        body={
          <>
            <Swiper
              dir="rtl"
              navigation={false}
              loop={true}
              slidesPerView={1}
              spaceBetween={5}
              modules={[Navigation]}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                765: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 2,
                },
              }}
              ref={swiperRef}
              className="mySwiper !py-8 sm:!px-0 !px-5"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <EachCourseItemComponent
                    image={item.image}
                    title={item.title}
                    teacher={item.teacher}
                    NickTeach={item.NickTeach}
                    description={item.description}
                    Unit={item.Unit}
                    price={item.price}
                    likes={item.likes}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        }
        buttons={
          <>
            {" "}
            <button
              onClick={NextSlide}
              className={`border-solid border border-[#4C4E59] text-white rounded-full p-3 text-xl ${
                i18n.language === "fa" ? "rotate-0" : "rotate-180"
              }`}
            >
              <FaAngleRight />
            </button>
            <button className="border-solid border border-[#4C4E59] text-white rounded-full py-3 px-5">
              {t("HomeCourseSlideBtn")}
            </button>
            <button
              onClick={PrevSlide}
              className={`border-solid border border-[#4C4E59] text-white rounded-full p-3 text-xl ${
                i18n.language === "fa" ? "rotate-0" : "rotate-180"
              }`}
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
