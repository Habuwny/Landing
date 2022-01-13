export const Tools = () => {
  const tools = [
    "Javascript",
    "Html",
    "Css",
    "Scss",
    "ReactJs",
    "Typescript",
    "VueJs",
    "Laravel",
    "NodeJs",
    "Redux",
    "Gsap",
    "github",
    "PhpStorm",
    "VSCode",
    "WebStorm",
  ];
  return (
    <div className={"mt-10"}>
      <div className={"text-white flex justify-center "}>
        <div
          className={"grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7  gap-4"}
        >
          {tools.map((e) => (
            <span className={"bg-gray-600 text-center p-2 text-2xl rounded-xl"}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
