import React from "react";

export default function CustomButtonComponent({ children }) {
  return (
    <div className="relative z-[1]">
      <button className="flex items-center gap-2 bg-Primary font-bold px-9 py-2 rounded-full my-5 relative after:content-[''] after:border-solid after:border-2 after:w-full after:absolute after:top-0 after:left-0 after:right-0 after:py-[18px] after:border-white hover:after:rotate-6 transition-all after:z-[-1] after:transition-all after:rounded-3xl">
        {children}
      </button>
    </div>
  );
}
