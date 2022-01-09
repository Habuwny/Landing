import { useEffect, useState } from "react";
// import { logoAnimation } from "../../services";
import { logoAnimation } from "../../services/animation/components/controllers/logoAnimartion";
import { useTypedSelector } from "../../hooks";
import { useActions } from "../../hooks";
import * as React from "react";

export const Logo = () => {
  const { createTimeLine } = useActions();
  const theme = useTypedSelector((state) => state.theme.currentTheme);
  const tls = useTypedSelector((state: any) => state.tls);

  const [wingColor] = useState<string>("#61bb43");
  const [aCharacterColor, setACharacterColor] = useState<string>("#833a94");
  const [hCharacterColor, sethCharacterColor] = useState<string>("#9e6daf");
  useEffect(() => {
    if (tls.logo) {
      tls.logo.tl.restart();
    } else {
      let tl = logoAnimation();
      createTimeLine(tl, "logo");
    }

    switch (theme) {
      case "day_full":
        setACharacterColor("#0049a4");
        sethCharacterColor("#3e94ff");
        return;
      case "day_resize":
        setACharacterColor("#0049a4");
        sethCharacterColor("#3e94ff");
        return;

      case "heart_full":
        setACharacterColor("#891249");
        sethCharacterColor("#d41c71");
        return;
      case "heart_resize":
        setACharacterColor("#891249");
        sethCharacterColor("#d41c71");
        return;

      case "night_full":
        setACharacterColor("#068d80");
        sethCharacterColor("#09cebb");
        return;
      case "night_resize":
        setACharacterColor("#068d80");
        sethCharacterColor("#09cebb");
        return;

      default:
        setACharacterColor("#833a94");
        sethCharacterColor("#9e6daf");
        return;
    }
  }, [theme]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <svg
      height={"100%"}
      width={"100%"}
      id={"controllerSVG"}
      x={0}
      y={0}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      version="1.1"
      viewBox="0 0 2450 2125"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
    >
      <g>
        <g id={"logoRightSide"}>
          <path
            id="hCharacter"
            style={{ fill: hCharacterColor }}
            d="M1545.54,471.138l425,466.666l-420.834,775l173.334,-651.904l-248.613,-0l0,784.292l-165.279,278.566l0,-1898.46l164.583,164.583l0,492.359l214.584,-0l-142.775,-411.104Z"
          />
          <g id="rightWing">
            <g id="rightBottomWing">
              <path
                style={{ fill: wingColor }}
                d="M1865.79,1786.86l435.151,-651.286l123.865,82.76l-559.016,568.526Z"
              />
              <path
                style={{ fill: wingColor }}
                d="M1645.85,299.069l778.953,919.266l-110.948,83.527l-668.005,-1002.79Z"
              />
            </g>
            <g id="rightTopWing">
              <path
                style={{ fill: wingColor }}
                d="M1888.02,0.001l435.151,651.286l123.865,-82.759l-559.016,-568.527Z"
              />
              <path
                style={{ fill: wingColor }}
                d="M1729.27,1536.33l717.751,-967.807l-116.127,-76.162l-601.624,1043.97Z"
              />
            </g>
          </g>
        </g>
        <g id={"logoLeftSide"}>
          <path
            id="aCharacter"
            style={{ fill: aCharacterColor }}
            d="M1139.71,2111.26l0,-1898.46l-677.779,722.775l339.271,575l-83.425,-450.404l319.154,-0l102.779,1051.09Zm-152.779,-1485.9l27.779,255.554l-261.112,0l233.333,-255.554Z"
          />
          <g id="leftWing">
            <g id="leftBottomWing">
              <path
                style={{ fill: wingColor }}
                d="M581.241,1786.86l-435.15,-651.286l-123.866,82.76l559.016,568.526Z"
              />
              <path
                style={{ fill: wingColor }}
                d="M801.187,299.069l-778.952,919.266l110.948,83.527l668.004,-1002.79Z"
              />
            </g>
            <g id="leftTopWing">
              <g>
                <path
                  style={{ fill: wingColor }}
                  d="M559.016,0.001l-435.15,651.286l-123.866,-82.759l559.016,-568.527Z"
                />
              </g>
              <g>
                <path
                  style={{ fill: wingColor }}
                  d="M717.747,1536.33l-717.752,-967.807l116.128,-76.162l601.624,1043.97Z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
