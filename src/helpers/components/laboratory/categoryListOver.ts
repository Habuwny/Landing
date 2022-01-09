import gsap from "gsap";

type OverORLeave = "over" | "leave";
export const categoryList = (target: Element, overORLeave: OverORLeave) => {
  const listTarget = target.children[1];
  if (listTarget) {
    if (overORLeave === "over") {
      gsap
        .timeline()
        .to(listTarget, {
          duration: 0.2,
          scaleY: 1,
          transformOrigin: "top",
        })
        .to(listTarget.children, {
          duration: 0.1,
          scale: 1,
          transformOrigin: "center",
        });
    } else if (overORLeave === "leave") {
      gsap
        .timeline()
        .to(listTarget.children, {
          duration: 0.1,
          scale: 0,
          transformOrigin: "center",
        })
        .to(listTarget, {
          duration: 0.2,
          scaleY: 0,
          transformOrigin: "top",
        });
    }
  }
};
