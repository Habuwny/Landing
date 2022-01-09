import gsap from "gsap";
import { themeColors } from "../../../infra/themes";
export const laboratoryCategorySetts = (theme: string) => {
  gsap.set(".customBTN", {
    backgroundColor: themeColors[theme].ui.primary,
    color: themeColors[theme].text.primary,
  });
  gsap.set(".laboratoryCategory__BtnList", {
    backgroundColor: themeColors[theme].ui.secondary,
  });
  gsap.set(".laboratoryCategory__BtnList-item", {
    backgroundColor: themeColors[theme].ui.primary,
  });
};
