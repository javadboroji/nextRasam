'use client';
import Image from "next/image";
import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import customImage from "@/public/whay.jpg"
function WhayRasam() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    
  return (
    <div className="whay-main">
      <div className="container">
        <div className="row d-flex justify-content-between" >
          <div className="col-12 col-lg-3 mb-3 mb-lg-0" data-aos="fade-right">
            <div className="col-image-box">
                <Image src={customImage} alt="whay" />
            </div>
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column mt-3 mt-lg-0"  data-aos="fade-left">
            <h3 className="whay-title"> چرا رسام نقش؟</h3>
            <p className="whay-sub-title"> شما تصور کنید، ما خلق می کنیم </p>
            <span className="whay-description ">
              کلیشه های تولیدی با تکنولوژی Flat Top که از جمله بهترین روشهای
              تولید کلیشه میباشد، توسط این شرکت با دقت و کیفیت بسیار بالا تولید
              و عرضه میگردد. تیم ما با بررسی و R&D انجام شده اقدام به تولید
              کلیشه هایی با کیفیت بسیار بالاتر از کلیشه های Flat Top نموده است
              که با نام DF به بازار مصرف عرضه میشود که عمده تولید این شرکت را در
              بر گرفته است. شرکت رسام نقش آناهیتا با دارا بودن دو خط تولید فیلم
              آنالوگ قادر به تولید کلیشه های آنالوگ با عرض ۱۰۶ سانت می باشد که
              به نوبه خود بزرگترین عرض قابل تولید در نوع خود در کشور است.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhayRasam;
