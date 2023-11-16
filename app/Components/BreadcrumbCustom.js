"use client";
import React, { useState ,useEffect} from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import arrow from "@/public/Arrow, left.svg";
import Image from "next/image";

function BreadcrumbCustom({ title }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const api =`http://192.168.3.17:82/api/v1/Category/GetBreadCrumbByCategory?articleId=${pathNames[1]}`;
  const [error, setError] = useState(null);                   
  const [breadcrumbCat, setBreadcrumbCat] = useState('')
  useEffect(() => {
    console.log("true");
    fetch(api,{ revalidateOnFocus: false })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((responseData) => {
      setBreadcrumbCat(responseData.data);
      
    })
    .catch((err) => {
      setError(err);
    });
    
  }, [])
  return (
    <div className="container-fluid container-lg d-flex justify-content-between align-items-baseline pe-0 mt-5 mt-lg-0">
      <ul className="breadcrumb-ul ">
        {pathNames && (
          <li className="breadcrumb-item">
            <Link href="/"> صفحه اصلی</Link>
          </li>
        )}
        {pathNames &&
          pathNames.map((item, i) => {
            return (
              <li key={i} className="breadcrumb-item">
                {i === pathNames.length - 1 ? (
                  item === "contact" ? (
                    "درباره ما"
                  ) : item === "ghallery" ? (
                    "گالری"
                  ) : item === "trainings" ? (
                    "آموزش های فنی طراحی"
                  ) : item === "categoryes" ? (
                    "مقالات"
                  ) : title ? (
                    title
                  ) : (
                    item
                  )
                ) : (
                  <>
                    {item === "contact"
                      ? "درباره ما"
                      : item === "ghallery"
                      ? "گالری"
                      : item === "trainings"
                      ? "آموزش های فنی طراحی"
                      : item === "categoryes"
                      ? breadcrumbCat
                      : item}
                  </>
                )}
              </li>
            );
          })}
      </ul>
      <button onClick={() => router.back()} className="back-btn">
          برگشت
          <Image src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default BreadcrumbCustom;
