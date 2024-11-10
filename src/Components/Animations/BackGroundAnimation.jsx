import React, { useEffect, useState } from "react";

export default function BackGroundAnimation() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prevCircles) => [
        ...prevCircles,
        { id: Date.now(), scale: 0, opacity: 1 },
      ]);
    }, 800); // تولید دایره‌ها با فاصله 500 میلی‌ثانیه

    return () => clearInterval(interval);
  }, []);

  // کاهش سرعت محو شدن برای افزایش مدت زمان انیمیشن
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => ({
          ...circle,
          scale: circle.scale + 0.03, // کندتر بزرگ شدن
          opacity: Math.max(circle.opacity - 0.01, 0), // کندتر محو شدن
        }))
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="circleAnimate relative z-10 w-full h-screen flex justify-center items-center overflow-hidden">
      {circles.map((circle) =>
        circle.opacity > 0 ? (
          <div
            key={circle.id}
            className="absolute w-48 h-48 z-[5] border-solid border border-[#5B6570] rounded-full"
            style={{
              transform: `scale(${circle.scale})`,
              opacity: circle.opacity,
            }}
          ></div>
        ) : null
      )}
    </div>
  );
}
