import React, { useEffect, useState } from "react";

export default function BackGroundAnimation() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prevCircles) => [
        ...prevCircles,
        { id: Date.now(), scale: 0, opacity: 1 },
      ]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => ({
          ...circle,
          scale: circle.scale + 0.03,
          opacity: Math.max(circle.opacity - 0.01, 0),
        }))
      );
    }, 50);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="circleAnimate relative w-full h-screen flex justify-center items-center overflow-hidden">
      {circles.map((circle) =>
        circle.opacity > 0 ? (
          <div
            key={circle.id}
            className="absolute sm:w-48 w-28 sm:h-48 h-28 border-solid border border-[#5B6570] rounded-full"
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
