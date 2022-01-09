import { ActionType } from "../action-types";
import {
  CurrentThemeType,
  MenuStateType,
  Types,
  TimeLine,
  Category,
} from "../types";

export interface CreateTimeLineAction {
  type: ActionType.CREATE_TIMELINE;
  payload: TimeLine;
}
export interface CurrentThemeAction {
  type: ActionType.CURRENT_THEME;
  payload: CurrentThemeType;
}
export interface MenuStateAction {
  type: ActionType.MENU_STATE;
  payload: MenuStateType;
}
export interface CategoryStateAction {
  type: ActionType.Category_STATE;
  payload: Category;
}

export type Action =
  | CreateTimeLineAction
  | CurrentThemeAction
  | MenuStateAction
  | CategoryStateAction;
