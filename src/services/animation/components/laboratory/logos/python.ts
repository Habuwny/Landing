import gsap from "gsap";
export const pythonLogoAnime = () => {
  let tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 7 });

  tl.fromTo(
    "#pythonLogoBottomEye, #pythonLogoTopEye",
    { scaleY: 1, transformOrigin: "center" },
    {
      duration: 1,
      scaleY: 0,
      transformOrigin: "center",
    }
  );
};
