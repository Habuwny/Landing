import Avatar from "./../../assets/me.jpeg";
export const Header = () => {
  return (
    <div
      className={"flex justify-center items-center space-y-16 flex-col pt-44"}
    >
      <h1 className={"text-white text-9xl"}>Portfolio</h1>
      <div className={"flex justify-center items-center flex-col space-y-10"}>
        <img
          className={
            "rounded-full ring-4 ring-red-900 border-8 border-blue-900"
          }
          src={Avatar}
          alt={"me"}
          height={150}
          width={150}
        />

        <h1 className={"text-white text-6xl"}>Web Developer</h1>
      </div>
    </div>
  );
};
