import React, { useEffect, useRef } from "react";
import Images from "../../../Setting/Images";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import ServiceBoxItemComponent from "../../../Components/ServiceBoxItem/ServiceBoxItemComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ServiceSection() {
  const imagesRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  useEffect(() => {
    gsap.from(imagesRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imagesRef.current,
        start: "top 80%",
        scrub: false,
      },
    });
    gsap.from(titleRef.current, {
      y: -30,
      opacity: 0,
      delay: 0.4,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        scrub: false,
      },
    });
    gsap.from(descRef.current, {
      y: -30,
      opacity: 0,
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        scrub: false,
      },
    });
    gsap.from(box1Ref.current, {
      opacity: 0,
      x: -350,
      y: 80,
      scale: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: box1Ref.current,
        start: "top 85%",
        scrub: false,
      },
      ease: "elastic.inOut",
    });
    gsap.from(box2Ref.current, {
      opacity: 0,
      x: -350,
      y: -100,
      delay: 0.4,
      scale: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: box2Ref.current,
        start: "top 85%",
        scrub: false,
      },
      ease: "elastic.inOut",
    });
    gsap.from(box3Ref.current, {
      opacity: 0,
      x: 350,
      y: 80,
      scale: 0,
      delay: 0.3,
      duration: 1.5,
      scrollTrigger: {
        trigger: box3Ref.current,
        start: "top 85%",
        scrub: false,
      },
      ease: "elastic.inOut",
    });
    gsap.from(box4Ref.current, {
      opacity: 0,
      x: -350,
      y: 80,
      scale: 0,
      delay: 0.1,
      duration: 1.5,
      scrollTrigger: {
        trigger: box4Ref.current,
        start: "top 95%",
        scrub: false,
      },
      ease: "elastic.inOut",
    });
  }, []);

  return (
    <div className="w-full bg-[url('/src/assets/Images/CustomBgV1.png')] md:bg-cover md:gap-0 gap-8 md:bg-center bg-no-repeat bg-top sm:my-16 my-10 lg:py-80 md:py-64 sm:py-32 py-14 flex flex-col items-center justify-center relative">
      <div className="xl:w-[30%] lg:w-[40%] md:w-[60%] w-full flex flex-col items-center gap-4 px-14">
        <div ref={imagesRef} className="sm:w-auto w-[66px]">
          <img src={Images.VectorRight} alt="" className="" />
        </div>
        <h2
          ref={titleRef}
          className="sm:text-3xl text-xl text-white font-extrabold"
        >
          ما در وب‌کور چیکار میکنیم؟
        </h2>
        <p ref={descRef} className="text-white text-center">
          تمامی خدمات در بهترین کیفیت توسط متخصصین این حوزه درحال انجام است
        </p>
        <CustomButtonComponent>تماس با ما</CustomButtonComponent>
      </div>

      <div className="md:container md:mx-auto w-full md:px-0 px-4 md:flex-row flex-col md:gap-0 gap-4 flex items-center justify-between md:absolute static">
        <div className="flex flex-col items-center lg:gap-32 md:gap-72 gap-4">
          <ServiceBoxItemComponent
            ref={box1Ref}
            icon={Images.UiUxIcon}
            title="طراحی رابط و تجربه کاربری"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="md:rotate-[5deg] md:w-[23rem] w-full"
          />
          <ServiceBoxItemComponent
            ref={box2Ref}
            icon={Images.WebIcon}
            title="وبسایت"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="md:rotate-[-5deg] md:w-[23rem] w-full"
          />
        </div>
        <div className="flex flex-col items-center lg:gap-32 md:gap-72 gap-4">
          <ServiceBoxItemComponent
            ref={box3Ref}
            icon={Images.MobileIcon}
            title="اپلیکیشن موبایل"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="md:rotate-[-5deg] md:w-[23rem] w-full"
          />
          <ServiceBoxItemComponent
            ref={box4Ref}
            icon={Images.ContentIcon}
            title="محتوا سازی"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="md:rotate-[5deg] md:w-[23rem] w-full"
          />
        </div>
      </div>
    </div>
  );
}
