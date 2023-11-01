
import React from "react";
import "@/app/custome.css";
import BreadcrumbCustom from "../Components/BreadcrumbCustom";
import GhallerySwiper from "./GhallerySwiper";
import LayoutPage from "../Components/LayoutPage";
function Ghallery() {
  return (
      <LayoutPage>
   
      <div className="ghallery">
        <BreadcrumbCustom />
        <div className="container">
          <div className="breadcrumb"></div>
          <h1> گالری تصاویر</h1>
          <GhallerySwiper />

        </div>
      </div>
      </LayoutPage>
  );
}

export default Ghallery;