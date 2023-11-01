

import React from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Line from "@/public/line.svg";
import Mod from "@/public/mod.svg";
import Pen from "@/public/pen.svg";
import Lazer from "@/public/lazer.svg";

function Advantages() {


  return (
    <div className="advantage">
      <div className="container">
        <h4 className="title">
          {" "}
          بهترین کیفیت مطابق دانش روز دنیا را از ما بخواهید!
        </h4>
        <div className="row" data-aos="fade-down">
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="d-flex flex-column align-items-center card-advantage">
              <div className="icon">
                <Image src={Line} alt="icon" />
              </div>
              <div className="counter">
                {" "}
                + <span>{17}</span>
              </div>
              <span className="title">
                {" "}
                سال تخصص و تجربه در زمینه طراحی و تولید کلیشه
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="d-flex flex-column align-items-center card-advantage">
              <div className="icon">
                <Image src={Lazer} alt="icon" />
              </div>
              <div className="counter">
                {" "}
                + <span>{2} </span>
              </div>
              <span className="title"> خط تولید لیزری </span>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="d-flex flex-column align-items-center card-advantage">
              <div className="icon">
                <Image src={Pen} alt="icon" />
              </div>
              <div className="counter">
                {" "}
                + <span>{12} </span>
              </div>
              <span className="title"> طراح حرفه ای </span>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="d-flex flex-column align-items-center card-advantage">
              <div className="icon">
                <Image src={Mod} alt="icon" />
              </div>
              <div className="counter">
                {" "}
                + <span>{3} </span>
              </div>
              <span className="title"> خط تولید آنالوگ </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;