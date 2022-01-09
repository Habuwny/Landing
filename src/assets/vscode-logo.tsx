import * as React from "react";
import { useEffect } from "react";
import { vscodeLogoAnime } from "../services/animation/components/laboratory/logos/vscode";

export const VSCode = () => {
  useEffect(() => {
    vscodeLogoAnime();
  }, []);
  return (
    <svg
      viewBox="0 0 418 415"
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={30}
      className={"labCellBtn"}
    >
      <g id="VSCodeLogo">
        <path
          d="M402.176 43.91L316.324 2.574a25.953 25.953 0 00-29.612 5.033L5.664 263.856c-7.559 6.892-7.551 18.794.019 25.675l22.957 20.87a17.36 17.36 0 0022.171.985L389.257 54.634c11.355-8.614 27.663-.515 27.663 13.737v-.997a26.043 26.043 0 00-14.744-23.464z"
          fill="#0065a9"
          fillRule="nonzero"
        />
        <path
          d="M402.811 370.4l-86.44 40.094a25.953 25.953 0 01-29.536-5.46L9.514 144.757c-7.459-7.001-7.279-18.902.389-25.673l23.256-20.536a17.361 17.361 0 0122.183-.666l334.706 261.609c11.229 8.777 27.653.915 27.858-13.335l-.014.996a26.04 26.04 0 01-15.081 23.248z"
          fill="#007acc"
          fillRule="nonzero"
        />
        <path
          d="M316.327 411.952a25.964 25.964 0 01-29.615-5.04c9.61 9.61 26.041 2.804 26.041-10.787V18.393c0-13.59-16.431-20.397-26.041-10.787a25.968 25.968 0 0129.615-5.04l85.838 41.28a26.041 26.041 0 0114.755 23.468v279.892a26.04 26.04 0 01-14.756 23.468l-85.837 41.278z"
          fill="#1f9cf0"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
