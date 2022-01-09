import * as React from "react";
import { useEffect } from "react";
import { jetBrainsLogoAnime } from "../services/animation/components/laboratory/logos/jetbrains";

export const PyCharmLogo = () => {
  useEffect(() => {
    jetBrainsLogoAnime();
  }, []);
  return (
    <svg
      viewBox="0 0 292 292"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      className={"labCellBtn"}
    >
      <g id="JetBrainsLogo">
        <g id="JetBrainsLogoLeftSide" fillRule="nonzero">
          <path
            d="M118.75 92.083l-16.667 87.084-1.666 30-41.25 17.916L0 233.333l17.917-188.75L124.583 0l65.834 43.333-71.667 48.75z"
            fill="url(#_Linear1)"
          />
          <path
            d="M118.75 92.083l7.917 168.334L100 291.667 0 233.333l82.083-122.5 36.667-18.75z"
            fill="url(#_Linear2)"
          />
        </g>
        <g id="JetBrainsLogoRightSide" fillRule="nonzero">
          <path
            d="M204.583 45.833l85 71.25-30.416 62.084L207.5 165h-44.167l41.25-119.167z"
            fill="url(#_Linear3)"
          />
          <path
            d="M228.75 79.583H127.5L217.083 0l11.667 79.583z"
            fill="url(#_Linear4)"
          />
          <path
            d="M291.667 260.833L202.5 291.25 84.167 257.917 118.75 92.083l13.75-12.5 72.083-6.666-6.666 72.5 57.5-22.084 36.25 137.5z"
            fill="url(#_Linear5)"
          />
        </g>
        <g id="JetBrainsLogoName">
          <path id="JetBrainsLogoNameBack" d="M55.833 55.833h180v180h-180z" />
          <path
            d="M140.417 202.083h-67.5v11.25h67.5v-11.25zm-68.334-122.5H102.5c17.917 0 28.75 10.417 28.75 25.834v.416c0 17.084-13.333 26.25-30 26.25h-12.5v22.084H72.5V79.583h-.417zm29.584 37.5c8.333 0 12.916-5 12.916-11.25v-.416c0-7.5-5-11.25-13.333-11.25h-12.5v22.916h12.917zm36.25 0c0-21.25 15.833-38.75 38.75-38.75 14.166 0 22.5 4.584 29.583 11.667l-10.417 12.083c-5.833-5.416-11.666-8.333-19.166-8.333-12.5 0-21.667 10.417-21.667 23.333v-.416c0 12.916 8.75 23.333 21.667 23.333 8.333 0 13.75-3.333 19.583-8.75l10.417 10.417C199.167 150 190.417 155 176.25 155c-22.083.417-38.333-16.667-38.333-37.917"
            fill="#fff"
            id="JetBrainsLogoNameLetters"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="_Linear1"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-36.435 322.817 278.547) scale(444.248)"
        >
          <stop offset={0} stopColor="#fcf84a" />
          <stop offset={0.01} stopColor="#fcf84a" />
          <stop offset={0.11} stopColor="#a7eb62" />
          <stop offset={0.21} stopColor="#5fe077" />
          <stop offset={0.27} stopColor="#32da84" />
          <stop offset={0.31} stopColor="#21d789" />
          <stop offset={0.6} stopColor="#21d789" />
          <stop offset={0.69} stopColor="#20d68c" />
          <stop offset={0.76} stopColor="#1ed497" />
          <stop offset={0.83} stopColor="#19d1a9" />
          <stop offset={0.9} stopColor="#13ccc2" />
          <stop offset={0.97} stopColor="#0bc6e1" />
          <stop offset={1} stopColor="#07c3f2" />
        </linearGradient>
        <linearGradient
          id="_Linear2"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-72.324 240.788 135.183) scale(196.3269)"
        >
          <stop offset={0} stopColor="#21d789" />
          <stop offset={0.16} stopColor="#24d788" />
          <stop offset={0.3} stopColor="#2fd886" />
          <stop offset={0.44} stopColor="#41da82" />
          <stop offset={0.56} stopColor="#5adc7d" />
          <stop offset={0.69} stopColor="#7ae077" />
          <stop offset={0.81} stopColor="#a1e36e" />
          <stop offset={0.93} stopColor="#cfe865" />
          <stop offset={1} stopColor="#f1eb5e" />
        </linearGradient>
        <linearGradient
          id="_Linear3"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(104.16 112.692) scale(173.575)"
        >
          <stop offset={0} stopColor="#21d789" />
          <stop offset={1} stopColor="#07c3f2" />
        </linearGradient>
        <linearGradient
          id="_Linear4"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-53.359 219.036 -36.763) scale(217.365)"
        >
          <stop offset={0} stopColor="#21d789" />
          <stop offset={0.06} stopColor="#24d788" />
          <stop offset={0.11} stopColor="#2fd886" />
          <stop offset={0.16} stopColor="#41da82" />
          <stop offset={0.21} stopColor="#5add7d" />
          <stop offset={0.25} stopColor="#79e077" />
          <stop offset={0.26} stopColor="#7ce076" />
          <stop offset={0.5} stopColor="#8ce173" />
          <stop offset={0.92} stopColor="#b2e56b" />
          <stop offset={1} stopColor="#b2e56b" />
        </linearGradient>
        <linearGradient
          id="_Linear5"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(-261.3922) rotate(.531 75.051 -130.988)"
        >
          <stop offset={0} stopColor="#fcf84a" />
          <stop offset={0.39} stopColor="#fcf84a" />
          <stop offset={0.54} stopColor="#ecf451" />
          <stop offset={0.83} stopColor="#c2e964" />
          <stop offset={0.92} stopColor="#b2e56b" />
          <stop offset={1} stopColor="#b2e56b" />
        </linearGradient>
      </defs>
    </svg>
  );
};
