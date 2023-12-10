"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sun from "@/public/sun.svg";
import moon from "@/public/moon.svg";

function DarkMod() {
  const [input, setInput] = useState(null)
  const themMode =
    typeof window !== "undefined" ? localStorage.getItem("themMode") : "";

  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const localStorageMode = localStorage.getItem("themMode");
      // Default to true (dark mode) if there's no value in localStorage
      return localStorageMode === "dark";
    }
  });
  const changeMod = (e) => {
    setDark(!dark);
    setInput(!input)
    if (typeof window !== "undefined") {
      localStorage.setItem("themMode", dark ? "light" : "dark");
    
    }
  };

  useEffect(() => {
    if (dark) {
      if (typeof window !== "undefined") {
        localStorage.setItem("themMode", "dark");
        document.body.classList.add("dark-mode");
        setInput(false)
      }
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem("themMode", "light");
        document.body.classList.remove("dark-mode");
        setInput(true)
      }
    }
  }, [dark, themMode,input]);

  return (
    <div className="form-check form-switch d-flex align-items-center mt-3 mt-lg-0 me-3">
      <input type="checkbox" className="checkbox" id="checkbox" onChange={(e)=>changeMod(e)} checked={input} />
      <label htmlFor="checkbox" className="checkbox-label">
       
        
        <Image src={sun} alt="sun" className="sun" width={16}/>
        <Image src={moon} alt="moon" className="moon" width={16}/>
        <span className="ball"></span>
      </label>
    </div>
  );
}

export default DarkMod;
