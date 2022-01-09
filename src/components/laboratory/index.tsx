import { LaboratoryHeader } from "./header";
// import { LaboratoryCategory } from "./category-";
import { LaboratoryCells } from "./cells";
import { LaboratoryCategory } from "./category";

export const LaboratoryComponents = () => {
  return (
    <div className={"laboratoryComponents__container"}>
      <LaboratoryHeader />
      <LaboratoryCategory />
      <LaboratoryCells />
    </div>
  );
};
