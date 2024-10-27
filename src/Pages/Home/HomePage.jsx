import React from "react";
import Landing from "./_component/Landing";
import AboutWebCore from "./_component/AboutWebCore";
import ServiceSection from "./_component/ServiceSection";
import ProductsSection from "./_component/ProductsSection";
import TrainingCourses from "./_component/TrainingCourses";
import WebCoreNews from "./_component/WebCoreNews";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <Landing />
      <AboutWebCore />
      <ServiceSection />
      <ProductsSection />
      <TrainingCourses />
      <WebCoreNews />
    </div>
  );
}
