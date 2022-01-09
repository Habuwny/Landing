import gsap from "gsap";
import { Bounce } from "gsap/gsap-core";
export const cssHtmlLogoAnime = () => {
  let tl = gsap.timeline({});

  tl.add("start")
    .fromTo(
      ".html-cssBackRight",
      { scaleY: 0.4, transformOrigin: "center" },
      {
        duration: 5,
        repeat: -1,
        yoyo: true,
        repeatDelay: 4,
        scaleY: 1,
        ease: Bounce.easeOut,
        transformOrigin: "center",
      }
    )
    .fromTo(
      ".html-cssBackLeft",
      { scaleY: 0.4, transformOrigin: "center" },
      {
        duration: 5,
        repeat: -1,
        yoyo: true,
        repeatDelay: 4,
        scale: 1,
        ease: Bounce.easeOut,
        transformOrigin: "center",
      },
      "start"
    );

  return tl;
};
