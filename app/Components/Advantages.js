'use client'
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef,useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { useCountUp } from 'react-countup';
import Line from "@/public/line.svg";
import Mod from "@/public/mod.svg";
import users from "@/public/users.svg";
import Lazer from "@/public/lazer.svg";

function Advantages() {
  const [ref, inView] = useInView();
  const countUpRefOne = useRef(null);
  const countUpRefTwo = useRef(null);
  const countUpRefThree = useRef(null);
  const countUpRefFour = useRef(null);

  const { start: startCountOne } = useCountUp({ start: 0, end: 17, ref: countUpRefOne ,duration:10});
  const { start: startCountTwo } = useCountUp({ start: 0, end: 2, ref: countUpRefTwo ,duration:10});
  const { start: startCountThree } = useCountUp({ start: 0, end: 300, ref: countUpRefThree,duration:10 });
  const { start: startCountFour } = useCountUp({ start: 0, end: 3, ref: countUpRefFour ,duration:10});

  useEffect(() => {
    if (countUpRefOne.current && inView) {
      startCountOne();
    }
    if (countUpRefTwo.current && inView) {
      startCountTwo();
    }
    if (countUpRefThree.current && inView) {
      startCountThree();
    }
    if (countUpRefFour.current && inView) {
      startCountFour();
    }
  }, [inView]);
  
  return (
    <div className="advantage" ref={ref}>
      <div className="container">
        <h4 className="title">
          {" "}
          بهترین کیفیت مطابق دانش روز دنیا را از ما بخواهید!
        </h4>
        <div className="row" data-aos="fade-down">
          <div className="col-12 col-md-6 col-xl-3 mb-3 mb-xl-0">
            <div className="d-flex flex-column align-items-center card-advantage">
              <div className="icon">
                <Image src={Line} alt="icon" />
              </div>
              <div className="counter">
                {" "}
                + <span id="counters-17"  ref={countUpRefOne}> {countUpRefOne.current && countUpRefOne.current.countUp}</span>
              </div>
              <span className="title">
                {" "}
                سال تخصص و تجربه در زمینه طراحی و تولید کلیشه
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 mb-3 mb-xl-0">
            <div className="d-flex flex-column align-items-center card-advantage">
              <div className="icon">
                <Image src={Lazer} alt="icon" />
              </div>
              <div className="counter">
                {" "}
                + <span id="counters-17"  ref={countUpRefTwo}> {countUpRefTwo.current && countUpRefTwo.current.countUp}</span>
              </div>
              <span className="title"> خط تولید لیزری </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 mb-3 mb-xl-0">
            <div className="d-flex flex-column align-items-center card-advantage">
              <div className="icon">
                <Image src={users} alt="icon" />
              </div>
              <div className="counter">
                {" "}
                + <span id="counters-12" ref={countUpRefThree}> {countUpRefThree.current && countUpRefThree.current.countUp}</span>
              </div>
              <span className="title">   مشتری فعال </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 mb-3 mb-xl-0">
            <div className="d-flex flex-column align-items-center card-advantage">
              <div className="icon">
                <Image src={Mod} alt="icon" />
              </div>
              <div className="counter">
                {" "}
                + <span id="counters-3" ref={countUpRefFour}>{countUpRefFour.current && countUpRefFour.current.countUp}</span>
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