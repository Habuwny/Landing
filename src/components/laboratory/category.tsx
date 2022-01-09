import { createRef, MutableRefObject, useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../hooks";
import { LaboratoryBTN } from "./laboratoryBTN";
import { CategoryBtnList } from "./categoryBtnList";
import { btnColorHover, laboratoryCategorySetts } from "../../helpers";
import { categoryList } from "../../helpers/components/laboratory/categoryListOver";

export const LaboratoryCategory = () => {
  const { currentCategory } = useActions();
  const [clickedTarget, setClickedTarget] = useState<Element>();
  const [fLunch, setFLunch] = useState<boolean>(true);

  const refs = {
    showAll: createRef() as MutableRefObject<HTMLInputElement>,
    frontEnd: createRef() as MutableRefObject<HTMLInputElement>,
    backEnd: createRef() as MutableRefObject<HTMLInputElement>,
    tools: createRef() as MutableRefObject<HTMLInputElement>,
    others: createRef() as MutableRefObject<HTMLInputElement>,
  };
  const theme = useTypedSelector((state) => state.theme.currentTheme).split(
    "_"
  )[0];

  useEffect(() => {
    laboratoryCategorySetts(theme);
    if (fLunch) {
      btnColorHover(refs.showAll.current, "over");
    }
  });
  const onClick = (e: any, target: Element) => {
    if (e.target.id.split("-")[0] === "cat") {
      const btnSub = e.target.id.split("-")[1].toLowerCase();
      const btnHead: any = target.id.split("-")[1];
      if (fLunch && target === refs.showAll.current) {
        return;
      }
      setFLunch(false);
      btnColorHover(target, "over");
      setClickedTarget(target);
      currentCategory(btnHead, btnSub);
      return;
    }
    const btnHead: any = target.id.split("-")[1];
    if (fLunch && target === refs.showAll.current) {
      return;
    }
    setFLunch(false);
    btnColorHover(target, "over");
    setClickedTarget(target);
    currentCategory(btnHead, "all");
  };
  const onMouseOver = (target: Element) => {
    if (fLunch && target === refs.showAll.current) return;
    btnColorHover(target, "over");
    categoryList(target, "over");
  };
  const onMouseLeave = (target: Element) => {
    if (fLunch && target === refs.showAll.current) return;

    if (target === clickedTarget) {
      return categoryList(target, "leave");
    }
    btnColorHover(target, "leave");
    categoryList(target, "leave");
  };

  return (
    <div className={"laboratoryCategory"}>
      <div
        id={"cat-showAll"}
        className={"laboratoryCategory__showAll"}
        ref={refs.showAll}
        onClick={(e) => onClick(e, refs.showAll.current)}
        onMouseOver={() => onMouseOver(refs.showAll.current)}
        onMouseLeave={() => onMouseLeave(refs.showAll.current)}
      >
        <LaboratoryBTN name={"show All"} />
      </div>
      <div
        id={"cat-frontEnd"}
        className={"laboratoryCategory__front-end"}
        ref={refs.frontEnd}
        onClick={(e) => onClick(e, refs.frontEnd.current)}
        onMouseOver={() => onMouseOver(refs.frontEnd.current)}
        onMouseLeave={() => onMouseLeave(refs.frontEnd.current)}
      >
        <LaboratoryBTN name={"Front-End"} />
        <CategoryBtnList list={["Javascript", "React", "Html", "Css-Scss"]} />
      </div>
      <div
        id={"cat-backEnd"}
        className={"laboratoryCategory__back-end"}
        ref={refs.backEnd}
        onClick={(e) => onClick(e, refs.backEnd.current)}
        onMouseOver={() => onMouseOver(refs.backEnd.current)}
        onMouseLeave={() => onMouseLeave(refs.backEnd.current)}
      >
        <LaboratoryBTN name={"Back-End"} />
        <CategoryBtnList
          list={["NodeJS", "Php", "Python", "MongoDB", "SQL", "Postgres"]}
        />
      </div>
      <div
        id={"cat-tools"}
        className={"laboratoryCategory__tools"}
        ref={refs.tools}
        onClick={(e) => onClick(e, refs.tools.current)}
        onMouseOver={() => onMouseOver(refs.tools.current)}
        onMouseLeave={() => onMouseLeave(refs.tools.current)}
      >
        <LaboratoryBTN name={"Tools"} />
        <CategoryBtnList list={["Github", "Webstorm", "VSCode", "PyCharm"]} />
      </div>
      <div
        id={"cat-others"}
        className={"laboratoryCategory__others"}
        ref={refs.others}
        onClick={(e) => onClick(e, refs.others.current)}
        onMouseOver={() => onMouseOver(refs.others.current)}
        onMouseLeave={() => onMouseLeave(refs.others.current)}
      >
        <LaboratoryBTN name={"Others"} />
      </div>
    </div>
  );
};
