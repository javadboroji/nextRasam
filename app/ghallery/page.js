
import React from "react";
import HeaderCustome from "../Components/HeaderCustome";
import FooterCustom from "../Components/FooterCustom";

import Link from "next/link";
import Image from "next/image";
import "@/app/custome.css";
import BreadcrumbCustom from "../Components/BreadcrumbCustom";
import GhallerySwiper from "./GhallerySwiper";
function Ghallery() {
  return (
    <>
      <HeaderCustome />
   
      <div className="ghallery">
        <BreadcrumbCustom />
        <div className="container">
          <div className="breadcrumb"></div>
          <h1> گالری تصاویر</h1>
          <GhallerySwiper />

        </div>
      </div>
      <FooterCustom />
    </>
  );
}

export default Ghallery;
