import { useTypedSelector } from "../hooks";
import { laboratorySetts } from "../helpers/pages/laboratory/laboratory-setts";
import { useEffect } from "react";
import { LaboratoryComponents } from "../components/laboratory";

export const Laboratory = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme).split(
    "_"
  )[0];
  useEffect(() => {
    laboratorySetts(theme);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"page__laboratory"}>
      <LaboratoryComponents />
    </div>
  );
};
