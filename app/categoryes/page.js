import React from "react";
import "@/app/custome.css";
import CatList from "../Components/CatList/CatList";
import LayoutPage from "../Components/LayoutPage";
import CatSideBar from "../Components/CatSideBar/CatSideBar";

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
                <div className="col-12 col-lg-3 order-0 order-lg-1 position-reletive">
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
