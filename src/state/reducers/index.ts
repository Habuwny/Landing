import { combineReducers } from "redux";
import timeLineReducer from "./timelineReducer";
import currentThemeReducer from "./currentThemeReducer";
import menuState from "./menuIconReducer";
import currentCategory from "./categorTypeReducer";

const reducers = combineReducers({
  tls: timeLineReducer,
  theme: currentThemeReducer,
  show: menuState,
  category: currentCategory,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
