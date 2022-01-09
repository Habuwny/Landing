import { Button } from "../common/btn";
import { MouseEventHandler } from "react";

interface LaboratoryBTNProps {
  name?: string;
  onMouseOver?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onClick?: MouseEventHandler;
}
export const LaboratoryBTN = ({
  name,
  onMouseLeave,
  onMouseOver,
  onClick,
}: LaboratoryBTNProps) => {
  return (
    <Button
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      classes={`customBTN`}
      padding={"10px 15px"}
      border={"none"}
      color={"#833a94"}
      radius={"5px"}
      width={"100%"}
      children={name}
    />
  );
};
