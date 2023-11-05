"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function DarkMod() {
  let giveModeLocalStorage;
  let themMode;
    giveModeLocalStorage = localStorage?.getItem("themMode") || "";
    themMode = localStorage.getItem("themMode");
  

    const [dark, setDark] = useState(() => {
      const localStorageMode = localStorage.getItem("themMode");
      // Default to true (dark mode) if there's no value in localStorage
      return localStorageMode === "dark";
    });
  console.log(dark);
  const changeMod = () => {
    setDark(!dark);
    setDark(!dark);
    localStorage.setItem("themMode", dark ? "light" : "dark");
  };

  useEffect(() => {
    if (dark) {
      localStorage.setItem("themMode", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("themMode", "light");
      document.body.classList.remove("dark-mode");
    }
  }, [dark,themMode]);

  return (
    <div className="form-check form-switch d-flex align-items-center mt-3 mt-lg-0">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckChecked"
        checked={dark}
        onChange={() => changeMod()}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
       {dark? <Image
          id="theme-icon"
          width={20}
          height={20}
          alt="soon"
          style={{marginLeft:"8px"}}
          src={
              
              "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg"
          }
         
        />:  
        <Image
          id="theme-icon"
          width={20}
          height={20}
          style={{marginLeft:"8px"}}
          src={
            "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
          }
          alt="sun"
        />
        } 
       
      </label>
    </div>
  );
}

export default DarkMod;
