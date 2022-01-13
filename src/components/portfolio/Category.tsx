import { useState } from "react";
import { Projects } from "./Projects";
export const Category = () => {
  const [show, setShow] = useState<
    "ReactJs" | "NodeJs" | "VueJs" | "Laravel" | "All"
  >("All");
  const tools = [
    ["All", "bg-gray-800"],
    ["ReactJs", "bg-blue-400"],
    ["VueJs", "bg-green-500"],
    ["Laravel", "bg-red-600"],
    ["NodeJs", "bg-green-700"],
  ];

  const onTypeClick = (e: any, tag: string) => {
    setShow(e.target.id);
    const elems = document.querySelectorAll(".projectType-btn");
    elems.forEach((e) =>
      e.classList.remove(
        "bg-blue-400",
        "bg-green-500",
        "bg-red-600",
        "bg-green-700",
        "bg-gray-800"
      )
    );
    if (e.target.classList.contains(tag)) {
      e.target.classList.remove(tag);
    } else e.target.classList.add(tag);
  };
  return (
    <div>
      <div
        className={
          "flex justify-center  space-y-16 items-center flex-col mt-10"
        }
      >
        <div
          className={
            "inline-grid grid-cols-4 place-content-center lg:grid-cols-5 gap-4"
          }
        >
          {tools.map((e, i) => (
            <div
              id={e[0]}
              onClick={(ev) => onTypeClick(ev, e[1])}
              className={`${e[0]} projectType-btn text-center bg-gray-${
                i === 0 ? 800 : 700
              } hover:${
                e[1]
              } ring-2 cursor-pointer py-4 tracking-wider px-8  text-white text-3xl rounded-xl`}
            >
              {e[0]}
            </div>
          ))}
        </div>
      </div>
      <Projects shows={show} />
    </div>
  );
};
