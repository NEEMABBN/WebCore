import React, { forwardRef } from "react";

const ServiceBoxItemComponent = forwardRef(
  ({ icon, title, description, customClass }, ref) => {
    return (
      <div
        ref={ref}
        className={`${customClass} p-4 bg-[#333546] rounded-2xl flex flex-col items-start gap-5`}
      >
        <div className="w-full flex flex-row items-center gap-2">
          <img src={icon} alt="" className="" />
          <span className="text-base text-white font-bold">{title}</span>
        </div>
        <p className="text-white">{description}</p>
      </div>
    );
  }
);

export default ServiceBoxItemComponent;
