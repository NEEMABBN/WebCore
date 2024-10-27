import React from "react";
import { Route, Routes } from "react-router-dom";
import router from "./router";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="w-full flex flex-col items-center bg-Secoundray overflow-hidden">
      <Navbar />
      <Routes>
        {router.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
