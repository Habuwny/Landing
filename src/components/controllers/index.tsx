import { Logo } from "./Logo";
import { useEffect } from "react";
import { Sides } from "./sides";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useTypedSelector } from "../../hooks";
import { List } from "./List";
import { ListMenu } from "./ListMenu";

export const Controllers = () => {
  const tls = useTypedSelector((state) => state.tls);
  let loc = useLocation().pathname;

  useEffect(() => {
    if (loc === "/") {
      if (tls.portfolio_side?.tl.paused()) {
        gsap.set(".controllers_sides-parts", { scale: 1 });
        tls.portfolio_side?.tl.resume();
      }
    } else {
      tls.portfolio_side?.tl.pause();
      gsap.set(".controllers_sides-parts", { scale: 0.005 });
    }
  }, [useLocation().pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div>
        <Sides />
      </div>
      <div className={"logo"}>
        <Logo />
      </div>
      <div className={"absolute z-50  right-5 top-5"}>
        <List />
      </div>
      <div
        className={"z-40 ListMenu absolute bg-gray-900 w-screen h-screen "}
        style={{ top: "-100vh" }}
      >
        <ListMenu />
      </div>
    </div>
  );
};
