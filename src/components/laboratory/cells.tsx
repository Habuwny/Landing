import { LaboratoryCell } from "./cell";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks";
import { locCellsData } from "../../helpers/components/laboratory";
import { randomId } from "../../tools";

export const LaboratoryCells = () => {
  const currCategory = useTypedSelector((state) => state.category);
  const [currCells, setCurrCells] = useState<any>(locCellsData);

  useEffect(() => {
    const cells = locCellsData.filter((cell) => {
      if (currCategory.head === "showAll") return locCellsData;
      else if (currCategory.sub === "all") {
        return cell.type === currCategory.head;
      }
      return cell.type === currCategory.head && cell.sub === currCategory.sub;
    });
    setCurrCells(cells);
  }, [currCategory]);
  return (
    <div className={"laboratoryCells"}>
      {currCells.map((cell: any) => {
        return (
          <div
            className={"laboratoryCell__container"}
            key={`cell-${cell.hed}-${cell.bottom}-${randomId()}`}
          >
            <LaboratoryCell
              hed={cell.hed}
              body={cell.body}
              bottom={cell.bottom}
              list={cell.list}
              tape={cell.tape}
            />
          </div>
        );
      })}
    </div>
  );
};
