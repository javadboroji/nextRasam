import React from "react";
import "@/app/custome.css";
import HeaderCustome from "../Components/HeaderCustome";
import FooterCustom from "../Components/FooterCustom";
import CatList from "./CatList/CatList";
import LayoutPage from "../Components/LayoutPage";
import CatSideBar from "./CatSideBar/CatSideBar";
import PagenatinCustom from "./PagenatinCustom/PagenatinCustom";

function page() {
  return (
    <>
      <LayoutPage>
        <div className="article">
          <div className="container">
            <div className="cat-main" style={{ marginTop: "5rem" }}>
              <div className="row">
                <div className="col-12 col-lg-9 order-1 order-lg-0">
                  <div className="row">
                    <CatList />
                  </div>
                </div>
                <div className="col-12 col-lg-3 order-0 order-lg-1">
                  <CatSideBar />
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </LayoutPage>
    </>
  );
}

export default page;
