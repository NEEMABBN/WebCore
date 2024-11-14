import React from "react";
import ProductHeader from "./_component/ProductHeader";
import OurProducts from "./_component/OurProducts";

export default function Products() {
  return (
    <div className="w-full flex flex-col items-center">
      <ProductHeader />
      <OurProducts />
    </div>
  );
}
