"use client";
import React from "react";
import axios from "axios";
import "@/app/custome.css";
import HeaderLogin from "../Components/HeaderLogin";
import { useFormik, ErrorMessage, Field } from "formik";
import { Form } from "formik";
import circle from "@/public/user-circle.svg";
import Key from "@/public/Key.svg";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";
import { getLogin } from "@/app/api/login";
import { redirect, useRouter } from "next/navigation";
import logo from "@/public/LogoSite.svg";
import arrow from "@/public/Arrow, left.svg";
function Page() {
  const router = useRouter();

  const body = {
    userName: "admin",
    password: "q1w2e3r4",
  };

  /**=======================
   *     api
   *
   *
   *========================**/

  /**=======================
   *     Formick Config
   *
   *
   *========================**/


  return (
    <>
      <div className="login-bg">
        <div>
          <div className="container">
            <div className="login-header-content d-flex justify-content-between">
              <Link className="navbar-brand" href="/">
                <Image src={logo} alt="Logo" />
                <span> رسام نقش آناهیتا</span>
              </Link>
              <Link href="/" className="card-more-link">
                برگشت
                <Image src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-5">
              <div className="login-form-container">
                <span className="title"> ورود به حساب کاربری</span>
                <form>
                  <div className="position-relative mb-3">
                    <input
                      id="username"
                      placeholder="نام کاربری"
                      type="text"
                    
                    />
                    <Image src={circle} alt="icon" className="input-icon" />
                  </div>

                  <div className="position-relative mb-3">
                    <input
                      id="password"
                      type="password"
                      placeholder="پسورد"
                
                    />
                    <Image src={Key} alt="icon" className="input-icon" />
                
                  </div>
                  <div className="form-check ">
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      مرا به خاطر بسپار
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                  </div>

                  <button type="submit" className="btn-blue-gradient w-100">
                    ورود
                  </button>
                </form>
                <div className="form-footer">
                  <span>
                    {" "}
                    رمز عبورخودرا فراموش کرده اید؟{" "}
                    <Link href="/"> بازیابی رمز عبور</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
