import React from "react";
import "aos/dist/aos.css";
import "@/app/custome.css";
import aboutImage from "@/public/aboutImage.jpeg";
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
                <div className="about-thumbnail ">
                  
                    <Image src={aboutImage} style={{borderRadius:'12px' ,height:'100%' ,objectFit:'contain'}} alt="image" />

                </div>
              </div>
              <div className="col-12 col-lg-7 ">
                <h3 className="whay-title about-title py-3"> درباره ما</h3>
                <span className="description">
                  شرکت رسام نقش آناهیتا متعهد به ارائه خدماتی با کیفیت است. تلاش
                  ما بر این است که بهترین تجربه ممکن را برای مشتریانمان فراهم
                  آوریم. با دقت در جزئیات و استفاده از آخرین تکنولوژی‌ها، سعی
                  داریم تا خدماتی نوآورانه را ارائه دهیم .<br/>
                   به عنوان یک نقطه
                  تلفیق بین هنر و فناوری، به دنبال ایجاد تجربه‌ای منحصر به فرد و
                  بی‌نظیر برای شما هستیم و تمرکز ما بر ارتقاء هویت مشتری است، تا
                  به شما کمک کنیم در محیط رقابتی امروزه، برجسته و ویژه باشید.<br/>
                  شرکت رسام نقش آناهیتا، پیش رو در صنعت تولید کلیشه های ژلاتینی
                  چاپ فلکسو، به عنوان یک پیشگام در این حوزه، به طراحی و تولید
                  بسته‌بندی‌های شگفت‌انگیز و بی‌نظیر متعهد است.<br/>
                   تخصص ما در ارائه
                  راهکارهایی ويژه و منحصر بفرد است، تیم ما از افراد متخصص و پیشرو
                  در زمینه طراحی گرافیک، مهندسی چاپ و تکنولوژی‌های نرم افزاری
                  نوین تشکیل شده است. ما با افتخار اعلام می‌کنیم که با بهره‌گیری
                  از تجهیزات پیشرفته و بروز و جدیدترین روش‌های پیش از چاپ، به
                  تولید متریال های با کیفیت بالا و طراحی منحصر به فرد
                  می‌پردازیم. ارزش‌هایی چون نوآوری، کیفیت، و رضایت مشتری برای ما
                  حائز اهمیت است. ما به دنبال ارتقاء هویت برند مشتریان خود
                  هستیم.
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
      <FavButton />
    </>
  );
}

export default Contact;
