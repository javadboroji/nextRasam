"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/LogoSite.svg";
import Link from "next/link";
import useSWR from 'swr'




export function menus(){
  const fetcher = async () => {
    const res = await fetch("http://192.168.3.17:82/api/v1/Category/GetCategories");
    const { data } = await res.json();
    return data;
  };
  const { data, error } = useSWR('/api/navgation', fetcher, { revalidateOnFocus: false });
  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

const HeaderCustome = () => {
  //const [data, setData] = useState("");

  const [dropDown, setDropDown] = useState(false);
  /**==============================================
   *                api give menu dynamick value
   *
   *
   *
   *
   *=============================================**/
  const { data, error, isLoading } = menus();
  const drodownHandler = () => {
    setDropDown(() => !dropDown);
  };
  if(isLoading){
    return(<p> درحال بارگزاری ....</p>)
  } 
  if( error){
    return(<p> خطا ....</p>)

  }
  return (
    <div
      className="container-fluid position-fixed ps-0 pe-0 "
      style={{ zIndex: "100", height: dropDown ? "100%" : "" }}
    >
      <nav
        className="navbar navbar-expand-lg header-bg  d-flex h-100"
        style={{ alignItems: dropDown ? "baseline" : "" }}
      >
        <div className="container  d-flex align-items-baseline">
          <Link className="navbar-brand" href="/">
            <Image src={logo} alt="Logo" />
            <span> رسام نقش آناهیتا</span>
          </Link>
          <button
            onClick={() => drodownHandler()}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              dropDown ? "" : "collapse"
            } navbar-collapse justify-content-between align-items-center`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 me-5">
              {data &&
                data.map((item, i) => {
                  return (
                    <li className={`nav-item custom ${item.subs&& 'sub-menu'} px-2`} key={item.id}>
                      <Link className='nav-link menu-text' href={{pathname:"/categoryes" ,query:{id:item.id,catParent:item.id}}}>
                        {item.title}
                      </Link>
                      {item.subs.length>0 && (
                        <ul className="dropdown-menu">
                          {item.subs.map((sub) => {
                            return (
                              <li
                                className="nav-item custom px-2 "
                                key={sub.id}
                              >
                                <Link className="nav-link menu-text" href={{pathname:"/categoryes" , query:{ cat:sub.title,id:sub.id,catParent:item.id}}}>
                                  {sub.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              {/* <li className="nav-item custom px-2 ">
                <Link className="nav-link menu-text" href={"/trainings"}>
                  آموزش های فنی طراحی
                </Link>
              </li> */}
              <li className="nav-item custom px-2 ">
                <Link className="nav-link menu-text" href={"/ghallery"}>
                  گالری تصاویر
                </Link>
              </li>
              <li className="nav-item custom px-2 ">
                <Link className="nav-link menu-text" href={"/contact"}>
                  درباره ما
                </Link>
              </li>
            </ul>

            <button
              className="btn-blue-gradient"
              style={{ marginTop: "0" }}
              type="submit"
            >
              ثبت سفارش
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderCustome;
