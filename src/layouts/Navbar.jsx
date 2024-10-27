import React from "react";
import NavbarItemsComponent from "../Components/NavbarItems/NavbarItemsComponent";
import Images from "../Setting/Images";

export default function Navbar() {
  return (
    <div className="w-[95%] mx-auto flex items-center justify-between fixed top-4 rounded-2xl bg-Secoundray px-5 py-2 z-10 shadow-lg">
      <div className="flex items-center gap-9">
        <img src={Images.Logo} alt="WebCore Logo" className="w-[35px]" />
        <NavbarItemsComponent />
      </div>
      <button className="text-white">FA</button>
    </div>
  );
}
