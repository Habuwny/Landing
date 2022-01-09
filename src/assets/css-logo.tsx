import * as React from "react";
import { useEffect } from "react";
import { cssHtmlLogoAnime } from "../services";

export const CSSLogo = () => {
  useEffect(() => {
    cssHtmlLogoAnime();
  }, []);
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      className={"labCellBtn"}
    >
      <g>
        <path
          d="M100 20.833v158.334l57.908-15.883 12.925-142.451H100z"
          fill={"#039be5"}
        />
        <path
          className={"html-cssBackRight"}
          d="M137.917 54.167H100v16.666h20.417l-1.25 16.667H100v16.667h18.333l-1.25 18.75L100 128.75v17.5l32.917-10.833 2.916-47.917 2.084-33.333z"
          fill={"#fff"}
        />
      </g>
      <g>
        <path
          d="M41.667 162.5L100 179.167V20.833h70.833l-12.864 141.771.364-.104 12.5-141.667H29.167l12.5 141.667z"
          fill={"#0277bd"}
        />
        <path
          className={"html-cssBackLeft"}
          d="M100 54.167v16.666H62.917l-1.25-16.666H100zM80.833 87.5l.834 16.667H100V87.5H80.833zm1.667 25H65.833l1.25 22.917L100 146.25v-17.5l-17.083-5.833L82.5 112.5z"
          fill={"#eee"}
        />
      </g>
    </svg>
  );
};
