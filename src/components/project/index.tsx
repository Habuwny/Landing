import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Logo } from "../controllers/Logo";
import { Bottom } from "../portfolio/Bottom";
import { GoTo } from "../../assets/icons/goTo";
import { ProjectDetails } from "./ProjectDetails";

export const ProjectComponents = () => {
  const location = useLocation();
  const { project_data }: any = location.state;
  return (
    <div className={"pt-40"}>
      <div className={"w-full flex  justify-center mb-4 "}>
        <div
          className={
            "w-full text-center flex justify-center items-center space-x-6 mt-16"
          }
        >
          <span className={"text-xl text-gray-300"}>
            <h1 className={"text-6xl text-white w-4/5"}>
              {project_data.name.split(".")[0]}
            </h1>
          </span>

          <div className={"h-16 w-16 text-center "}>
            <Logo />
          </div>
        </div>
      </div>
      <Header data={project_data} />
      <ProjectDetails data={project_data} />
      <Bottom />
    </div>
  );
};
