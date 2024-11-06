import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavbarItemsComponent() {
  const { t } = useTranslation();

  return (
    <ul className="flex items-center gap-5">
      <li className="">
        <NavLink
          to="/Products"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          {t("NavbarProducts")}
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/Services"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          {t("NavbarServices")}
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/TrainingCourse"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          {t("NavbarTrainingCourse")}
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/OurColleagues"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          {t("NavbarColleagues")}
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/ContactUs"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          {t("NavbarContactUs")}
        </NavLink>
      </li>
      <li className="">
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
  );
}
