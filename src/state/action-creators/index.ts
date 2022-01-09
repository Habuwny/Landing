import { ActionType } from "../action-types";
import { CategoryHead, CategorySub, Types } from "../types";

type Visibility = "visible" | "hidden";
export const createTimeLine = (tl: any, theme: Types) => {
  return {
    type: ActionType.CREATE_TIMELINE,
    payload: {
      tl,
      theme,
    },
  };
};
export const currentTheme = (currentTheme: Types) => {
  return {
    type: ActionType.CURRENT_THEME,
    payload: {
      currentTheme,
    },
  };
};
export const menuState = (visibility: Visibility) => {
  return {
    type: ActionType.MENU_STATE,
    payload: {
      visibility,
    },
  };
};
export const currentCategory = (head: CategoryHead, sub: CategorySub) => {
  return {
    type: ActionType.Category_STATE,
    payload: {
      head,
      sub,
    },
  };
};
