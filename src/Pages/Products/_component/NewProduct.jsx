import React from "react";
import TemplateV2 from "../../../Components/Templates/TemplateV2";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import Images from "../../../Setting/Images";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import ProductImageItem from "../../../Components/ProductImageItem/ProductImageItem";

export default function NewProduct() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto flex flex-col items-center">
      <TemplateV2
        title={t("NewProductTitle")}
        children={
          <div className="w-full flex items-center gap-3">
            <div className="w-[50%] flex flex-col items-center gap-3">
              <div className="w-full flex items-center gap-3">
                <ProductImageItem
                  size="w-[45%]"
                  image={Images.YaraShop}
                  title={t("HomeProductImgTitle3")}
                  category={t("HomeProductImgValue2")}
                />
                <ProductImageItem
                  size="w-[65%]"
                  image={Images.AppXHomeV1}
                  title={t("HomeProductImgTitle3")}
                  category={t("HomeProductImgValue2")}
                />
              </div>
              <div className="w-full flex items-center gap-3">
                <ProductImageItem
                  size="w-[50%]"
                  image={Images.WebXHome}
                  title={t("HomeProductImgTitle3")}
                  category={t("HomeProductImgValue2")}
                />
                <ProductImageItem
                  size="w-[50%]"
                  image={Images.AppXHomeV2}
                  title={t("HomeProductImgTitle3")}
                  category={t("HomeProductImgValue2")}
                />
              </div>
            </div>
            <ProductImageItem
              size="w-[51%]"
              image={Images.AppXHomeV3}
              display="hidden"
              hoverBox={
                <div className="absolute bottom-0 left-0 flex flex-col items-end">
                  <div className="bg-Based rounded-tr-2xl flex items-center px-4 py-2 gap-1">
                    <span className="text-[#A9C1D4]">
                      {t("HomeProductImgTitle2")}
                    </span>
                    <span className="text-white">/</span>
                    <span className="text-white">
                      {t("HomeProductImgValue2")}
                    </span>
                  </div>
                  <div className="bg-Based rounded-tr-2xl px-4 py-3 group-hover:px-7 transition-all duration-300 relative">
                    <BsFillArrowDownLeftCircleFill className="absolute text-white group-hover:block hidden top-[-0.5rem] right-[-0.5rem] transition-all text-3xl" />
                    <span
                      className={`${
                        i18n.language === "fa" ? "PersiaDemi" : "EnglishDemi"
                      } text-white text-3xl`}
                    >
                      {t("XHomeTitle")}
                    </span>
                  </div>
                  <div className="bg-Based rounded-tr-2xl px-4 py-3">
                    <span className="text-white">{t("XHomeDesc")}</span>
                  </div>
                </div>
              }
            />
          </div>
        }
      />
    </div>
  );
}
