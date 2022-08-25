import React from "react";
import { IconProps } from "_interfaces/components/base/Icon";

function Icon({opacity = 0.1, colorMain = "#7bdfab", colorSecond = "#0ad6be", className}: IconProps) {

  return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="614.4"
        height="345.6"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 614.4 345.6"
      >
        <defs>
          <linearGradient id="linearGradient1129">
            <stop offset="0" stopColor={colorMain} stopOpacity={opacity}></stop>
            <stop offset="0.5" stopColor={colorSecond} stopOpacity={opacity + 0.1}></stop>
            <stop offset="1" stopColor={colorMain} stopOpacity={opacity}></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient1131"
            x1="249.155"
            x2="249.155"
            y1="-4.579"
            y2="336.746"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient1129"
          ></linearGradient>
        </defs>
        <g fillOpacity="0.7" transform="translate(34.565 8.131)">
          <path
            fill={colorSecond}
            d="M-34.565 320.349v-17.12h.96V14.589h-.96v-3.044l9.842-9.838 9.842-9.838H9.275v.96h41.92v-.96h6.08v.96h493.76v-.96h28.8v40.96h-.96v124.16h.96v3.52h-1.6v51.52h1.6v3.2h-.96v102.884l-9.202 9.198-9.202 9.198H453.755v.96h-99.2v-2.24h-94.4v2.24h-128.96v-.96h-52.16v.96h-29.12v-.96H6.395v.96h-40.96zm84.48 15.04v-.48h29.12v.96h113.28v-3.84h-221.76v-289.6h-2.24v291.52h17.28v.96h16v-.96h4.8v1.92h43.52zm204.16 0v-.48h-56.96v.96h56.96zm163.84 0v-.48h-56.96v.96h56.96zm149.518-7.438l7.922-7.918V215.23h-2.88v103.514l-6.637 6.643-6.637 6.643H422.715v3.84H559.51zm-313.358 5.038v-.96h-56.96v1.92h56.96zm163.84 0v-.96h-56.96v1.92h56.96zm147.117-8.398l6.803-6.797V-.45H-20.636l-4.084 4.075-4.085 4.075v29.93h1.28v4.8h-1.28v281.92h6.4v7.04H558.23zm12.243-57.882v-51.48h-.96v103.758l.48-.398.48-.399zm.96-.46v-51.02h-.64v102.438l.32-.198.32-.198zm-610.56-107.34V14.589h-.64v288.64h.64zm606.08 27.36v-25.76h-1.28v51.52h1.28zm1.6-91.36v-62.08h-1.28v-3.52h-1.6v127.68h2.88zm1.92 0v-62.08h-.96v124.16h.96zm.96 0v-62.08h-.64v124.16h.64zm-608.64-71.41V9.369l-.64.58-.64.579v27.1h1.28zm604.48 2.93v-1.92h2.56v-28.16h-9.6v2.56h5.44v29.44h1.6zm-8-28.8v-1.28h-4.16v-1.28H57.275v3.84h508.8zm-562.88-.64v-1.28h-20.03l-1.25 1.28-1.25 1.28h22.53zm48-1.12v-2.4H9.275v4.8h41.92zm-48-1.76v-.64h-17.82l-.58.64-.58.64h18.98zm558.72-.32v-.32h-52.48v.64h52.48z"
          ></path>
          <path
            d="M-23.306 328.229v-3.595h-5.867v-141.13c0-93.381.221-141.266.652-141.534.85-.526.85-5.555 0-5.555-.415 0-.652-5.399-.652-14.889V6.637l3.768-3.737 3.767-3.738h593.473v318.632l-7.018 7.015-7.018 7.014H-23.306z"
            style={{ mixBlendMode: "screen" }}
            fill="url(#linearGradient1131)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="1"
            opacity="1"
            stopColor="#000"
          ></path>
        </g>
      </svg>
  );
}

export default Icon;