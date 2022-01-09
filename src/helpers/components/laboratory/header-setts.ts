import gsap from "gsap";
import { themeColors } from "../../../infra/themes";

export const laboratoryHeaderSetts = (theme: any) => {
  gsap.set(".heading-primary", { color: themeColors.common.text.quintuple });
  gsap.set(".laboratoryHeader__p", { color: themeColors.common.text.tertiary });
  // gsap.set(".laboratoryHeader__p", { color: themeColors[theme] });
};
