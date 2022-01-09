import gsap from "gsap";
import { themeColors } from "../../../infra/themes";
export const laboratorySetts = (theme: string) => {
  gsap.set(".page__laboratory", {
    backgroundColor: themeColors.common.bg.primary,
  });
};
