"use client";

import Image from "next/image";
import React from "react";
import chatIcon from "@/public/chat.svg";
import qcIcon from "@/public/qc.svg";
import customerIcon from "@/public/nalege.svg";
import sendIcon from "@/public/send.svg";
import AOS from "aos";

import { useState, useEffect } from "react";

function Property() {
  const list= [
    {
      id: 1,
      title: "پاسخ گویی و احترام به حقوق مشتری ",
      description:
        "شرکت رسام نقش همیشه حقوق مشتریان خود را در اولویت قرار داده است و در راستای رضایت مشتری تلاش می نماید",
      icon: chatIcon,
      bgColor: "#E91E63",
    },
    {
      id: 2,
      title: "کیفیت بسیار بالا و قیمت رقابتی    ",
      description:
        " تلاش می کنیم مناسب ترین قیمت را با بالاترین کیفیت به مشتریان خود ارائه دهیم",
      icon: qcIcon,
      bgColor: "#FF9800",
    },
    {
      id: 3,
      title: "انتقال دانش فنی به همکاران  و مشتریان ",
      description:
        "متخصص های ما با مطالعه و دانش بالای خود میتوانند شما را در مشکلات کلیشه و چاپ راهنمایی کنند",
      icon: customerIcon,
      bgColor: "#673AB7",
    },
    {
      id: 4,
      title: "سرعت در تولید و تحویل به موقع سفارش  ",
      description:
        " مجموعه ی ما با پیاده سازی اتوماسیون خاص و منظم خود را متعهد کرده استظ تا سفارشات را به موقع و با بیشترین سرعت تحویل دهد. ",
      icon: sendIcon,
      bgColor: "#009688",
    },
  ];
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const handleMouseEnter = (id) => {
    setHoveredItemId(id);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="advantage">
      <div className="container">
        <h3 className="property-title whay-title">ویژگی های ما</h3>
        <div className="row  gy-3">
          {list &&
            list.map((item) => {
              return (
                <div key={item.id} className="col-12 col-lg-6">
                  <div
                    className={`property-card ${hoveredItemId === item.id ? 'hover' :''}`}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={() => handleMouseLeave()}
                    style={{
                      background: hoveredItemId === item.id ? item.bgColor : "",
                    }}
                  >
                    <div className="icon" style={{ background: item.bgColor }}>
                      <Image src={item.icon} alt="icon" />
                    </div>
                    <span className="title">{item.title}</span>
                    <span className="description">{item.description}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Property;
