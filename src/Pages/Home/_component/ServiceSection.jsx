import React from "react";
import Images from "../../../Setting/Images";
import CustomButtonComponent from "../../../Components/CustomButton/CustomButtonComponent";
import ServiceBoxItemComponent from "../../../Components/ServiceBoxItem/ServiceBoxItemComponent";

export default function ServiceSection() {
  return (
    <div className="w-full bg-[url('/src/assets/Images/CustomBgV1.png')] bg-cover bg-center my-16 py-80 flex flex-col items-center justify-center relative">
      <div className="w-[30%] flex flex-col items-center gap-4 px-14">
        <img src={Images.VectorRight} alt="" className="" />
        <h2 className="text-3xl text-white font-extrabold">
          ما در وب‌کور چیکار میکنیم؟
        </h2>
        <p className="text-white text-center">
          تمامی خدمات در بهترین کیفیت توسط متخصصین این حوزه درحال انجام است
        </p>
        <CustomButtonComponent>تماس با ما</CustomButtonComponent>
      </div>

      <div className="container mx-auto flex items-center justify-between absolute">
        <div className="flex flex-col items-center gap-32">
          <ServiceBoxItemComponent
            icon={Images.UiUxIcon}
            title="طراحی رابط و تجربه کاربری"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="rotate-[5deg]"
          />
          <ServiceBoxItemComponent
            icon={Images.WebIcon}
            title="وبسایت"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="rotate-[-5deg]"
          />
        </div>
        <div className="flex flex-col items-center gap-32">
          <ServiceBoxItemComponent
            icon={Images.MobileIcon}
            title="اپلیکیشن موبایل"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="rotate-[-5deg]"
          />
          <ServiceBoxItemComponent
            icon={Images.ContentIcon}
            title="محتوا سازی"
            description="ما در هسته وب تنها همکار نخواهیم بود. ما عضو یک خانواده هستیم و در کنار هم پیشرفت خواهیم کرد."
            customClass="rotate-[5deg]"
          />
        </div>
      </div>
    </div>
  );
}
