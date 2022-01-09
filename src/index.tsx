import ReactDOM from "react-dom";
import "./style/main.scss";
import { BrowserRouter } from "react-router-dom";

import { App } from "./containers/App";
import { Provider } from "react-redux";
import { store } from "./state";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
