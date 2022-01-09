import gsap from "gsap";
import { Bounce } from "gsap/gsap-core";
export const otherLogoAnime = () => {
  //
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 7, yoyo: true });

  tl.fromTo(
    "#otherLogoRight",
    { scaleY: 0.5, transformOrigin: "right center" },
    {
      duration: 3,
      scaleY: 1,
      transformOrigin: "right center",
      ease: Bounce.easeInOut,
    }
  ).fromTo(
    "#otherLogoLeft",
    { scaleY: 0.5, transformOrigin: "left center" },
    {
      duration: 3,
      scaleY: 1,
      transformOrigin: "left center",
      ease: Bounce.easeInOut,
    },
    "<"
  );
};
