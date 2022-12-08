import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Portfolio from "../components/sections/portfolio/portfolio";

const Project = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <div
        style={{
          height: "100px",
        }}
      ></div>
      <Footer />
    </div>
  );
};

export default Project;
