import { Logo } from "../controllers/Logo";

export const Bottom = () => {
  return (
    <div className={"bg-gray-800 mt-16 py-5 text-white text-center space-y-3"}>
      <h1 className={"text-6xl"}>Hello🤚</h1>
      <p className={"text-3xl"}>
        if you want to get in touch{" "}
        <strong className={"underline font-bolder text-gray-600"}>
          Habuwny@gmail.com
        </strong>
      </p>
      <p className={"text-2xl "}>
        Or drop your message in{" "}
        <strong className={"font-bolder text-gray-600"}>Contact</strong> page.
      </p>
      <div
        className={
          "w-full text-center flex justify-center items-center space-x-6 mt-16"
        }
      >
        <div className={"h-16 w-16 text-center "}>
          <Logo />
        </div>
        <span className={"text-xl text-gray-300"}>
          made with reactjs 2020 &copy;
        </span>
      </div>
    </div>
  );
};
