"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sun from "@/public/sun.svg";
import moon from "@/public/moon.svg";
function DarkMod() {
  const themMode =
    typeof window !== "undefined" ? localStorage.getItem("themMode") : "";

  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const localStorageMode = localStorage.getItem("themMode");
      // Default to true (dark mode) if there's no value in localStorage
      return localStorageMode === "dark";
    }
  });
  const changeMod = () => {
    setDark(!dark);
    setDark(!dark);
    if (typeof window !== "undefined") {
      localStorage.setItem("themMode", dark ? "light" : "dark");
    }
  };

  useEffect(() => {
    if (dark) {
      if (typeof window !== "undefined") {
        localStorage.setItem("themMode", "dark");
        document.body.classList.add("dark-mode");
      }
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem("themMode", "light");
        document.body.classList.remove("dark-mode");
      }
    }
  }, [dark, themMode]);

  return (
    <div className="form-check form-switch d-flex align-items-center mt-3 mt-lg-0 me-3">
      {dark ? (
        <Image
          id="theme-icon"
          width={20}
          height={20}
          alt="soon"
          style={{ marginLeft: "8px" }}
          onClick={() => changeMod()}
          src={sun}
        />
      ) : (
        <Image
          id="theme-icon"
          width={20}
          height={20}
          onClick={() => changeMod()}
          style={{ marginLeft: "8px" }}
          src={moon}
          alt="sun"
        />
      )}
    </div>
  );
}

export default DarkMod;
