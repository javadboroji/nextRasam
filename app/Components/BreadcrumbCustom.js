"use client";
import React, { useState, useEffect } from "react";
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
  const api = `http://webapp.rasamflexo.ir/api/v1/Category/GetBreadCrumbByCategory?articleId=${pathNames[1]}`;
  const [error, setError] = useState(null);
  const [breadcrumbCat, setBreadcrumbCat] = useState([]);

  useEffect(() => {
    fetch(api, { revalidateOnFocus: false })
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
  }, []);
  /**=======================
   *     GetCategorey
   *
   *
   *========================**/
  return (
    <div className="container-fluid container-lg  pe-0 mt-5 mt-lg-0">
      <div className="row pe-0 ps-0 d-flex align-items-baseline justify-content-between w-100 pt-5 pt-md-3">
        <div className="col-12 col-md-10 order-1 order-md-0">
          <ul className="breadcrumb-ul p-0 ">
            {pathNames && (
              <li className="breadcrumb-item ">
                <Link href="/" className="active breadcrumb-item-active">
                  {" "}
                  صفحه اصلی
                </Link>
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
                      ) : item === "video" ? (
                        "ویدیوها"
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
                          ? breadcrumbCat.map((catName) => (
                              <Link
                                key={catName.id}
                                href={{
                                  pathname: "/categoryes",
                                  query: { id: catName.id },
                                }}
                                className="breadcrumb-item breadcrumb-item-active"
                              >
                                {" "}
                                {catName.categoryName}
                              </Link>
                            ))
                          : item}
                      </>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="col-12 col-md-2 d-flex justify-content-end order-0 order-md-1">
          <button onClick={() => router.back()} className="back-btn">
            برگشت
            <Image src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BreadcrumbCustom;
