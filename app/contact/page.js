import React from "react";
import "aos/dist/aos.css";
import "@/app/custome.css";
import aboutImage from "@/public/aboutImage.jpeg";
import whay from "@/public/quizeIcon.svg";
import Rasma from "@/public/rasamLogo.svg";
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
import FavButton from "../Components/FavButton";
export const metadata = {
  title: "تماس با ما",
  description: "صفحه تماس با ما",
};
function Contact() {
  return (
    <>
      <LayoutPage>
        <BreadcrumbCustom />
        <div className="about ">
          <div className="container">
            <div className="row pt-lg-5 pt-0 d-flex justify-content-between">
              <div className="col-12 col-md-9 col-lg-5 col-xl-5">
                <svg
                  width="398"
                  height="398"
                  viewBox="0 0 398 398"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="about-svg-main"
                >
                  <path
                    d="M326.743 269.336C328.247 270.168 330.145 269.624 330.945 268.103C347.823 236.034 352.536 198.9 344.143 163.574C335.751 128.248 314.84 97.2008 285.342 76.1497C283.942 75.1511 282.003 75.5186 281.034 76.9383C280.065 78.3579 280.432 80.2919 281.83 81.2918C310.049 101.468 330.053 131.195 338.087 165.013C346.121 198.831 341.625 234.378 325.496 265.09C324.697 266.612 325.239 268.504 326.743 269.336Z"
                    fill="url(#paint0_linear_1835_48794)"
                  />
                  <path
                    d="M77.21 116.655C75.7858 115.692 73.8477 116.065 72.9149 117.509C53.2489 147.948 45.2486 184.516 50.4628 220.449C55.677 256.381 73.741 289.167 101.248 312.761C102.552 313.88 104.516 313.686 105.608 312.359C106.7 311.031 106.506 309.072 105.203 307.951C78.8927 285.343 61.615 253.954 56.6234 219.555C51.6318 185.156 59.2749 150.15 78.0737 120.996C79.0053 119.551 78.6342 117.618 77.21 116.655Z"
                    fill="url(#paint1_linear_1835_48794)"
                  />
                  <path
                    d="M222.834 60.1374C222.962 59.3399 222.419 58.5885 221.62 58.4685C187.665 53.3703 152.999 60.9276 124.23 79.7339C95.4618 98.5401 74.6312 127.261 65.6778 160.41C65.4672 161.189 65.9375 161.988 66.7195 162.191C67.5014 162.393 68.2989 161.923 68.5097 161.143C77.2804 128.7 97.672 100.59 125.831 82.1823C153.99 63.7745 187.919 56.374 221.155 61.3567C221.954 61.4765 222.706 60.9349 222.834 60.1374Z"
                    fill="#0D2D6A"
                  />
                  <path
                    d="M224.427 355.602C224.574 356.514 223.953 357.372 223.04 357.509C184.234 363.336 144.616 354.699 111.737 333.206C78.859 311.713 55.0525 278.889 44.8201 241.005C44.5794 240.114 45.1169 239.201 46.0106 238.97C46.9042 238.738 47.8157 239.276 48.0566 240.167C58.0802 277.245 81.3849 309.371 113.566 330.408C145.748 351.445 184.524 359.903 222.509 354.209C223.422 354.072 224.28 354.691 224.427 355.602Z"
                    fill="#B9D1FE"
                  />
                  <path
                    d="M174.141 42.9642C173.995 42.0528 174.616 41.194 175.529 41.057C214.335 35.2304 253.953 43.8673 286.831 65.3602C319.709 86.853 343.516 119.677 353.748 157.561C353.989 158.452 353.451 159.365 352.558 159.597C351.664 159.828 350.753 159.29 350.512 158.399C340.488 121.321 317.183 89.1958 285.002 68.1583C252.82 47.121 214.044 38.6632 176.06 44.3577C175.147 44.4946 174.288 43.8757 174.141 42.9642Z"
                    fill="#B9D1FE"
                  />
                  <path
                    d="M186.836 340.508C186.775 341.313 187.379 342.017 188.185 342.07C222.447 344.324 256.363 333.907 283.466 312.771C310.569 291.635 328.937 261.279 335.099 227.501C335.244 226.706 334.709 225.949 333.913 225.813C333.117 225.676 332.362 226.211 332.216 227.006C326.177 260.067 308.196 289.776 281.667 310.464C255.139 331.152 221.943 341.352 188.407 339.153C187.601 339.1 186.898 339.702 186.836 340.508Z"
                    fill="#0D2D6A"
                  />
                  <circle cx="164.754" cy="45.7539" r="7" fill="#1E6AFD" />
                  <circle cx="324.254" cy="274.254" r="4.5" fill="#1B60E6" />
                  <circle cx="238.254" cy="353.254" r="10.5" fill="#1B60E6" />
                  <animate
                    attributeName="x1"
                    from="0%"
                    to="100%"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1835_48794"
                      x1="353.254"
                      y1="241.254"
                      x2="245.737"
                      y2="55.9752"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0D2D6A" />
                      <animate
                    attributeName="x1"
                    from="0%"
                    to="100%"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                      <stop offset="1" stop-color="#3579FD" />
                      <animate
                        attributeName="x1"
                        from="0%"
                        to="100%"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1835_48794"
                      x1="90.7539"
                      y1="306.754"
                      x2="77.2539"
                      y2="101.254"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0D2D6A" />
                      <stop offset="1" stop-color="#4B88FD" />
                      <animate
                        attributeName="x1"
                        from="0%"
                        to="100%"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                  </defs>
                  <foreignObject
                    x="18%"
                    y="18%"
                    width="65%"
                    height="65%"
                    text-anchor="middle"
                    dominant-baseline="middle"
                  >
                    <div className="svg-bg">
                      <Image src={Rasma} alt="rasma" />
                      {/* <div>
                        <span className="about-companey mt-3">
                        فلکسو گرافی
                          <br/>
                          رسام نقش آناهیتا
                        </span>
                      </div> */}
                    </div>
                  </foreignObject>
                </svg>
              </div>
              <div className="col-12 col-lg-7 ">
                <h3 className="whay-title about-title py-3"> درباره ما</h3>
                <span className="description">
                  شرکت رسام نقش آناهیتا متعهد به ارائه خدماتی با کیفیت است. تلاش
                  ما بر این است که بهترین تجربه ممکن را برای مشتریانمان فراهم
                  آوریم. با دقت در جزئیات و استفاده از آخرین تکنولوژی‌ها، سعی
                  داریم تا خدماتی نوآورانه را ارائه دهیم .<br />
                  به عنوان یک نقطه تلفیق بین هنر و فناوری، به دنبال ایجاد
                  تجربه‌ای منحصر به فرد و بی‌نظیر برای شما هستیم و تمرکز ما بر
                  ارتقاء هویت مشتری است، تا به شما کمک کنیم در محیط رقابتی
                  امروزه، برجسته و ویژه باشید.
                  <br />
                  شرکت رسام نقش آناهیتا، پیش رو در صنعت تولید کلیشه های ژلاتینی
                  چاپ فلکسو، به عنوان یک پیشگام در این حوزه، به طراحی و تولید
                  بسته‌بندی‌های شگفت‌انگیز و بی‌نظیر متعهد است.
                  <br />
                  تخصص ما در ارائه راهکارهایی ويژه و منحصر بفرد است، تیم ما از
                  افراد متخصص و پیشرو در زمینه طراحی گرافیک، مهندسی چاپ و
                  تکنولوژی‌های نرم افزاری نوین تشکیل شده است. ما با افتخار اعلام
                  می‌کنیم که با بهره‌گیری از تجهیزات پیشرفته و بروز و جدیدترین
                  روش‌های پیش از چاپ، به تولید متریال های با کیفیت بالا و طراحی
                  منحصر به فرد می‌پردازیم. ارزش‌هایی چون نوآوری، کیفیت، و رضایت
                  مشتری برای ما حائز اهمیت است. ما به دنبال ارتقاء هویت برند
                  مشتریان خود هستیم.
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
                        <span> 91092227-021
                          
                           </span>
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
      <FavButton />
    </>
  );
}

export default Contact;
