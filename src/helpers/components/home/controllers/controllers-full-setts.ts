import gsap from "gsap";

export const controllersFullSetts = () => {
  gsap.set("#leftDotToStickCurve", {
    visibility: "hidden",
  });
  gsap.set("#controllerSVG", { visibility: "visible" });

  gsap.set("#leftDotToStickCircleBack", {
    visibility: "hidden",
  });

  gsap.set("#Portfolio", {
    visibility: "hidden",
  });

  gsap.set("#MenuDown", {
    visibility: "hidden",
  });

  gsap.set("#MenuDownCancel", {
    visibility: "hidden",
  });

  gsap.set("#Menu", {
    scaleY: 0.1,
    transformOrigin: "center center",
  });
};
