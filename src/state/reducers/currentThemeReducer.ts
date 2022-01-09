import { Action } from "../actions";
import { ActionType } from "../action-types";
import { Types } from "../types";

interface CurrentThemeState {
  currentTheme: Types;
}

const initialState: CurrentThemeState = { currentTheme: "default" };

const reducer = (
  state: CurrentThemeState = initialState,
  action: Action
): CurrentThemeState => {
  switch (action.type) {
    case ActionType.CURRENT_THEME:
      return { currentTheme: action.payload.currentTheme };
    default:
      return state;
  }
};
export default reducer;
