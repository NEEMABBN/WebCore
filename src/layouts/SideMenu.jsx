import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function SideMenu({ isMenuOpen, toggleMenu }) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    document.documentElement.dir = currentLanguage === "fa" ? "rtl" : "ltr";
    document.documentElement.style.fontFamily =
      currentLanguage === "fa" ? "F-M" : "E-M";
    localStorage.setItem("language", currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "fa";
    setCurrentLanguage(savedLang);
  }, []);

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
    document.documentElement.dir = setCurrentLanguage === "fa" ? "rtl" : "ltr";
    document.documentElement.style.fontFamily =
      setCurrentLanguage === "fa" ? "F-M" : "E-M";
  };

  let direction = "right";
  const getDirection = () => {
    i18n.language === "fa" ? (direction = "right") : (direction = "left");
    getDirection();
  };

  return (
    <div
      className={`absolute top-0 ${
        isMenuOpen ? `${direction}-0` : `${direction}-[-30rem]`
      } md:hidden flex flex-col h-screen bg-[#2E2F36] w-[60%] rounded-2xl transition-all duration-300 shadow-lg py-5 px-5 gap-9 overflow-hidden`}
    >
      <div className="w-full flex items-center justify-between">
        <FaXmark onClick={toggleMenu} className="text-white text-[22px]" />
        <select
          value={currentLanguage}
          onChange={handleLanguageChange}
          className="outline-none bg-Secoundray text-white appearance-none px-3 md:hidden block"
        >
          <option value="fa">FA</option>
          <option value="en">EN</option>
        </select>
      </div>

      <ul className="w-full flex flex-col items-start gap-5 overflow-hidden">
        <li className="w-full flex items-center justify-start gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarHome")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3">
          <NavLink
            to="/Products"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarProducts")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3">
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarServices")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3">
          <NavLink
            to="/TrainingCourse"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarTrainingCourse")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3">
          <NavLink
            to="/OurColleagues"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarColleagues")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3">
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            {t("NavbarContactUs")}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-start gap-3">
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
