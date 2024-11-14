import React from "react";
import { useTranslation } from "react-i18next";
import Images from "../../../Setting/Images";
import i18n from "../../../i18n";
import MiniBoxProductsItems from "../../../Components/MiniBoxProductsItems/MiniBoxProductsItems";
import UserProfileBoxItem from "../../../Components/UserProfileBoxItem/UserProfileBoxItem";

export default function ProductHeader() {
  const { t, i18n } = useTranslation();

  return (
    <header className="container mx-auto flex flex-col items-center pt-40 pb-5 gap-4 border-solid border-b-2 border-[#4C4E59]">
      <h1
        className={`${
          i18n.language === "fa" ? "PersiaExtra" : "EnglishExtra"
        } lg:text-[55px] md:text-5xl text-3xl font-extrabold text-center bg-clip-text py-2 text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]`}
      >
        {t("ProductHeaderTitle")}
      </h1>
      <div className="w-full flex items-center justify-center gap-1">
        <img src={Images.VectorRight} alt="" className="" />
        <h2
          className={`${
            i18n.language === "fa" ? "PersiaExtra" : "EnglishExtra"
          } lg:text-[55px] md:text-5xl text-3xl font-extrabold text-center bg-clip-text py-2 text-transparent fill-transparent bg-gradient-to-l from-white to-[#58F4FF]`}
        >
          {t("ProductHeaderSubTitle")}
        </h2>
        <img src={Images.VectorLeft} alt="" className="" />
      </div>
      <div className="w-[55%] mx-auto flex flex-col items-center gap-3 pt-5">
        <p className="text-center text-white">{t("ProductHeaderDesc")}</p>
        <div className="w-full flex items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            <span className="text-Primary">{t("ProductHeaderCustomer")}</span>
            <div className="flex flex-row-reverse items-center justify-center">
              <UserProfileBoxItem
                image={Images.UserProfile1}
                translate="translate-x-[6rem]"
              />
              <UserProfileBoxItem
                image={Images.UserProfile2}
                translate="translate-x-[4.5rem]"
              />
              <UserProfileBoxItem
                image={Images.UserProfile3}
                translate="translate-x-[3rem]"
              />
              <UserProfileBoxItem
                image={Images.UserProfile4}
                translate="translate-x-[1.5rem]"
              />
              <UserProfileBoxItem
                image={Images.UserProfileMore}
                translate="relative"
              />
            </div>
          </div>
          <div className="relative z-[1]">
            <button className="flex items-center gap-2 bg-Primary font-bold px-16 py-3 rounded-2xl my-5 relative after:content-[''] after:border-solid after:border-2 after:w-full after:absolute after:top-0 after:left-0 after:right-0 after:py-[22px] after:border-white hover:after:rotate-6 transition-all after:z-[-1] after:transition-all after:rounded-2xl">
              {t("ProductHeaderBtn")}
            </button>
          </div>
        </div>
        <img src={Images.DropDownIcon} alt="" className="" />
        <div className="flex items-center gap-6 translate-y-[2.65rem]">
          <MiniBoxProductsItems text={t("ProductCheckBox1")} />
          <MiniBoxProductsItems text={t("ProductCheckBox2")} />
          <MiniBoxProductsItems text={t("ProductCheckBox3")} />
          <MiniBoxProductsItems text={t("ProductCheckBox4")} />
        </div>
      </div>
    </header>
  );
}
