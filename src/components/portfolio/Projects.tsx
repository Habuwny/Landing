import Landing from "../../assets/Landing.png";
import Landing1 from "../../assets/landing-project-1.png";
import Landing2 from "../../assets/landing-project-2.png";
import Landing3 from "../../assets/landing-project-3.png";
import ProjectLanding from "../../assets/projectLanding.png";
import Posty from "../../assets/posty.png";
import { GoTo } from "../../assets/icons/goTo";
import { Search } from "../../assets/icons/Search";
import { Link } from "react-router-dom";

interface showsTyp {
  shows: "ReactJs" | "NodeJs" | "VueJs" | "Laravel" | "All";
}
export const Projects = ({ shows }: showsTyp) => {
  const projects = (
    type: "ReactJs" | "NodeJs" | "VueJs" | "Laravel" | "All"
  ) => {
    const projectsList = {
      ReactJs: [
        <div
          className={
            "h-96 w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-1/3 bg-gray-900  rounded-xl"
          }
        >
          <div
            style={{ backgroundColor: "#454545" }}
            className={
              "font-bold  w-full h-1/5 flex justify-center items-center rounded-xl text-2xl text-gray-200"
            }
          >
            <a href={"/"} className={"font-extrabold"}>
              Habuwny.dev
            </a>
          </div>
          <div className={"h-3/5 relative"}>
            <img className={"h-full w-full"} src={Landing} />
            <div
              className={
                "flex items-center justify-center space-x-6 opacity-0 hover:opacity-90 absolute bg-black top-0 left-0 w-full h-full"
              }
            >
              <Link
                to={{
                  pathname: `/portfolio/habuwny.dev`,
                  state: {
                    project_data: {
                      name: "Habuwny.dev",
                      resources: { github: "" },
                      img: [Landing1, Landing2, Landing3],
                      tools: [
                        "reactjs",
                        "javascript",
                        "gsap",
                        "scss",
                        "tailwindcss",
                      ],
                    },
                  },
                }}
              >
                <Search />
              </Link>
              <Link to={"/"}>
                <div className={"bg-gray-700 rounded-xl px-2 py-2"}>
                  <GoTo height={"40"} width={"40"} />
                </div>
              </Link>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#121212" }}
            className={
              "text-xl  h-1/5 rounded-xl flex items-center justify-center space-x-2 font-bold tracking-normal text-white"
            }
          >
            <span className={"rounded-xl py-2 px-4 bg-blue-400"}>reactjs</span>
            <span className={"rounded-xl py-2 px-4 bg-yellow-900"}>
              javascript
            </span>
            <span className={"rounded-xl py-2 px-4 bg-green-600"}>gsap</span>
            <span className={"rounded-xl py-2 px-4 bg-red-400"}>scss</span>
            <span className={"rounded-xl py-2 px-4 bg-gray-900"}>
              tailwindcss
            </span>
          </div>
        </div>,
      ],
      Laravel: [
        <div
          id={"posty-project"}
          className={
            "h-96 w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-1/3 bg-gray-900  rounded-xl"
          }
        >
          <div
            style={{ backgroundColor: "#454545" }}
            className={
              "bg-gray-200 w-full h-1/5 flex justify-center items-center rounded-xl text-2xl text-gray-300"
            }
          >
            <a href={"/"}>Posty.dev</a>
          </div>
          <div className={"h-3/5 relative"}>
            <img className={"h-full w-full"} src={Posty} />
            <div
              className={
                "flex items-center justify-center space-x-6 opacity-0 hover:opacity-90 absolute bg-black top-0 left-0 w-full h-full"
              }
            >
              <Link to={"/"}>
                <Search />
              </Link>
              <Link to={"/"}>
                <div className={"bg-gray-700 rounded-xl px-2 py-2"}>
                  <GoTo height={"40"} width={"40"} />
                </div>
              </Link>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#121212" }}
            className={
              "text-xl h-1/5 rounded-xl flex items-center justify-center space-x-2 font-bold tracking-normal text-white"
            }
          >
            <span className={"rounded-xl py-2 px-4 bg-red-900"}>laravel</span>
            <span className={"rounded-xl py-2 px-4 bg-yellow-900"}>
              javascript
            </span>
            <span className={"rounded-xl py-2 px-4 bg-red-400"}>scss</span>
            <span className={"rounded-xl py-2 px-4 bg-gray-900"}>
              tailwindcss
            </span>
          </div>
        </div>,
      ],
      NodeJs: [],
      VueJs: [],
    };
    if (type === "All") {
      return [projectsList["ReactJs"], projectsList["Laravel"]];
    }
    return projectsList[type];
  };
  return (
    <div className={"flex justify-center mt-16"}>
      <div
        className={
          "w-11/12 flex flex-col items-center justify-center lg:flex-row lg:space-x-10"
        }
      >
        {projects(shows)}
      </div>
    </div>
  );
};
