import * as React from "react";
import { useEffect } from "react";
import { otherLogoAnime } from "../services/animation/components/laboratory/logos/others";

export const OthersLogo = () => {
  useEffect(() => {
    otherLogoAnime();
  }, []);
  return (
    <svg
      viewBox="0 0 523 433"
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      className={"labCellBtn"}
    >
      <g id={"otherLogoRight"}>
        <path
          d="M306.279 432.712l216.359-216.358H417.017L306.275 327.1c-29.163 29.167-29.163 76.45.004 105.612z"
          fill="url(#_Linear19999999999980)"
        />
        <path
          d="M306.275.004c-29.158 29.163-29.158 76.442 0 105.604v.009l110.742 110.737c.004.004.008.009.012.009 29.154 29.166 29.154 76.445-.008 105.608l105.617-105.617L306.279 0h-.004v.004z"
          fill="url(#_Linear209811199)"
        />
      </g>
      <g id={"otherLogoLeft"}>
        <path
          d="M216.354 0L0 216.354h105.617l110.737-110.742c29.167-29.166 29.167-76.45 0-105.612z"
          fill="url(#_Linear36666245678)"
        />
        <path
          d="M216.358 432.708c29.159-29.162 29.159-76.441 0-105.604v-.008L105.613 216.354c0-.004-.005-.004-.009-.008-29.154-29.167-29.154-76.442.009-105.604L0 216.354l216.354 216.358h.004v-.004z"
          fill="url(#_Linear4999999286545678)"
        />
      </g>
      <path
        d="M261.317 270.275l-53.921-53.921 53.921-53.917 53.916 53.917-53.916 53.921z"
        fill="url(#_Linear509876543456781110)"
      />
      <defs>
        <linearGradient
          id="_Linear19999999999980"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(220.92) rotate(-49.713 2.7 -.47)"
        >
          <stop offset={0} stopColor="#68c290" />
          <stop offset={0.5} stopColor="#2fb495" />
          <stop offset={1} stopColor="#2d848f" />
        </linearGradient>
        <linearGradient
          id="_Linear209811199"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-88.295 357.958 -51.047) scale(286.45178)"
        >
          <stop offset={0} stopColor="#68c290" />
          <stop offset={0.5} stopColor="#2fb495" />
          <stop offset={1} stopColor="#2d848f" />
        </linearGradient>
        <linearGradient
          id="_Linear36666245678"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(-220.92) rotate(-49.713 -.596 1.104)"
        >
          <stop offset={0} stopColor="#6fc9c5" />
          <stop offset={0.6} stopColor="#13b8dc" />
          <stop offset={1} stopColor="#2085c7" />
        </linearGradient>
        <linearGradient
          id="_Linear4999999286545678"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(91.705 1.753 122.549) scale(286.45178)"
        >
          <stop offset={0} stopColor="#6fc9c5" />
          <stop offset={0.6} stopColor="#13b8dc" />
          <stop offset={1} stopColor="#2085c7" />
        </linearGradient>
        <linearGradient
          id="_Linear509876543456781110"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(-105.85635) rotate(-89.424 -2.02 .473)"
        >
          <stop offset={0} stopColor="#fadf03" />
          <stop offset={1} stopColor="#f17a21" />
        </linearGradient>
      </defs>
    </svg>
  );
};
