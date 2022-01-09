import { gsap } from "gsap";
import { Back, Bounce } from "gsap/gsap-core";
export const listClicked = (e: any) => {
  const el = document.querySelector(".listing-svg")!;
  if (el.classList.contains("list-show")) {
    el.classList.remove("list-show");
    el.classList.add("list-hide");
    gsap.to(".ListMenu", {
      y: "-100vh",
      duration: 1,
      ease: Bounce.easeIn,
    });
  } else {
    gsap.to(".ListMenu", {
      y: "100vh",
      duration: 1,
      ease: Bounce.easeOut,
    });

    el.classList.remove("list-hide");
    el.classList.add("list-show");
  }
};

export const List = () => {
  return (
    <div>
      <svg
        onClick={listClicked}
        width="60"
        height="60"
        className={"cursor-pointer listing-svg"}
        // style="enable-background:new 0 0 32 32;"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          // fill={"#fff"}
          id={"listing-path"}
          d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
        />
      </svg>
    </div>
  );
};
