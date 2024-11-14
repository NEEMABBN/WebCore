import React from "react";
import TemplateV2 from "../../../Components/Templates/TemplateV2";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import ProductImageItem from "../../../Components/ProductImageItem/ProductImageItem";
import Images from "../../../Setting/Images";

export default function BestProductsWeek() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto flex flex-col items-center py-40">
      <TemplateV2
        title={t("BestWeekProductTitle")}
        children={
          <div className="w-full grid grid-cols-3 gap-4">
            <ProductImageItem
              size="w-full"
              image={Images.WebXHome}
              title={t("HomeProductImgTitle3")}
              category={t("HomeProductImgValue2")}
            />
            <ProductImageItem
              size="w-full"
              image={Images.WebXHome}
              title={t("HomeProductImgTitle3")}
              category={t("HomeProductImgValue2")}
            />
            <ProductImageItem
              size="w-full"
              image={Images.WebXHome}
              title={t("HomeProductImgTitle3")}
              category={t("HomeProductImgValue2")}
            />
          </div>
        }
      />
    </div>
  );
}