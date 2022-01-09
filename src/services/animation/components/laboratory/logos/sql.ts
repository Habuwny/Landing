import gsap from "gsap";
import { Bounce } from "gsap/gsap-core";
export const sqlLogoAnime = () => {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 5, yoyo: true });

  tl.fromTo(
    "#SQLLogoBottom",
    { rotate: -5, transformOrigin: "right bottom" },
    {
      duration: 1,
      rotate: 0,
      transformOrigin: "right bottom",
    }
  ).to("#SQLLogoMid, #SQLLogoTop", { y: "-=250", ease: Bounce.easeOut });

  return tl;
};
