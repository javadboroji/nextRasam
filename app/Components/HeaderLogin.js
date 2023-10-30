import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/LogoSite.svg";
import arrow from "@/public/Arrow, left.svg";

function HeaderLogin() {
  return (
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
  );
}

export default HeaderLogin;
