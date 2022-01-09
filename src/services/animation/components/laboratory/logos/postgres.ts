import gsap from "gsap";
import { Back } from "gsap/gsap-core";
export const postgresLogoAnime = () => {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 7, yoyo: true });

  tl.to("#PostgresLogo", {
    duration: 2,
    rotate: -20,
    transformOrigin: "top center",
    ease: Back.easeInOut.config(2),
  })
    .to("#PostgresLogo", {
      duration: 2,
      rotate: 20,
      transformOrigin: "top center",
      ease: Back.easeInOut.config(2),
    })
    .to("#PostgresLogo", {
      duration: 2,
      rotate: 0,
      transformOrigin: "top center",
      ease: Back.easeInOut.config(2),
    });
};
