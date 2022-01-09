import { dayColors } from "./day/colors";
import { nightColors } from "./night/colors";
import { heartColors } from "./heart/colors";
import { defaultColors } from "./default/colors";
import { commonColors } from "./common/colors";

export const themColor = (theme: string, common?: boolean): any => {
  let colors;
  if (common) {
    colors = commonColors;
  } else if (
    theme === "default_full" ||
    theme === "default_resize" ||
    theme === "default"
  ) {
    colors = defaultColors;
  } else if (theme === "day_full" || theme === "day_resize") {
    colors = dayColors;
  } else if (theme === "night_full" || theme === "night_resize") {
    colors = nightColors;
  } else if (theme === "heart_full" || theme === "heart_resize") {
    colors = heartColors;
  } else colors = defaultColors;

  return colors;
};
