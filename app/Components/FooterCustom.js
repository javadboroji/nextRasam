import React from "react";
import logo from "@/public/LogoSite.svg";
import Link from "next/link";
import Image from "next/image";
//icon
import phone from "@/public/Phone, Call.svg";
import location from "@/public/Pin, Location.svg";
import mailBox from "@/public/Mailbox.svg";
import mail from "@/public/Mail.svg";
function FooterCustom() {
  const menu =[
    {
      id: "m1",
      title: "گالری تصاویر",
      url: "/ghallery",
    },
    {
      id: "m2",
      title: "درباره ما ",
      url: "/contact",
    },
    {
      id: "m3",
      title: " استخدام",
      url: "/",
    },
    {
      id: "m4",
      title: " دانش نامه",
      url: `/categoryes?id=a3f33d4ac9&catParent=a3f33d4ac9`,
    },
    {
      id: "m5",
      title: " مقالات  ",
      url: "/categoryes?id=e4d1bc87ed&catParent=e4d1bc87ed",
    },
    {
      id: "m6",
      title: " آموزش های فنی طراحی ",
      url: "/",
    },
  ];
  const contact = [
    {
      id: "c1",
      title: "021-91092227",
      icon: phone,
    },
    {
      id: "c2",
      title:
        "کیلومتر 24 جاده مخصوص کرج، گرمدره، خیابان سروستان، کوی سوم غربی، پلاک 133",
      icon: location,
    },
    {
      id: "c3",
      title: "3163839995",
      icon: mailBox,
    },
    {
      id: "c4",
      title: "flexo.rasam@gmail.com",
      icon: mail,
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="header">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <span className="companyName"> رسام نقش آناهیتا </span>
        </div>
        <div className="row d-flex  justify-content-between">
          <div className="col-12 col-lg-5">
            <span className="menu-title">دسترسی سریع</span>
            <ul className="footer-menu">
              {menu &&
                menu.map((item) => {
                  return (
                    <li key={item.id} className="footer-menu-item">
                      <Link href={item.url}> {item.title}</Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <span className="menu-title">ارتباط با ما</span>
            <div className="contact mt-3">
              {contact &&
                contact.map((item) => {
                  return (
                    <div key={item.id} className="item d-flex align-items-center">
                      <div className="icon">
                        <Image src={item.icon} alt="icon" />
                      </div>
                      <span className="value p-2"> {item.title}</span>

                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterCustom;
