import { gsap } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import { listClicked } from "./List";

export const ListMenu = () => {
  gsap.to(".menu-link-top", { duration: 0.5, x: "100vw" });
  gsap.to(".menu-link-bottom", { duration: 0.5, x: "-100vw" });
  const onLeave = (e: any, classes: any) => {
    // menu-landing-link
    gsap.to(classes[0], {
      duration: 0.5,
      x: "100vw",
      rotation: 90,
      scale: 0,
    });
    gsap.to(classes[1], {
      duration: 0.5,
      rotation: 90,
      x: "-100vw",
      scale: 0,
    });
  };
  const onLikClick = (e: any) => {
    listClicked(e);
  };
  const onOver = (e: any, classes: any) => {
    // menu-landing-link
    gsap.fromTo(
      classes[0],
      { duration: 0.5, x: "100%", rotation: 90, scale: 0 },
      { duration: 0.5, x: "0%", rotate: 0, scale: 1 }
    );
    gsap.fromTo(
      classes[1],
      { duration: 0.5, x: "-100%", rotation: 90, scale: 0 },
      { duration: 0.5, x: "0%", rotation: 0, scale: 1 }
    );
  };
  return (
    <div
      className={
        "text-6xl space-y-10 flex justify-center items-center flex-col h-full"
      }
    >
      <Link
        to={"/"}
        onClick={onLikClick}
        className={
          "overflow-hidden relative flex justify-center items-center cursor-pointer h-32 bg-gray-600  w-6/12 text-center rounded-xl"
        }
      >
        <span
          className={
            "menu-landing-link-top menu-link-top absolute rounded-t-xl w-full left-0 top-0 z-40 translate-x-full bg-gray-700  h-2/4 "
          }
        ></span>
        <span
          onMouseOver={(e) =>
            onOver(e, [".menu-landing-link-top", ".menu-landing-link-bottom"])
          }
          onMouseLeave={(e) =>
            onLeave(e, [".menu-landing-link-top", ".menu-landing-link-bottom"])
          }
          className={
            "menu-landing-link text-white absolute w-full top-0 z-50 flex justify-center items-center h-full "
          }
        >
          Landing
        </span>

        <span
          className={
            "rounded-b-xl menu-landing-link-bottom menu-link-bottom absolute w-full bottom-0 z-40  bg-gray-800  h-2/4 "
          }
        ></span>
      </Link>
      <Link
        to={"/portfolio"}
        onClick={onLikClick}
        className={
          "overflow-hidden relative flex justify-center items-center cursor-pointer h-32 bg-gray-600  w-6/12 text-center rounded-xl"
        }
      >
        <span
          className={
            "menu-portfolio-link-top menu-link-top absolute rounded-t-xl w-full left-0 top-0 z-40 translate-x-full bg-gray-700  h-2/4 "
          }
        ></span>
        <span
          onMouseOver={(e) =>
            onOver(e, [
              ".menu-portfolio-link-top",
              ".menu-portfolio-link-bottom",
            ])
          }
          onMouseLeave={(e) =>
            onLeave(e, [
              ".menu-portfolio-link-top",
              ".menu-portfolio-link-bottom",
            ])
          }
          className={
            "menu-portfolio-link text-white absolute w-full top-0 z-50 flex justify-center items-center h-full "
          }
        >
          Portfolio
        </span>

        <span
          className={
            "rounded-b-xl menu-portfolio-link-bottom menu-link-bottom absolute w-full bottom-0 z-40  bg-gray-800  h-2/4 "
          }
        ></span>
      </Link>

      <Link
        to={"/laboratory"}
        onClick={onLikClick}
        className={
          "overflow-hidden relative flex justify-center items-center cursor-pointer h-32 bg-gray-600  w-6/12 text-center rounded-xl"
        }
      >
        <span
          className={
            "menu-Laboratory-link-top menu-link-top absolute rounded-t-xl w-full left-0 top-0 z-40 translate-x-full bg-gray-700  h-2/4 "
          }
        ></span>
        <span
          onMouseOver={(e) =>
            onOver(e, [
              ".menu-Laboratory-link-top",
              ".menu-Laboratory-link-bottom",
            ])
          }
          onMouseLeave={(e) =>
            onLeave(e, [
              ".menu-Laboratory-link-top",
              ".menu-Laboratory-link-bottom",
            ])
          }
          className={
            "menu-Laboratory-link text-white absolute w-full top-0 z-50 flex justify-center items-center h-full "
          }
        >
          Code Laboratory
        </span>

        <span
          className={
            "rounded-b-xl menu-Laboratory-link-bottom menu-link-bottom absolute w-full bottom-0 z-40  bg-gray-800  h-2/4 "
          }
        ></span>
      </Link>

      <div
        className={
          "overflow-hidden relative flex justify-center items-center cursor-pointer h-32 bg-gray-600  w-6/12 text-center rounded-xl"
        }
      >
        <span
          className={
            "menu-Contact-link-top menu-link-top absolute rounded-t-xl w-full left-0 top-0 z-40 translate-x-full bg-gray-700  h-2/4 "
          }
        ></span>
        <span
          onMouseOver={(e) =>
            onOver(e, [".menu-Contact-link-top", ".menu-Contact-link-bottom"])
          }
          onMouseLeave={(e) =>
            onLeave(e, [".menu-Contact-link-top", ".menu-Contact-link-bottom"])
          }
          className={
            "menu-Contact-link text-white absolute w-full top-0 z-50 flex justify-center items-center h-full "
          }
        >
          Contact
        </span>

        <span
          className={
            "rounded-b-xl menu-Contact-link-bottom menu-link-bottom absolute w-full bottom-0 z-40  bg-gray-800  h-2/4 "
          }
        ></span>
      </div>
    </div>
  );
};
