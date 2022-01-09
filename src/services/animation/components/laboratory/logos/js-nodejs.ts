import gsap from "gsap";

export const jsNodeJsNodeJsLogoAnime = () => {
  let tl = gsap.timeline({});

  tl.add("start")
    .fromTo(
      ".JsNodeJsLogoJMask",
      {
        drawSVG: "0%",
      },
      {
        duration: 3,
        drawSVG: "100%",
        repeat: -1,
        yoyo: true,
        repeatDelay: 5,
        immediateRender: true,
      }
    )
    .fromTo(
      ".JsNodeJsLogoSMask",
      {
        drawSVG: "0%",
      },
      {
        duration: 3,
        drawSVG: "100%",
        yoyo: true,
        repeat: -1,
        repeatDelay: 5,
        immediateRender: true,
      },
      "start"
    );
  return tl;
};
