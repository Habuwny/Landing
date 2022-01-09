import { ActionType } from "../action-types";
import { Action } from "../actions";
import { TimeLine } from "../types";

interface TimeLineState {
  [key: string]: TimeLine;
}

const initialState: TimeLineState = {};

const reducer = (
  state: TimeLineState = initialState,
  action: Action
): TimeLineState => {
  switch (action.type) {
    case ActionType.CREATE_TIMELINE:
      // const {tl, id, theme} = action.payload
      const TL: TimeLine = {
        tl: action.payload.tl,
        theme: action.payload.theme,
      };
      return { ...state, [TL.theme]: TL };
    default:
      return state;
  }
};

export default reducer;
