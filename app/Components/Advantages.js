"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Line from "@/public/line.svg";
import Mod from "@/public/mod.svg";
import Pen from "@/public/pen.svg";
import Lazer from "@/public/lazer.svg";

function Advantages() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);

  // Function to start the counter animation
  const startCounter = (setter, maxValue) => {
      let count = 0;
      const timer = setInterval(() => {
        if (count <= maxValue) {
          setter(count);
          count += 1;
        } else {
          clearInterval(timer);
        }
      }, 9000);
      AOS.init();
      AOS.refresh();
      return () => {
        clearInterval(timer);
      };
  };

  // Set maximum values for the counters
  const maxValueOne = 17;
  const maxValueTwo = 2;
  const maxValueThree = 12;
  const maxValueFour = 3;

  // Start the counter animations
  startCounter(setCountOne, maxValueOne);
  startCounter(setCountTwo, maxValueTwo);
  startCounter(setCountThree, maxValueThree);
  startCounter(setCountFour, maxValueFour);

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
                + <span>{countOne}</span>
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
                + <span>{countTwo} </span>
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
                + <span>{countThree} </span>
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
                + <span>{countFour} </span>
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
