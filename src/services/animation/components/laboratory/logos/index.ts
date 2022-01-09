import { cssHtmlLogoAnime } from "./html-css";
import { jsNodeJsNodeJsLogoAnime } from "./js-nodejs";

export const cellLogoAnime = (tool: string) => {
  if (tool === "Css-Scss" || tool === "Html") {
    cssHtmlLogoAnime();
  }
  if (tool === "Javascript") {
    jsNodeJsNodeJsLogoAnime();
  }
  if (tool === "NodeJs") {
    jsNodeJsNodeJsLogoAnime();
  }
};
