import { useEffect, useState } from "react";
import gsap from "gsap";
import { navsMenuSetts } from "../../helpers";
import { useActions, useTypedSelector } from "../../hooks";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { navsMenuHide } from "../../services/animation/components/controllers/navs-menu-hide";
import { endTl } from "../../helpers/animations/endTL";

export const Menu = () => {
  const { menuState } = useActions();

  const theme = useTypedSelector((state) => state.theme.currentTheme);
  const menuVisibility = useTypedSelector((state) => state.show.visibility);

  const [topColor, setTopColor] = useState<string>("#001c3c");
  const [bottomColor, setBottomColor] = useState<string>("#00142b");

  const tls = useTypedSelector((state: any) => state.tls);
  const [id, setId] = useState<string>();

  const resetMenuLinks = () => {
    let links = [
      ".navMenu__Links-link-half1",
      ".navMenu__Links-link-half2",
      ".navMenu__Links-link-text",
    ];
    gsap.set(links[0], {
      backgroundColor: topColor,
      height: "50%",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    });
    gsap.set(links[1], {
      backgroundColor: bottomColor,
      height: "50%",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    });
    gsap.set(links[2], { color: "#ddd" });
  };
  const onLinkClick = (e: any) => {
    if (menuVisibility === "visible") {
      menuState("hidden");
    } else if (menuVisibility === "hidden") {
      menuState("visible");
    }
    endTl(theme, tls);
    navsMenuHide();
    resetMenuLinks();
  };
  const onMouseOver = (e: any) => {
    const tags = e.target.parentElement.children;
    if (e.target.parentElement!?.classList[0] === id || tags.length !== 3)
      return;
    if (
      e.target.parentElement!?.classList[0] === "menu-links-over" &&
      tags.length === 3
    ) {
      resetMenuLinks();
      setId(e.target.parentElement!?.classList[0]);
      gsap.to(tags[0], {
        height: "100%",
        borderRadius: "15px",
      });
      gsap.to(tags[1], {
        height: "0",
      });
      gsap.to(tags[2], { color: "#fff" });
    }
  };
  const onMouseLeave = (e: any) => {
    const tags = e.target.parentElement.children;
    if (tags.length === 3) {
      gsap.to(tags[0], {
        height: "50%",
        backgroundColor: topColor,
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      });
      gsap.to(tags[1], {
        height: "50%",
        opacity: 1,
        backgroundColor: bottomColor,
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      });
      gsap.to(tags[2], { color: "#ddd" });
      setId("");
    }
  };

  useEffect(() => {
    navsMenuSetts();
    switch (theme) {
      case "day_full":
        setTopColor("#0049a4");
        setBottomColor("#3e94ff");
        return;
      case "day_resize":
        setTopColor("#0049a4");
        setBottomColor("#3e94ff");
        return;

      case "heart_full":
        setTopColor("#891249");
        setBottomColor("#d41c71");
        return;
      case "heart_resize":
        setTopColor("#891249");
        setBottomColor("#d41c71");
        return;

      case "night_full":
        setTopColor("#068d80");
        setBottomColor("#09cebb");
        return;
      case "night_resize":
        setTopColor("#068d80");
        setBottomColor("#09cebb");
        return;

      default:
        setTopColor("#833a94");
        setBottomColor("#9e6daf");
        return;
    }
  }, [theme]);
  return (
    <div className={"navMenu"}>
      <div className={"navMenu__Links"}>
        <div style={{ marginBottom: "100px" }}>
          <Logo />
        </div>
        <Link
          to={"/"}
          onClick={onLinkClick}
          className={"menu-links-over navMenu__Links-link navMenu__Links-1"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <div
            style={{ backgroundColor: topColor }}
            className={"navMenu__Links-link-half1"}
          >
            {""}
          </div>
          <div
            style={{ backgroundColor: bottomColor }}
            className={"navMenu__Links-link-half2"}
          >
            {""}
          </div>
          <div className={"navMenu__Links-link-text"}>About</div>
        </Link>
        <Link
          to={"/"}
          className={"menu-links-over navMenu__Links-link navMenu__Links-2"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <div
            style={{ backgroundColor: topColor }}
            className={"navMenu__Links-link-half1"}
          >
            {""}
          </div>
          <div
            style={{ backgroundColor: bottomColor }}
            className={"navMenu__Links-link-half2"}
          >
            {""}
          </div>
          <div className={"navMenu__Links-link-text"}>Portfolio</div>
        </Link>
        <Link
          to={"/laboratory"}
          className={"menu-links-over navMenu__Links-link navMenu__Links-3"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <div
            style={{ backgroundColor: topColor }}
            className={"navMenu__Links-link-half1"}
          >
            {""}
          </div>
          <div
            style={{ backgroundColor: bottomColor }}
            className={"navMenu__Links-link-half2"}
          >
            {""}
          </div>

          <div
            className={"navMenu__Links-link-text"}
            onClick={onLinkClick}
            style={{ textDecoration: "none" }}
          >
            Laboratory
          </div>
        </Link>
        <Link
          to={"/"}
          className={"menu-links-over navMenu__Links-link navMenu__Links-4"}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <div
            style={{ backgroundColor: topColor }}
            className={"navMenu__Links-link-half1"}
          >
            {""}
          </div>
          <div
            style={{ backgroundColor: bottomColor }}
            className={"navMenu__Links-link-half2"}
          >
            {""}
          </div>

          <div className={"navMenu__Links-link-text"}>Contact</div>
        </Link>
      </div>
    </div>
  );
};
