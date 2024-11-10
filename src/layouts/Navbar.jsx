import React, { useEffect, useState } from "react";
import NavbarItemsComponent from "../Components/NavbarItems/NavbarItemsComponent";
import Images from "../Setting/Images";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import SideMenu from "./SideMenu";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    document.documentElement.dir = currentLanguage === "fa" ? "rtl" : "ltr";
  }, [currentLanguage, i18n]);

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".menu")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="w-[95%] mx-auto flex items-center justify-between fixed top-4 rounded-2xl bg-Secoundray px-5 py-2 z-10 shadow-lg">
      <LuMenu
        onClick={handleMenu}
        className="md:hidden block text-white text-4xl"
      />
      <div className="md:flex items-center gap-9 hidden">
        <Link to="/">
          <img src={Images.Logo} alt="WebCore Logo" className="w-[35px]" />
        </Link>
        <NavbarItemsComponent />
      </div>
      <Link to="/">
        <img
          src={Images.Logo}
          alt="WebCore Logo"
          className="md:hidden block w-[35px]"
        />
      </Link>
      <SideMenu isMenuOpen={isMenuOpen} className="menu" />
      <select
        value={currentLanguage}
        onChange={handleLanguageChange}
        className="outline-none bg-inherit text-white appearance-none px-3"
      >
        <option value="fa">FA</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}
