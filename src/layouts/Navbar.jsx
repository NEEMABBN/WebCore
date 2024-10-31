import React from "react";
import NavbarItemsComponent from "../Components/NavbarItems/NavbarItemsComponent";
import Images from "../Setting/Images";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="w-[95%] mx-auto flex items-center justify-between fixed top-4 rounded-2xl bg-Secoundray px-5 py-2 z-10 shadow-lg">
      <LuMenu className="md:hidden block text-white text-4xl" />
      <div className="md:flex items-center gap-9 hidden">
        <Link to="/">
          <img src={Images.Logo} alt="WebCore Logo" className="w-[35px]" />
        </Link>
        <NavbarItemsComponent />
      </div>
      <button className="text-white md:block hidden">FA</button>
      <img
        src={Images.Logo}
        alt="WebCore Logo"
        className="md:hidden block w-[35px]"
      />
    </div>
  );
}
