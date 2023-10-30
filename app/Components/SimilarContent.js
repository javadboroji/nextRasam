"use client";

import React,{useState} from "react";
import SliderPosts from "./SliderPosts";
import cardThumbnail from '@/public/frame-1261154708@2x.png';


function SimilarContent({ title }) {
  const [posts, setPosts] = useState([
    {
      id: "f-1",
      title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
      description:
        " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
      image: cardThumbnail,
      date: "1402/05/12",
      like: 12,
      comment: 2,
    },
    {
      id: "f-2",
      title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
      description:
        " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
      image: cardThumbnail,
      date: "1402/05/12",
      like: 12,
      comment: 2,
    },
    {
      id: "f-3",
      title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
      description:
        " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
      image: cardThumbnail,
      date: "1402/05/12",
      like: 12,
      comment: 2,
    },
    {
      id: "f-4",
      title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
      description:
        " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
      image: cardThumbnail,
      date: "1402/05/12",
      like: 12,
      comment: 2,
    },
    {
      id: "f-5",
      title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
      description:
        " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
      image: cardThumbnail,
      date: "1402/05/12",
      like: 12,
      comment: 2,
    },
    {
      id: "f-6",
      title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
      description:
        " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
      image: cardThumbnail,
      date: "1402/05/12",
      like: 12,
      comment: 2,
    },
  ]);
  return (
    <div className="similar">
      <div className="container">
        <p>{title}</p>
        <SliderPosts posts={posts}/>
      </div>
    </div>
  );
}

export default SimilarContent;
