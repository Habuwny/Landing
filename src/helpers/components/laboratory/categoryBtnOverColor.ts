import gsap from "gsap";
import { RGB, RGBA } from "../../../tools/rgbToRgba";
type OverORLeave = "over" | "leave";
export const btnColorHover = (target: Element, overLeave: OverORLeave) => {
  if (overLeave === "over") {
    const btnTarget = target.children[0];
    const rgb = gsap.getProperty(btnTarget, "backgroundColor") as string;
    const rgba = RGBA(rgb, 0.6);
    gsap.to(btnTarget, { backgroundColor: rgba });
  } else if (overLeave === "leave") {
    const btnTarget = target.children[0];
    const rgb = gsap.getProperty(btnTarget, "backgroundColor") as string;
    const rgba = RGB(rgb);
    gsap.to(btnTarget, { backgroundColor: rgba });
  }
};
