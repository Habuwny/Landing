import gsap from "gsap";
import { Back, Bounce } from "gsap/gsap-core";
export const mongoDBLogoLogoAnime = () => {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  tl.fromTo(
    "#MongoDBLeaf",
    { scaleY: 0, transformOrigin: "bottom center" },
    {
      duration: 3,
      scaleY: 1,
      transformOrigin: "bottom center",
      ease: Back.easeInOut,
    }
  )
    .to(
      "#LeafLeftSide",
      {
        duration: 3,
        rotate: -90,
        scale: 0,
        transformOrigin: "left bottom",
        ease: Bounce.easeOut,
      },
      "+=6"
    )
    .to(
      "#LeafRightSide",
      {
        duration: 3,
        rotate: 90,
        scale: 0,
        transformOrigin: "left bottom",
        ease: Bounce.easeOut,
      },
      "<"
    )
    .to("#LeafBone", { scale: 0, transformOrigin: "bottom center" });
};
