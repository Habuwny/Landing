import * as React from "react";
import { useEffect } from "react";
import { laboratoryCellSetts } from "../../helpers";
import { useTypedSelector } from "../../hooks";
import { CellBottomLogo } from "../../helpers";
import { randomId } from "../../tools";

interface LaboratoryCellInterface {
  hed: string;
  body: string;
  list: string[];
  bottom: string;
  tape: string;
  ribbonClass?: string;
}
export const LaboratoryCell = ({
  hed,
  body,
  bottom,
  list,
  tape,
  ribbonClass,
}: LaboratoryCellInterface) => {
  const theme = useTypedSelector((state) => state.theme.currentTheme).split(
    "_"
  )[0];
  laboratoryCellSetts(theme);
  useEffect(() => {
    laboratoryCellSetts(theme);
  }); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"laboratoryCell"}>
      <div id={`ribbon__${tape}`} className={`ribbon`}>
        <span>{tape}</span>
      </div>
      <div className={`laboratoryCell__hed laboratoryCell__${hed}`}>
        <span>{hed}</span>
      </div>
      <div className={"laboratoryCell__body"}>
        <span className={"laboratoryCell__body-title"}>{body}</span>
        <div className={"laboratoryCell__body__tools"}>
          {list.map((tool) => {
            return (
              <span
                key={`laboratoryCell__body__tools-${randomId()}`}
                className={`laboratoryCell__body__tools-${tool} laboratoryCell__body__tool`}
              >
                {tool}
              </span>
            );
          })}
        </div>
      </div>
      <div className={`laboratoryCell__bottom laboratoryCell__${bottom}`}>
        <CellBottomLogo tool={bottom} />
        <span>{bottom}</span>
      </div>
    </div>
  );
};
