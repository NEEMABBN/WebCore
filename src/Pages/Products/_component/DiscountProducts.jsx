import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import TemplateV1 from "../../../Components/Templates/TemplateV1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Images from "../../../Setting/Images";
import EachDiscountProductSlide from "../../../Components/EachDiscountProductSlide/EachDiscountProductSlide";

export default function DiscountProducts() {
  const { t, i18n } = useTranslation();

  const data = [
    {
      image: Images.discountSlideImage,
      title: t("DiscountProductSlideTitle"),
      percentNumber: t("DiscountProductSlideDisNumber"),
      description: t("DiscountProductSlideDesc"),
      versionNumber: t("DiscountProductSlideVersionNumber"),
      saleNumber: t("DiscountProductSlideSaleNumber"),
      scoreNumber: t("DiscountProductSlideFrom"),
      hashtag: t("DiscountProductSlideHashtag"),
    },
    {
      image: Images.discountSlideImage,
      title: t("DiscountProductSlideTitle"),
      percentNumber: t("DiscountProductSlideDisNumber"),
      description: t("DiscountProductSlideDesc"),
      versionNumber: t("DiscountProductSlideVersionNumber"),
      saleNumber: t("DiscountProductSlideSaleNumber"),
      scoreNumber: t("DiscountProductSlideFrom"),
      hashtag: t("DiscountProductSlideHashtag"),
    },
    {
      image: Images.discountSlideImage,
      title: t("DiscountProductSlideTitle"),
      percentNumber: t("DiscountProductSlideDisNumber"),
      description: t("DiscountProductSlideDesc"),
      versionNumber: t("DiscountProductSlideVersionNumber"),
      saleNumber: t("DiscountProductSlideSaleNumber"),
      scoreNumber: t("DiscountProductSlideFrom"),
      hashtag: t("DiscountProductSlideHashtag"),
    },
    {
      image: Images.discountSlideImage,
      title: t("DiscountProductSlideTitle"),
      percentNumber: t("DiscountProductSlideDisNumber"),
      description: t("DiscountProductSlideDesc"),
      versionNumber: t("DiscountProductSlideVersionNumber"),
      saleNumber: t("DiscountProductSlideSaleNumber"),
      scoreNumber: t("DiscountProductSlideFrom"),
      hashtag: t("DiscountProductSlideHashtag"),
    },
    {
      image: Images.discountSlideImage,
      title: t("DiscountProductSlideTitle"),
      percentNumber: t("DiscountProductSlideDisNumber"),
      description: t("DiscountProductSlideDesc"),
      versionNumber: t("DiscountProductSlideVersionNumber"),
      saleNumber: t("DiscountProductSlideSaleNumber"),
      scoreNumber: t("DiscountProductSlideFrom"),
      hashtag: t("DiscountProductSlideHashtag"),
    },
  ];

  return (
    <div className="w-full bg-[#333546] py-10">
      <TemplateV1
        title={t("DiscountProductTitle")}
        body={
          <Swiper
            slidesPerView={1.2}
            spaceBetween={15}
            dir="rtl"
            initialSlide={2}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="py-14">
                <EachDiscountProductSlide
                  image={item.image}
                  title={item.title}
                  percentNumber={item.percentNumber}
                  Desc={item.description}
                  versionNumber={item.versionNumber}
                  saleNumber={item.saleNumber}
                  scoreNumber={item.scoreNumber}
                  hashtag={item.hashtag}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      />
    </div>
  );
}
