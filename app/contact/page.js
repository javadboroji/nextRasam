import React from "react";
import "aos/dist/aos.css";
import "@/app/custome.css";
import aboutImage from "@/public/worksss.svg";
import whay from "@/public/quizeIcon.svg";
import dynamic from "next/dynamic";
const BreadcrumbCustom = dynamic(
  () => import("@/app/Components/BreadcrumbCustom"),
  { ssr: false }
);
const MapLeft = dynamic(() => import("@/app/Components/MapLeft"), {
  ssr: false,
});
import "leaflet/dist/leaflet.css";
//icon
import phone from "@/public/Phone, Call.svg";
import location from "@/public/Pin, Location.svg";
import mailBox from "@/public/Mailbox.svg";
import mail from "@/public/Mail.svg";
import Image from "next/image";
import LayoutPage from "../Components/LayoutPage";
export const metadata  = {
  title: 'تماس با ما',
  description: 'صفحه تماس با ما',
}
function Contact() {
  return (
    <>
      <LayoutPage>
        <BreadcrumbCustom />
        <div className="about mt-5">
          <div className="container">
            <div className="row pt-lg-5 pt-0 d-flex justify-content-between">
              <div className="col-12 col-md-9 col-lg-6 col-xl-5">
                  <div className="about-thumbnail ">
                    {/* <Image src={aboutImage} alt="image" /> */}
                    <div className="circle-1">
                      <div className="d-flex flex-column align-items-center justify-content-center h-100  mt-2">
                        <span className="title"> فلکسو گرافی</span>
                        <span className="company-name"> رسام نقش آناهیتا</span>
                      </div>
                    </div>
                    <div className="circle-2">
                      <Image src={aboutImage} alt="image"/>
                    </div>
                    <div className="circle-3">
                      <Image src={whay} alt="image"/>
                    </div>
                  </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <h3 className="whay-title about-title py-3"> درباره ما</h3>
                <span className="description">
                  کلیشه های تولیدی با تکنولوژی Flat Top که از جمله بهترین روشهای
                  تولید کلیشه میباشد، توسط این شرکت با دقت و کیفیت بسیار بالا
                  تولید و عرضه میگردد. تیم ما با بررسی و R&D انجام شده اقدام به
                  تولید کلیشه هایی با کیفیت بسیار بالاتر از کلیشه های flat top
                  نموده است که با نام DF به بازار مصرف عرضه میشود که عمده تولید
                  این شرکت را در بر گرفته است. شرکت رسام نقش آناهیتا با دارا
                  بودن دو خط تولید فیلم آنالوگ قادر به تولید کلیشه های آنالوگ با
                  عرض ۱۰۶ سانت می باشد که به نوبه خود بزرگترین عرض قابل تولید در
                  نوع خود در کشور است.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-page">
          <div className="container">
            <h3 className="whay-title"> تماس باما</h3>
            <div className="row">
              <div className="col-12 col-lg-5 order-lg-0 order-1">
                <MapLeft />
              </div>
              <div className="col-12 col-lg-7 order-lg-1 order-0">
                <div className="info">
                  <p className="whay-title title"> راه های ارتباطی</p>
                  <div className="d-flex flex-column">
                    <div className="item d-flex align-items-center">
                      <div className="icon">
                        <Image src={phone} alt="phone" />
                      </div>
                      <div className="value mx-3">
                        <span> تلفن :</span>
                        <span> 021-91092227 </span>
                      </div>
                    </div>
                    <div className="item d-flex">
                      <div className="icon">
                        <Image src={location} alt="phone" />
                      </div>
                      <div className="value mx-3">
                        <span> آدرس :</span>
                        <span>
                          {" "}
                          کیلومتر 24 جاده مخصوص کرج، گرمدره، خیابان سروستان، کوی
                          سوم غربی، پلاک 133{" "}
                        </span>
                      </div>
                    </div>
                    <div className="item d-flex">
                      <div className="icon">
                        <Image src={mailBox} alt="phone" />
                      </div>
                      <div className="value mx-3">
                        <span> کدپستی :</span>
                        <span> 3163839995 </span>
                      </div>
                    </div>
                    <div className="item d-flex">
                      <div className="icon">
                        <Image src={mail} alt="phone" />
                      </div>
                      <div className="value mx-3">
                        <span> ایمیل :</span>
                        <span> flexo.rasam@gmail.com </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutPage>
    </>
  );
}

export default Contact;
