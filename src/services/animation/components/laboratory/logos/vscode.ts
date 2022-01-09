import gsap from "gsap";

export const vscodeLogoAnime = () => {
  let tl = gsap.timeline({ repeatDelay: 7, repeat: -1, yoyo: true });
  tl.fromTo(
    "#VSCodeLogo",
    { scaleX: -1, transformOrigin: "center center", scaleY: 0.9 },
    { duration: 1, transformOrigin: "center center", scaleX: 1, scaleY: 1 }
  );
  return tl;
};
