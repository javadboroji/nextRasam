'use client';
import React, { useState } from 'react'
import BreadcrumbCustom from '../Components/BreadcrumbCustom'
import '../custome.css'
import HeaderCustome from '../Components/HeaderCustome'
import CategoryItems from '../Components/CategoryItems';
import cardThumbnail from '@/public/frame-1261154708@2x.png'
import Favorites from '../Components/Favorites';
import FooterCustom from '../Components/FooterCustom';
function Training() {
    const [posts, setPosts] = useState([
        {
            id: "d-1",
            title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
            description:
              " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
            image: cardThumbnail,
            date: "1402/05/12",
            like: 12,
            comment: 2,
          },
          {
            id: "d-2",
            title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
            description:
              " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
            image: cardThumbnail,
            date: "1402/05/12",
            like: 12,
            comment: 2,
          },
          {
            id: "d-3",
            title: " کیفیت رنگ اضافی در چاپ افست تغذیه ورقی",
            description:
              " روشهای اندازه گیری بسیار دقیق و اثبات شده توام با سیستمهای پیش تنظیم مطلوب و مهندسی چاپ زمان تطبیق رنگ و تغییرات در خلال تولید را حداقل می‌سازد.",
            image: cardThumbnail,
            date: "1402/05/12",
            like: 12,
            comment: 2,
          },
    ])
    const [categoryes, setCategoryes] = useState([
        {
        id:'cat-1',
        title:"آنیلوکس",
        count:14,
    },
    {
        id:'cat-2',
        title:"مرکب",
        count:10,
    },
    {
        id:'cat-3',
        title:"سنسور",
        count:8,
    },
    {
      id:'cat-4',
      title:"سنسور",
      count:8,
  },
  {
    id:'cat-5',
    title:"سنسور",
    count:8,
},
{
  id:'cat-6',
  title:"سنسور",
  count:8,
},
    ])
    const [favorites, setFavorites] = useState([
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
    ])
  return (
    <>
        <HeaderCustome />
        <div className='training'>
    
        <BreadcrumbCustom />
        <CategoryItems  title={'آموزش های فنی طرحی'} posts={posts} categoryes={categoryes} singleBasUrl={'/trainings'} />
        <Favorites  title={'محبوب ترین  آموزش های فنی طراحی'} favorites={favorites}  />
        <FooterCustom />
    </div>
    </>
  )
}

export default Training