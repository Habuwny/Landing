import { Link } from "react-router-dom";
import { GoTo } from "../../assets/icons/goTo";
import { Details } from "../../assets/icons/details";
import { Tools } from "../../assets/icons/tools";
import { Tool } from "../../assets/icons/tool";
import { Resources } from "../../assets/icons/resources";

interface ProjectDetailsProps {
  data: any;
}
export const ProjectDetails = ({ data }: ProjectDetailsProps) => {
  return (
    <div className={"w-full  flex justify-center mt-16 "}>
      <div className={" w-4/5 bg-gray-900 p-4 rounded-xl "}>
        <h1
          className={
            "flex items-center space-x-4 font-extrabold text-5xl text-white"
          }
        >
          <Details />
          <span>Project Technical Details</span>
        </h1>
        <div>
          <Link
            to={"/"}
            className={
              "mt-12 flex bg-green-700 hover:bg-green-800 w-72 py-5 text-center rounded-xl px-2 space-x-4  items-center"
            }
          >
            <div className={" "}>
              <div className={"rounded-xl"}>
                <GoTo height={"25"} width={"25"} />
              </div>
            </div>
            <span className={"text-white text-2xl font-bold"}>
              VISIT WEBSITE
            </span>
          </Link>
        </div>
        <h1
          className={
            "mt-6 flex items-center space-x-4 font-extrabold font-extrabold  text-4xl text-white"
          }
        >
          <Tools />
          <span> Tools Used</span>
        </h1>
        <ul className={"mt-4 pl-8"}>
          {data.tools.map((e: any) => {
            return (
              <h1
                className={
                  "flex items-center space-x-4 font-extrabold font-extrabold"
                }
              >
                <Tool />
                <li className={"tracking-wider text-gray-400 text-3xl"}>{e}</li>
              </h1>
            );
          })}
        </ul>

        <h1
          className={
            "mt-6 flex items-center space-x-4 font-extrabold font-extrabold  text-4xl text-white"
          }
        >
          <Resources />
          <span> Resources</span>
        </h1>
      </div>
    </div>
  );
};
