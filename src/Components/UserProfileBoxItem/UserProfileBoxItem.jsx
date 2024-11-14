import React from "react";

export default function UserProfileBoxItem({ image, translate }) {
  return (
    <div
      className={`w-[50px] h-[50px] bg-gradient-to-b from-Primary to-white p-[2px] ${translate} z-[0.2] rounded-tr-[2rem] rounded-tl-[2rem] rounded-bl-[2rem] rounded-br-[6px]`}
    >
      <div className="w-full p-[5px] customBorder bg-Secoundray rounded-tr-[2rem] rounded-tl-[2rem] rounded-bl-[2rem] rounded-br-[6px]">
        <img src={image} alt="" className="w-full" />
      </div>
    </div>
  );
}
