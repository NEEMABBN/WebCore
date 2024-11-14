import React from "react";
import ProductHeader from "./_component/ProductHeader";
import OurProducts from "./_component/OurProducts";
import NewProduct from "./_component/NewProduct";
import BestProductsWeek from "./_component/BestProductsWeek";

export default function Products() {
  return (
    <div className="w-full flex flex-col items-center">
      <ProductHeader />
      <OurProducts />
      <NewProduct />
      <BestProductsWeek />
    </div>
  );
}
