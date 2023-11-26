
import React from "react";
import "@/app/custome.css";
import dynamic from 'next/dynamic'

const BreadcrumbCustom =dynamic(()=>import("@/app/Components/BreadcrumbCustom"),{ssr:false })  ;
import GhallerySwiper from "./GhallerySwiper";
import LayoutPage from "../Components/LayoutPage";
export const metadata  = {
  title: 'گالری تصاویر',
  description: 'گالری تصاویر',
}
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