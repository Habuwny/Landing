import gsap from "gsap";

export const navsMenuSetts = () => {
  gsap.set(".navMenu", { y: "-=100vh", visibility: "hidden" });
  gsap.set(".navMenu__Links-link-half1", {
    x: "-=100vw",
    visibility: "hidden",
  });
  gsap.set(".navMenu__Links-link-half2", {
    x: "+=100vw",
    visibility: "hidden",
  });
  gsap.set(".navMenu__Links-link-text", {
    scale: 0.1,
    opacity: 0,
  });
};
