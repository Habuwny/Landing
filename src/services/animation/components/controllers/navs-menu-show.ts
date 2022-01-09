import gsap from "gsap";
import { Bounce, Power4 } from "gsap/gsap-core";
export const navsMenuShow = () => {
  let tl = gsap.timeline({});

  tl.to(".navMenu", {
    duration: 1.5,
    y: 0,
    visibility: "visible",
    ease: Bounce.easeOut,
  })
    .fromTo("#logoRightSide", { x: "+=100vw" }, { x: 0 })
    .fromTo("#logoLeftSide", { x: "-=100vw" }, { x: 0 }, "<")
    .to(
      ".navMenu__Links-link-half1",
      {
        duration: 1.2,
        x: 0,
        visibility: "visible",
        ease: Power4.easeOut,
      },
      "<"
    )
    .to(
      ".navMenu__Links-link-half2",
      {
        duration: 1.2,
        x: 0,
        visibility: "visible",
        ease: Power4.easeOut,
      },
      "<"
    )
    .to(
      ".navMenu__Links-link-text",
      {
        scale: 1,
        opacity: 1,
      },
      "-=0.5"
    );
  return tl;
};
