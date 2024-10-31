import React from "react";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function SideMenu({ isMenuOpen }) {
  return (
    <div
      className={`absolute top-0 ${
        isMenuOpen ? "right-0" : "right-[-100%]"
      } md:hidden flex flex-col h-screen bg-[#2E2F36] w-[60%] rounded-2xl transition-all duration-300 py-7 px-5 gap-9`}
    >
      <div className="w-full flex items-center justify-between">
        <FaXmark className="text-white" />
        <button className="text-white">FA</button>
      </div>

      <ul className="w-full flex flex-col items-start gap-5">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-nowrap ${isActive ? "text-Primary" : "text-white"}`
            }
          >
            صفحه اصلی
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/somePage"
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
    </div>
  );
}
