import React from "react";
import Images from "../../../Setting/Images";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import ServiceBoxItemComponent from "../../../Components/ServiceBoxItem/ServiceBoxItemComponent";

export default function ServiceSection() {
  return (
    <div className="w-full bg-[url('/src/assets/Images/CustomBgV1.png')] md:bg-cover md:gap-0 gap-8 md:bg-center bg-no-repeat bg-top sm:my-16 my-10 lg:py-80 md:py-64 sm:py-32 py-14 flex flex-col items-center justify-center relative">
      <div className="xl:w-[30%] lg:w-[40%] md:w-[60%] w-full flex flex-col items-center gap-4 px-14">
        <img src={Images.VectorRight} alt="" className="sm:w-auto w-[66px]" />
        <h2 className="sm:text-3xl text-xl text-white font-extrabold">
          ما در وب‌کور چیکار میکنیم؟
        </h2>
        <p className="text-white text-center">
          تمامی خدمات در بهترین کیفیت توسط متخصصین این حوزه درحال انجام است
        </p>
        <CustomButtonComponent>تماس با ما</CustomButtonComponent>
      </div>

      <div className="md:container md:mx-auto w-full md:px-0 px-4 md:flex-row flex-col md:gap-0 gap-4 flex items-center justify-between md:absolute static">
        <div className="flex flex-col items-center lg:gap-32 md:gap-72 gap-4">
          <ServiceBoxItemComponent
            icon={Images.UiUxIcon}
            title="طراحی رابط و تجربه کاربری"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="md:rotate-[5deg] md:w-[23rem] w-full"
          />
          <ServiceBoxItemComponent
            icon={Images.WebIcon}
            title="وبسایت"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="md:rotate-[-5deg] md:w-[23rem] w-full"
          />
        </div>
        <div className="flex flex-col items-center lg:gap-32 md:gap-72 gap-4">
          <ServiceBoxItemComponent
            icon={Images.MobileIcon}
            title="اپلیکیشن موبایل"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="md:rotate-[-5deg] md:w-[23rem] w-full"
          />
          <ServiceBoxItemComponent
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
