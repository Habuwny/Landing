import * as React from "react";
import { useEffect } from "react";
import { pythonLogoAnime } from "../services/animation/components/laboratory/logos/python";

export const PythonLogo = () => {
  useEffect(() => {
    pythonLogoAnime();
  }, []);
  return (
    <svg
      viewBox="0 0 464 469"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      className={"labCellBtn"}
    >
      <g id="pythonLogo">
        <circle
          id="pythonLogoBottomEye"
          cx="295.545"
          cy="411.508"
          r="26.637"
          fill="url(#_Linear2)"
        />
        <circle
          id="pythonLogoTopEye"
          cx="171.445"
          cy="53.174"
          r="26.637"
          fill="url(#_Linear1)"
        />
        <path
          id="path1948"
          d="M228.828,0.004c-19.098,0.089 -37.337,1.717 -53.385,4.557c-47.276,8.352 -55.86,25.834 -55.86,58.073l0,42.578l111.719,0l0,14.193l-153.646,-0c-32.468,-0 -60.899,19.515 -69.791,56.64c-10.258,42.555 -10.713,69.109 -0,113.542c7.941,33.075 26.906,56.641 59.375,56.641l38.411,-0l0,-51.042c0,-36.874 31.905,-69.401 69.792,-69.401l111.588,0c31.063,0 55.86,-25.576 55.86,-56.771l-0,-106.38c-0,-30.276 -25.542,-53.02 -55.86,-58.073c-19.191,-3.195 -39.104,-4.646 -58.203,-4.557Zm-60.416,34.245c11.539,-0 20.963,9.577 20.963,21.354c0,11.735 -9.424,21.224 -20.963,21.224c-11.582,-0 -20.964,-9.489 -20.964,-21.224c0,-11.777 9.382,-21.354 20.964,-21.354Z"
          fill="url(#_Linear1)"
        />
        <path
          id="path1950"
          d="M356.823,119.405l0,49.609c0,38.462 -32.608,70.834 -69.792,70.834l-111.588,-0c-30.566,-0 -55.86,26.16 -55.86,56.77l0,106.381c0,30.276 26.328,48.084 55.86,56.77c35.364,10.399 69.276,12.278 111.588,0c28.126,-8.143 55.86,-24.531 55.86,-56.77l-0,-42.579l-111.589,0l0,-14.192l167.448,-0c32.469,-0 44.568,-22.648 55.859,-56.641c11.664,-34.995 11.168,-68.649 0,-113.542c-8.024,-32.322 -23.349,-56.64 -55.859,-56.64l-41.927,-0Zm-62.76,269.401c11.581,-0 20.963,9.489 20.963,21.224c0,11.776 -9.382,21.354 -20.963,21.354c-11.54,0 -20.964,-9.578 -20.964,-21.354c0,-11.735 9.424,-21.224 20.964,-21.224Z"
          fill="url(#_Linear2)"
        />
      </g>
      <defs>
        <linearGradient
          id="_Linear1"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(255.526,221.968,-221.968,255.526,3.64634e-07,3.16749e-07)"
        >
          <stop offset="0" stopColor="#5a9fd4" stopOpacity="1" />
          <stop offset="1" stopColor="#306998" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="_Linear2"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-91.2481,-130.347,130.347,-91.2481,291.378,406.45)"
        >
          <stop offset="0" stopColor="#ffd43b" stopOpacity="1" />
          <stop offset="1" stopColor="#ffe873" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
