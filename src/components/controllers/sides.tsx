import { useEffect, useState } from "react";
import gsap from "gsap";
import { portfolioAnimation } from "../../services/animation/components/controllers/portfolioAnimation";
import * as React from "react";
import { useActions, useTypedSelector } from "../../hooks";
import { useLocation } from "react-router-dom";

export const Sides = () => {
  const theme = useTypedSelector((state: any) => state.theme.currentTheme);
  const [color, setColor] = useState<string>("#b219ab");
  const { createTimeLine } = useActions();
  const loc = useLocation().pathname;
  let TLP: gsap.core.Timeline;
  const toPortfolio = () => {
    let tl = gsap.timeline({});

    tl.to("#leftDotToStick", { duration: 0.01, x: 0 })
      .to("#leftDotToStickBack", {
        duration: 0.01,
        scaleY: 1,
        transformOrigin: "center center",
      })
      .to("#leftDotToStickBack", {
        scaleY: 0.5,
        transformOrigin: "center center",
      })
      .to("#leftDotToStick", { x: "+=15" })
      .to("#leftDotToText", { duration: 1, morphSVG: "#Portfolio" });

    return tl;
  };

  const onMouseOver = () => {
    TLP ? TLP.restart() : (TLP = toPortfolio());
  };
  const onMouseLeave = () => {
    TLP.reverse(0);
  };

  useEffect(() => {
    let tl;
    if (theme === "default") {
      tl = portfolioAnimation();
      createTimeLine(tl, "portfolio_side");
    }
    if (loc !== "/") {
      tl?.pause();
    } else if (loc === "/") {
      tl?.resume();
    }
    if (theme === "day_full" || theme === "day_resize") {
      setColor("#0049a4");
    } else if (theme === "heart_full" || theme === "heart_resize") {
      setColor("#d41c71");
    } else if (theme === "night_full" || theme === "night_resize") {
      setColor("#09cebb");
    } else {
      setColor("#b219ab");
    }
  }, [theme, useLocation().pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <svg
      className={"controllers_sides controllers_sides-parts"}
      id={"controllerSVG"}
      height="100%"
      style={{
        strokeMiterlimit: 2,
      }}
      width="100%"
      version="1.1"
      viewBox="0 0 635 270"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
    >
      <g>
        <path
          className={"controllers_sides-parts"}
          id="leftDotToStickCircle"
          d="M 118.045, 119.749 m -118.045, 0 a 118.045, 118.045 0 1,0 236.09,0 a 118.045,118.045 0 1,0 -236.09,0"
          style={{ fill: color }}
        />
        <path
          className={"controllers_sides-parts"}
          id="leftDotToStickCurve"
          style={{ fill: color }}
          d="M159.016,12.432c49.256,54.772 115.307,99.393 68.742,138.228c-48.558,40.496 -91.903,128.268 -138.228,68.742c-37.675,-48.413 -127.491,-88.296 -68.742,-138.228c46.322,-39.369 101.321,-109.782 138.228,-68.742Z"
        />
        <path
          className={"controllers_sides-parts"}
          id="leftDotToStickCircleBack"
          d="M 118.045, 119.749 m -118.045, 0 a 118.045, 118.045 0 1,0 236.09,0 a 118.045,118.045 0 1,0 -236.09,0"
          style={{ fill: color }}
        />
        <path
          className={"controllers_sides-parts"}
          id="leftDotToStickCurveBack"
          style={{ fill: color }}
          d="M159.016,12.432c49.256,54.772 115.307,99.393 68.742,138.228c-48.558,40.496 -91.903,128.268 -138.228,68.742c-37.675,-48.413 -127.491,-88.296 -68.742,-138.228c46.322,-39.369 101.321,-109.782 138.228,-68.742Z"
        />

        <path
          className={"controllers_sides-parts"}
          id="leftDotToText"
          style={{ fill: "#bfa2a2" }}
          d={
            "M 187.088, 119.749 m -7.272, 0 a 7.272, 7.272 0 1,0 14.544,0 a 7.272,7.272 0 1,0 -14.544,0"
          }
        />
        <path
          className={"controllers_sides-parts"}
          id="leftDotToStick"
          style={{ fill: "#fff" }}
          d="M163.03,126.974l-0.009,-14.498l-74.621,0.048l0.01,14.497l74.62,-0.047Z"
        />
        <path
          className={"controllers_sides-parts"}
          id="leftDotToStickBack"
          style={{ fill: "#fff", fillRule: "nonzero" }}
          d="M91.193,66.048l-53.701,53.189l53.701,54.213l10.229,-10.229l-43.472,-43.984l43.472,-42.961l-10.229,-10.228Z"
        />
      </g>
      <path
        id="Portfolio"
        className={"controllers_sides-parts"}
        style={{ fill: "#bfa2a2", fillRule: "nonzero" }}
        d="M255.545,85.154l24.63,0c15.894,0 23.841,7.751 23.841,23.251c0,7.881 -2.019,13.891 -6.059,18.028c-4.039,4.138 -9.966,6.207 -17.782,6.207l-11.034,0l-0,19.507l-13.596,-0l0,-66.993Zm24.531,35.861c6.765,-0 10.148,-4.203 10.148,-12.61c-0,-4.072 -0.805,-7.028 -2.414,-8.867c-1.609,-1.839 -4.187,-2.758 -7.734,-2.758l-10.935,-0l-0,24.235l10.935,-0Zm53.89,32.314c-7.422,-0 -13.054,-2.25 -16.896,-6.749c-3.842,-4.499 -5.763,-10.886 -5.763,-19.161c-0,-8.21 1.921,-14.548 5.763,-19.014c3.842,-4.466 9.474,-6.7 16.896,-6.7c7.421,0 13.053,2.234 16.896,6.7c3.842,4.466 5.763,10.804 5.763,19.014c-0,8.275 -1.921,14.662 -5.763,19.161c-3.843,4.499 -9.475,6.749 -16.896,6.749Zm-0,-11.231c3.152,-0 5.484,-1.15 6.995,-3.448c1.51,-2.299 2.265,-6.043 2.265,-11.231c0,-5.189 -0.755,-8.9 -2.265,-11.133c-1.511,-2.233 -3.843,-3.35 -6.995,-3.35c-3.153,0 -5.484,1.117 -6.995,3.35c-1.511,2.233 -2.266,5.944 -2.266,11.133c0,5.188 0.755,8.932 2.266,11.231c1.511,2.298 3.842,3.448 6.995,3.448Zm34.284,-39.21l13.103,-0l-0,5.221c5.648,-3.284 10.903,-5.418 15.763,-6.404l-0,13.3c-4.926,0.986 -9.491,2.135 -13.694,3.449l-1.971,0.689l0,33.004l-13.201,-0l0,-49.259Zm55.367,50.441c-3.809,-0 -6.765,-0.591 -8.866,-1.773c-2.102,-1.183 -3.613,-3.12 -4.532,-5.813c-0.92,-2.693 -1.38,-6.404 -1.38,-11.133l0,-20.491l-5.812,-0l-0,-11.231l5.812,-0l0,-13.694l13.202,-0l-0,13.694l12.118,-0l-0,11.231l-12.118,-0l-0,20.196c-0,2.561 0.23,4.417 0.689,5.566c0.46,1.15 1.61,1.691 3.449,1.626l7.487,-0.197l0.591,10.541c-2.627,0.591 -4.68,0.985 -6.157,1.182c-1.478,0.197 -2.972,0.296 -4.483,0.296Zm23.447,-39.21l-5.32,-0l0,-11.231l5.32,-0l0,-2.168c0,-4.794 0.46,-8.538 1.38,-11.231c0.919,-2.693 2.397,-4.614 4.433,-5.763c2.036,-1.149 4.893,-1.724 8.571,-1.724l11.231,0.887l-0.197,11.132l-8.177,-0.394c-1.379,-0 -2.397,0.706 -3.054,2.118c-0.657,1.412 -0.985,3.103 -0.985,5.074l-0,2.069l11.921,-0l-0,11.231l-11.921,-0l-0,38.028l-13.202,-0l0,-38.028Zm54.481,39.21c-7.422,-0 -13.054,-2.25 -16.896,-6.749c-3.842,-4.499 -5.763,-10.886 -5.763,-19.161c-0,-8.21 1.921,-14.548 5.763,-19.014c3.842,-4.466 9.474,-6.7 16.896,-6.7c7.422,0 13.054,2.234 16.896,6.7c3.842,4.466 5.763,10.804 5.763,19.014c0,8.275 -1.921,14.662 -5.763,19.161c-3.842,4.499 -9.474,6.749 -16.896,6.749Zm-0,-11.231c3.152,-0 5.484,-1.15 6.995,-3.448c1.51,-2.299 2.266,-6.043 2.266,-11.231c-0,-5.189 -0.756,-8.9 -2.266,-11.133c-1.511,-2.233 -3.843,-3.35 -6.995,-3.35c-3.153,0 -5.484,1.117 -6.995,3.35c-1.511,2.233 -2.266,5.944 -2.266,11.133c0,5.188 0.755,8.932 2.266,11.231c1.511,2.298 3.842,3.448 6.995,3.448Zm34.875,-58.914l13.202,0l-0,68.963l-13.202,-0l0,-68.963Zm27.979,19.704l13.202,-0l-0,49.259l-13.202,-0l0,-49.259Zm0,-19.605l13.202,-0l-0,13.3l-13.202,-0l0,-13.3Zm46.993,70.046c-7.421,-0 -13.053,-2.25 -16.895,-6.749c-3.843,-4.499 -5.764,-10.886 -5.764,-19.161c0,-8.21 1.921,-14.548 5.764,-19.014c3.842,-4.466 9.474,-6.7 16.895,-6.7c7.422,0 13.054,2.234 16.896,6.7c3.842,4.466 5.764,10.804 5.764,19.014c-0,8.275 -1.922,14.662 -5.764,19.161c-3.842,4.499 -9.474,6.749 -16.896,6.749Zm0,-11.231c3.153,-0 5.485,-1.15 6.995,-3.448c1.511,-2.299 2.266,-6.043 2.266,-11.231c0,-5.189 -0.755,-8.9 -2.266,-11.133c-1.51,-2.233 -3.842,-3.35 -6.995,-3.35c-3.152,0 -5.484,1.117 -6.994,3.35c-1.511,2.233 -2.266,5.944 -2.266,11.133c-0,5.188 0.755,8.932 2.266,11.231c1.51,2.298 3.842,3.448 6.994,3.448Z"
      />
      <path
        cursor={"pointer"}
        className={"controllers_sides-parts"}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        id="toProfile"
        d="M 118.045, 119.749 m -118.045, 0 a 118.045, 118.045 0 1,0 236.09,0 a 118.045,118.045 0 1,0 -236.09,0"
        style={{ fill: color }}
        opacity={0.005}
      />
    </svg>
  );
};
