import * as React from "react";
import { useEffect } from "react";
import { jetBrainsLogoAnime } from "../services/animation/components/laboratory/logos/jetbrains";

export const WebStormLogo = () => {
  useEffect(() => {
    jetBrainsLogoAnime();
  }, []);
  return (
    <svg
      viewBox="0 0 1067 1067"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      className={"labCellBtn"}
    >
      <g id="JetBrainsLogo">
        <path
          id="JetBrainsLogoLeftSide"
          d="M143.333 963.333L0 111.667l266.667-110 168.333 100 156.667-83.334 323.333 125-181.667 923.334-590-103.334z"
          fill="url(#_Linear99999999999999)"
          fillRule="nonzero"
        />
        <g id="JetBrainsLogoRightSide" fillRule="nonzero">
          <path
            d="M1066.67 361.667l-138.334-340L680.003 0 293.336 370 396.67 848.333l195 135 475-281.666-116.667-218.334 116.667-121.666z"
            fill="url(#_Linear2222222222222222223)"
          />
          <path
            d="M853.333 310L950 483.333l116.667-121.666-85-211.667-128.334 160z"
            fill="url(#_Linear3333333333333333333333232)"
          />
        </g>
        <g id="JetBrainsLogoName">
          <path id="JetBrainsLogoNameBack" d="M200 200h666.667v666.667H200z" />
          <path
            id="JetBrainsLogoNameLetters"
            d="M263.333 741.667h250v41.666h-250v-41.666zM590 523.333L625 480c25 20 50 33.333 81.667 33.333 25 0 40-10 40-26.666 0-15-10-23.334-55-35-55-15-90-30-90-85V365c0-50 40-83.333 95-83.333a163.16 163.16 0 01101.666 35l-31.666 46.666a127.006 127.006 0 00-70-26.666c-21.667 0-35 10-35 25 0 18.333 11.666 25 58.333 36.666 55 15 86.667 35 86.667 83.334 0 55-41.667 86.666-100 86.666a192.169 192.169 0 01-116.667-45zm-53.333-236.666l-41.667 160-46.667-160h-46.666l-46.667 160-41.667-160h-65l80 276.666H380l45-160 45 160h51.667l80-276.666h-65z"
            fill="#fff"
            fillRule="nonzero"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="_Linear99999999999999"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(74.474 176.21 262.107) scale(1031.388)"
        >
          <stop offset={0} stopColor="#00cdd7" />
          <stop offset={0.28} stopColor="#00cdd7" />
          <stop offset={0.94} stopColor="#2086d7" />
          <stop offset={1} stopColor="#2086d7" />
        </linearGradient>
        <linearGradient
          id="_Linear2222222222222222223"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(467 684.75 -684.75 467 467.25 148.75)"
        >
          <stop offset={0} stopColor="#fff045" />
          <stop offset={0.14} stopColor="#fff045" />
          <stop offset={0.37} stopColor="#00cdd7" />
          <stop offset={1} stopColor="#00cdd7" />
        </linearGradient>
        <linearGradient
          id="_Linear3333333333333333333333232"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(3890.34) rotate(-66.197 -14.998 -16.711)"
        >
          <stop offset={0} stopColor="#00cdd7" />
          <stop offset={0.28} stopColor="#00cdd7" />
          <stop offset={0.94} stopColor="#2086d7" />
          <stop offset={1} stopColor="#2086d7" />
        </linearGradient>
      </defs>
    </svg>
  );
};
