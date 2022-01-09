import * as React from "react";
import { useEffect } from "react";
import { cssHtmlLogoAnime } from "../services";

export const HtmlLogo = () => {
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
          d="M100 33.333V166.25l46.667-13.333 10.416-119.584H100z"
          fill={"#ff6d00"}
        />
        <path
          className={"html-cssBackRight"}
          d="M100 104.167V87.5h35.833l-2.916 47.917L100 146.25v-17.5l17.083-5.833 1.25-18.75H100zm37.083-33.334l1.25-16.666H100v16.666h37.083z"
          fill={"#fff"}
        />
      </g>
      <g>
        <path
          d="M100 33.542v132.916l-46.667-13.333L42.917 33.542H100z"
          fill={"#e65100"}
        />
        <path
          className={"html-cssBackLeft"}
          d="M100 128.75v17.5l-32.917-10.833-1.666-22.917h16.666l.834 10.417L100 128.75zM79.583 70.833H100V54.167H62.083l2.917 50h35V87.5H80.833l-1.25-16.667z"
          fill={"#eee"}
        />
      </g>
    </svg>
  );
};
