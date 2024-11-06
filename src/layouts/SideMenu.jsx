import React, { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function SideMenu({ isMenuOpen }) {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
  };
  useEffect(() => {
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <div
      className={`absolute top-0 ${
        isMenuOpen ? "right-0" : "right-[-100%]"
      } md:hidden flex flex-col h-screen bg-[#2E2F36] w-[60%] rounded-2xl transition-all duration-300 py-7 px-5 gap-9 overflow-hidden`}
    >
      <div className="w-full flex items-center justify-between">
        <FaXmark className="text-white text-xl" />
        <button
          onClick={() => changeLanguage(i18n.language === "fa" ? "en" : "fa")}
          className="text-white md:block hidden"
        >
          {i18n.language === "fa" ? "EN" : "FA"}
        </button>
      </div>

      <ul className="w-full flex flex-col items-start gap-5 overflow-hidden">
        <li className="w-full flex items-center justify-start gap-3 translate-x-3 hover:translate-x-0 transition-all">
          <span className="w-2 h-[2px] bg-white rounded-full"></span>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarHome")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3 translate-x-3 hover:translate-x-0 transition-all">
          <span className="w-2 h-[2px] bg-white rounded-full"></span>
          <NavLink
            to="/Products"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarProducts")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3 translate-x-3 hover:translate-x-0 transition-all">
          <span className="w-2 h-[2px] bg-white rounded-full"></span>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarServices")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3 translate-x-3 hover:translate-x-0 transition-all">
          <span className="w-2 h-[2px] bg-white rounded-full"></span>
          <NavLink
            to="/TrainingCourse"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarTrainingCourse")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3 translate-x-3 hover:translate-x-0 transition-all">
          <span className="w-2 h-[2px] bg-white rounded-full"></span>
          <NavLink
            to="/OurColleagues"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarColleagues")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3 translate-x-3 hover:translate-x-0 transition-all">
          <span className="w-2 h-[2px] bg-white rounded-full"></span>
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarContactUs")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3 translate-x-3 hover:translate-x-0 transition-all">
          <span className="w-2 h-[2px] bg-white rounded-full"></span>
          <NavLink
            to="/Blogs"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarBlog")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
