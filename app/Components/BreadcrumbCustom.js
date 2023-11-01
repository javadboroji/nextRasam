'use client'
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import arrow from "@/public/Arrow, left.svg";
import Image from "next/image";

function BreadcrumbCustom({title}) {
  const searchParams = useSearchParams();
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  //const title = searchParams.get('name');

  return (
    <div className="container-fluid container-lg d-flex justify-content-between align-items-baseline pe-0 mt-5 mt-lg-0">

      <ul className="breadcrumb-ul ">
        {pathNames && (
          <li className="breadcrumb-item">
            <Link href={"/"}> صفحه اصلی</Link>
          </li>
        )}
        {pathNames &&
          pathNames.map((item, i) => {
            return (
              <li key={i} className="breadcrumb-item">
                {i === pathNames.length - 1 ? (
                item === "contact"
                ? "درباره ما"
                : item === "ghallery"
                ? "گالری"
                : item === "trainings"
                ? "آموزش های فنی طراحی"
                : item === "categoryes"
                ? "مقالات"
                : 
                title?title:
                item
               
              ) : (
                  <>
                  {item === "contact"
                    ? "درباره ما"
                    : item === "ghallery"
                    ? "گالری"
                    : item === "trainings"
                    ? "آموزش های فنی طراحی"
                    : item === "categoryes"
                    ? "مقالات"
                    : item}
              </>
              )}
            </li>
            );
          })}
      </ul>
      <Link href="/" className="card-more-link">
        برگشت
        <Image src={arrow} alt="arrow" />
      </Link>
    </div>
  );
}

export default BreadcrumbCustom;
