import gsap from "gsap";
import { Elastic } from "gsap/gsap-core";
export const jetBrainsLogoAnime = () => {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 5, yoyo: true });

  tl.fromTo(
    "#JetBrainsLogoRightSide",
    { rotate: 5, transformOrigin: "center center", scale: 0.95 },
    {
      duration: 1,
      rotate: 0,
      scale: 1,
      ease: Elastic.easeOut,
      transformOrigin: "center center",
    }
  ).fromTo(
    "#JetBrainsLogoLeftSide",
    { rotate: -5, transformOrigin: "center center", scale: 0.95 },
    {
      duration: 1,
      rotate: 0,
      scale: 1,
      ease: Elastic.easeOut,
      transformOrigin: "center center",
    },
    "<"
  );
  // .fromTo(
  //   "#JetBrainsLogoName",
  //   { scale: 0, transformOrigin: "center center" },
  //   { duration: 3, scale: 1, transformOrigin: "center center" }
  // );
};
