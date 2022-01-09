import { useTypedSelector } from "../../hooks";
import { useEffect } from "react";
import { laboratoryHeaderSetts } from "../../helpers";

export const LaboratoryHeader = () => {
  const theme = useTypedSelector((state) => state.theme.currentTheme).split(
    "_"
  )[0];
  useEffect(() => {
    laboratoryHeaderSetts(theme);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={"laboratoryHeader"}>
      <h2 className={"heading-primary"}>laboratory</h2>
      <p className={"laboratoryHeader__p paragraph-primary"}>
        The laboratory includes some coding in Front-end and Back-end, it also
        includes my favorites coding tools.{" "}
      </p>
    </div>
  );
};
