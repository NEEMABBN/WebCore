import React from "react";
import Images from "../../Setting/Images";

export default function TemplateV1({
  title,
  description,
  body,
  buttons,
  CustomBody,
  CustomButtons,
  className,
}) {
  return (
    <div
      className={`${className} w-full flex flex-col items-center justify-between`}
    >
      <div className="w-full flex flex-col items-center gap-4">
        <img src={Images.VectorRight} alt="" className="" />
        <h2 className="text-white text-3xl font-extrabold">{title}</h2>
        <span className="text-white text-center">{description}</span>
      </div>
      <div className={`w-full ${CustomBody}`}>{body}</div>
      <div className={`w-full ${CustomButtons}`}>{buttons}</div>
    </div>
  );
}
