import gsap from "gsap";
import { Power4 } from "gsap/gsap-core";
export const navsMenuHide = () => {
  let tl = gsap.timeline({});

  tl.to(".navMenu__Links-link-text", {
    scale: 0.1,
    opacity: 0,
  })
    .fromTo("#logoRightSide", { x: 0 }, { x: "+=100vw" })
    .fromTo("#logoLeftSide", { x: 0 }, { x: "-=100vw" }, "<")
    .to(
      ".navMenu__Links-link-half1",
      {
        duration: 1.2,
        x: "-=100vw",
        visibility: "visible",
        ease: Power4.easeIn,
      },
      "<"
    )
    .to(
      ".navMenu__Links-link-half2",
      {
        duration: 1.2,
        x: "+=100vw",
        visibility: "visible",
        ease: Power4.easeIn,
      },
      "<"
    )
    .to(".navMenu", {
      duration: 1,
      y: "-=100vh",
      ease: Power4.easeIn,
    })
    .to("#logoRightSide", { x: 0 })
    .to("#logoLeftSide", { x: 0 }, "<");

  // .to(".navMenu", {
  //   visibility: "hidden",
  // });

  return tl;
};
