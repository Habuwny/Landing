import {
  MongoDBLogo,
  PythonLogo,
  ReactLogo,
  CSSLogo,
  HtmlLogo,
  JSLogo,
  NodeJsLogo,
  OthersLogo,
  PyCharmLogo,
  SQLLogo,
  WebStormLogo,
  GitHubLogo,
  PhpLogo,
  PostgresLogo,
} from "../../../assets";
import { VSCode } from "../../../assets/vscode-logo";

interface BottomLogo {
  tool: string;
}
export const CellBottomLogo = ({ tool }: BottomLogo) => {
  if (tool === "React") return <ReactLogo />;
  else if (tool === "Javascript") return <JSLogo />;
  else if (tool === "NodeJs") return <NodeJsLogo />;
  else if (tool === "Css-Scss") return <CSSLogo />;
  else if (tool === "Html") return <HtmlLogo />;
  else if (tool === "MongoDB") return <MongoDBLogo />;
  else if (tool === "Python") return <PythonLogo />;
  else if (tool === "Php") return <PhpLogo />;
  else if (tool === "Webstorm") return <WebStormLogo />;
  else if (tool === "PyCharm") return <PyCharmLogo />;
  else if (tool === "Github") return <GitHubLogo />;
  else if (tool === "SQL") return <SQLLogo />;
  else if (tool === "Postgres") return <PostgresLogo />;
  else if (tool === "VSCode") return <VSCode />;
  return <OthersLogo />;
};
