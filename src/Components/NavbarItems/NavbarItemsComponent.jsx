import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItemsComponent() {
  return (
    <ul className="flex items-center gap-5">
      <li className="">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          محصولات
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/somePage"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          خدمات
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/somePage"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          دوره‌های آموزشی
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/somePage"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          همکارامون
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/somePage"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          تماس با ما
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/somePage"
          className={({ isActive }) =>
            `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
          }
        >
          بلاگ
        </NavLink>
      </li>
    </ul>
  );
}
