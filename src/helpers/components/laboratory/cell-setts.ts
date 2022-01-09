import gsap from "gsap";
import { themeColors } from "../../../infra/themes";
import { select } from "../../../tools";
export const laboratoryCellSetts = (theme: string) => {
  if (select(".laboratoryCell__bottom")) {
    gsap.set(".laboratoryCell__bottom, .laboratoryCell__body__tool", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.others,
    });
    gsap.set(".laboratoryCell__body", {
      backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.body,
    });
    gsap.set(".laboratoryCell__Front-End", {
      // backgroundColor: themeColors.common.ui.laboratory.cell.frontEnd.head,
      backgroundColor: themeColors[theme].ui.laboratory.cell.frontEnd.head,
    });
    gsap.set(".laboratoryCell__MongoDB, .laboratoryCell__body__tools-mongoDB", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.mongoDB,
    });
    gsap.set(".laboratoryCell__VSCode, .laboratoryCell__body__tools-vscode", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.vsCode,
    });

    gsap.set(".laboratoryCell__Back-End", {
      // backgroundColor: themeColors.common.ui.laboratory.cell.backEnd.head,
      backgroundColor: themeColors[theme].ui.laboratory.cell.backEnd.head,
      color: "#EDEDED",
    });

    gsap.set(".laboratoryCell__Tools", {
      backgroundColor: themeColors.common.ui.laboratory.cell.tools.head,
      color: "#EDEDED",
    });
    gsap.set(".laboratoryCell__Others", {
      backgroundColor: themeColors.common.ui.laboratory.cell.others.head,
    });
    gsap.set(".laboratoryCell__React, .laboratoryCell__body__tools-react", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.react,
    });
    gsap.set(" .laboratoryCell__body__tools-typescript", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.typescript,
    });
    gsap.set(" .laboratoryCell__body__tools-sql", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.typescript,
    });
    gsap.set(" .laboratoryCell__body__tools-postgres", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.postgres,
    });

    gsap.set(
      ".laboratoryCell__Webstorm, .laboratoryCell__body__tools-webstorm",
      {
        backgroundColor: themeColors.common.ui.laboratory.cell.common.webstorm,
      }
    );
    gsap.set(".laboratoryCell__body__tools-redux", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.redux,
    });

    gsap.set(
      ".laboratoryCell__Javascript, .laboratoryCell__body__tools-javascript",
      {
        backgroundColor: themeColors.common.ui.laboratory.cell.common.js,
      }
    );
    gsap.set(".laboratoryCell__body__tools-commandline", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.commandline,
    });

    gsap.set(".laboratoryCell__Css-Scss, .laboratoryCell__body__tools-scss", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.scss,
    });
    gsap.set(".laboratoryCell__Github, .laboratoryCell__body__tools-github", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.github,
    });

    gsap.set(".laboratoryCell__Css-Scss, .laboratoryCell__body__tools-css", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.css,
    });

    gsap.set(".laboratoryCell__Html, .laboratoryCell__body__tools-html", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.html,
    });
    gsap.set(".laboratoryCell__Webpack, .laboratoryCell__body__tools-webpack", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.webpack,
    });
    gsap.set(".laboratoryCell__NodeJs, .laboratoryCell__body__tools-nodeJS", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.nodeJS,
    });
    gsap.set(".laboratoryCell__Php, .laboratoryCell__body__tools-php", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.php,
    });
    gsap.set(".laboratoryCell__Python, .laboratoryCell__body__tools-python", {
      backgroundColor: themeColors.common.ui.laboratory.cell.common.python,
    });
  }
};
