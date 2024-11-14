import React from "react";
import Images from "../../../Setting/Images";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import SomeProductsTemplate from "../../../Components/SomeProductsTemplate/SomeProductsTemplate";

export default function OurProducts() {
  const { t, i18n } = useTranslation();

  const data = [
    {
      productName: t("ProductItem1"),
      image: Images.OurProductIcon,
    },
    {
      productName: t("ProductItem2"),
      image: Images.OurProductIcon,
    },
    {
      productName: t("ProductItem1"),
      image: Images.OurProductIcon,
    },
    {
      productName: t("ProductItem2"),
      image: Images.OurProductIcon,
    },
    {
      productName: t("ProductItem1"),
      image: Images.OurProductIcon,
    },
    {
      productName: t("ProductItem2"),
      image: Images.OurProductIcon,
    },
    {
      productName: t("ProductItem1"),
      image: Images.OurProductIcon,
    },
    {
      productName: t("ProductItem2"),
      image: Images.OurProductIcon,
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center gap-8 py-40 px-20">
      <img src={Images.VectorRight} alt="" className="" />
      <h2
        className={`${
          i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
        } text-white text-3xl`}
      >
        {t("AllProductTitle")}
      </h2>
      <p className="text-center text-white px-36">{t("AllProductDesc")}</p>
      <div className="grid grid-cols-4 gap-5 py-5">
        {data.map((item, index) => (
          <SomeProductsTemplate
            image={item.image}
            templates={item.productName}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
