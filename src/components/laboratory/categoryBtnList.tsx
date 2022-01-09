import { randomId } from "../../tools";
import gsap from "gsap";
import { RGB, RGBA } from "../../tools/rgbToRgba";
import { MouseEventHandler } from "react";

interface ListProps {
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  onSpanClick?: MouseEventHandler;
  list: string[];
}

export const CategoryBtnList = ({
  onMouseOver,
  onMouseLeave,
  onSpanClick,
  list,
}: ListProps) => {
  const onSpanOver = (e: any) => {
    const btnRGB = gsap.getProperty(e.target, "backgroundColor") as string;
    const btnColor = gsap.getProperty(e.target, "color") as string;
    const backgroundColor = RGBA(btnRGB, 0.6);
    const color = RGBA(btnColor, 0.8);
    gsap.set(e.target, { backgroundColor, color });
  };
  const onSpanLeave = (e: any) => {
    const btnRGB = gsap.getProperty(e.target, "backgroundColor") as string;
    const btnColor = gsap.getProperty(e.target, "color") as string;
    const backgroundColor = RGB(btnRGB);
    const color = RGB(btnColor);
    gsap.set(e.target, { backgroundColor, color });
  };
  return (
    <div
      key={randomId()}
      className={"laboratoryCategory__BtnList"}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      {list.map((item) => {
        return (
          <span
            id={`cat-${item}`}
            onMouseOver={onSpanOver}
            onMouseLeave={onSpanLeave}
            onClick={onSpanClick}
            key={`laboratoryCategory__BtnList-${item}`}
            className={`laboratoryCategory__BtnList-${item} laboratoryCategory__BtnList-item`}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};
