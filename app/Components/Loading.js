import React from "react";

function Loading() {
  return (
    <div className="loading-bg">
      <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <fegaussianblur
              in="SourceGraphic"
              stdDeviation="12"
              result="blur"
            ></fegaussianblur>
            <fecolormatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></fecolormatrix>
            <feblend in="SourceGraphic" in2="goo"></feblend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Loading;
