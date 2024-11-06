import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CustomButtonComponent({ children, custom }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(buttonRef.current, {
      duration: 1.7,
      opacity: 0,
      y: -20,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 85%",
        scrub: false,
      },
      ease: "bounce.out",
    });
  }, []);

  return (
    <div ref={buttonRef} className={`relative z-[1] ${custom}`}>
      <button className="flex items-center gap-2 bg-Primary font-bold px-9 py-2 rounded-full my-5 relative after:content-[''] after:border-solid after:border-2 after:w-full after:absolute after:top-0 after:left-0 after:right-0 after:py-[18px] after:border-white hover:after:rotate-6 transition-all after:z-[-1] after:transition-all after:rounded-3xl">
        {children}
      </button>
    </div>
  );
}
