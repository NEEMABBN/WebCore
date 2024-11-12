import React, { useEffect, useRef } from "react";
import ConfigIcons from "../../../Setting/ConfigIcons";
import gsap from "gsap";

export default function LinearIcons() {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const animationsRef = useRef([]);

  useEffect(() => {
    const carousel1 = carouselRef1.current;
    const carousel2 = carouselRef2.current;

    const animation = () => {
      animationsRef.current = [
        gsap.to(carousel1, {
          xPercent: -100,
          duration: 50,
          ease: "none",
          repeat: -1,
        }),
        gsap.from(carousel2, {
          xPercent: 100,
          duration: 50,
          ease: "none",
          repeat: -1,
        }),
      ];
    };
    animation();
    return () => {
      animationsRef.current.forEach((animation) => animation.kill());
    };
  }, []);

  const handleMouseEnter = () => {
    animationsRef.current.forEach((animation) => animation.pause());
  };

  const handleMouseLeave = () => {
    animationsRef.current.forEach((animation) => animation.resume());
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center whitespace-nowrap"
    >
      <div
        ref={carouselRef1}
        className="min-w-full flex items-center justify-between gap-3 absolute"
      >
        {ConfigIcons.map((item, index) => (
          <div
            className="bg-Secoundray p-3 icon rounded-2xl hover:shadow-Primary hover:shadow-[0px_0px_30px_-5px_rgba(23,225,255,0.5)] transition-all"
            key={index}
          >
            <img
              src={item.Icon}
              alt="Tools Icon"
              className="!min-w-8 !min-h-8"
            />
          </div>
        ))}
      </div>
      <div
        ref={carouselRef2}
        className="min-w-full flex items-center justify-between gap-3 absolute px-6"
      >
        {ConfigIcons.map((item, index) => (
          <div
            className="bg-Secoundray p-3 icon rounded-2xl hover:shadow-Primary hover:shadow-[0px_0px_30px_-5px_rgba(23,225,255,0.5)] transition-all"
            key={index}
          >
            <img
              src={item.Icon}
              alt="Tools Icon"
              className="!min-w-8 !min-h-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
