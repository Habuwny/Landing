import gsap from "gsap";
import { useEffect, useState } from "react";
import { Back } from "gsap/gsap-core";
import * as React from "react";
import { useTypedSelector } from "../../hooks";
import { navsMenuShow } from "../../services/animation/components/controllers/navs-menu-show";
import { navsMenuHide } from "../../services/animation/components/controllers/navs-menu-hide";

export const MenuIcon = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme);
  const iconState = useTypedSelector((state) => state.show.visibility);
  const [color, setColor] = useState<string>("#b219ab");

  const [current, setCurrent] = useState<string>("");
  const [tll, setTLL] = useState<gsap.core.Timeline>();

  const onMenuOver = () => {
    let tl = gsap.timeline({});
    tl.to("#MenuIcon", {
      duration: 0.5,
      scaleY: 0.6,
      transformOrigin: "center center",
      ease: Back.easeOut,
    }).to("#MenuIcon", {
      duration: 0.5,
      scaleY: 0.9,
      transformOrigin: "center center",
      ease: Back.easeOut,
    });
    return tl;
  };
  const onMenuLeave = () => {
    let tl = gsap.timeline({});
    tl.to("#MenuIcon", {
      duration: 0.5,
      scaleY: 1.3,
      transformOrigin: "center center",
      ease: Back.easeOut,
    }).to("#MenuIcon", {
      duration: 0.5,
      scaleY: 1,
      transformOrigin: "center center",
      ease: Back.easeOut,
    });
    return tl;
  };
  const toCancel = () => {
    let tl = gsap.timeline({});
    tl.to("#MenuIcon", { duration: 1, morphSVG: "#MenuDownCancel" });
    return tl;
  };
  const onMenuClick = () => {
    if (current === "menu" || current === "") {
      setCurrent("cancel");
      setTLL(toCancel());
      navsMenuShow();
    } else if (current === "cancel") {
      tll?.reverse(0);
      setCurrent("menu");
      navsMenuHide();
    }
  };
  useEffect(() => {
    if (iconState) {
      tll?.reverse(0);
      setCurrent("menu");
    }
    gsap.to("#MenuIcon", {
      duration: 1.5,
      scaleY: 1,
      transformOrigin: "center center",
      ease: Back.easeInOut.config(4),
    });
    if (theme === "day_full" || theme === "day_resize") {
      setColor("#0049a4");
    } else if (theme === "heart_full" || theme === "heart_resize") {
      setColor("#d41c71");
    } else if (theme === "night_full" || theme === "night_resize") {
      setColor("#09cebb");
    } else {
      setColor("#b219ab");
    }
  }, [theme, iconState]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <svg
      width="100%"
      id={"controllerSVG"}
      height="100%"
      viewBox="0 0 620 620"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      strokeLinejoin={"round"}
      strokeMiterlimit={"2"}
    >
      <g id={"MenuControl"}>
        <path
          id="MenuIcon"
          d="M559.659,411.932l0,34.091l-500,-0l0,-34.091l500,-0Zm-500,-113.637l500,0l0,34.091l-500,0l0,-34.091Zm0,-113.636l500,0l0,34.091l-500,0l0,-34.091Z"
          fill={color}
        />
        <path
          id="MenuDownCancel"
          d="M309.659,267.574l126.238,-126.239c11.632,-11.631 30.402,-11.721 42.104,-0.018c11.622,11.622 11.687,30.399 -0.018,42.104l-126.238,126.238l126.238,126.238c11.631,11.632 11.721,30.402 0.018,42.104c-11.621,11.622 -30.399,11.687 -42.104,-0.018l-126.238,-126.238l-126.238,126.238c-11.632,11.632 -30.401,11.721 -42.104,0.018c-11.622,-11.621 -11.686,-30.399 0.018,-42.104l126.239,-126.238l-126.239,-126.238c-11.631,-11.632 -11.721,-30.401 -0.018,-42.104c11.622,-11.622 30.399,-11.687 42.104,0.018l126.238,126.239Z"
          fill={"#fff"}
        />
        <path
          onMouseOver={onMenuOver}
          onMouseLeave={onMenuLeave}
          onClick={onMenuClick}
          fill={color}
          id={"MenuCircle"}
          d={
            "M 309.659, 309.659 m -309.659, 0 a 309.659, 309.659 0 1,0 619.318,0 a 309.659,309.659 0 1,0 -619.318,0"
          }
          opacity={0.005}
        />
      </g>
    </svg>
  );
};
