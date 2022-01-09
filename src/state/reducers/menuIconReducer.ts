import { Action } from "../actions";
import { ActionType } from "../action-types";

interface menuVisibilityState {
  visibility: "visible" | "hidden";
}

const initialState: menuVisibilityState = { visibility: "hidden" };

const reducer = (
  state: menuVisibilityState = initialState,
  action: Action
): menuVisibilityState => {
  switch (action.type) {
    case ActionType.MENU_STATE:
      return { visibility: action.payload.visibility };
    default:
      return state;
  }
};
export default reducer;
