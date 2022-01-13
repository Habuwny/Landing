import { Header } from "./Header";
import { Tools } from "./Tools";
import { Category } from "./Category";
import { Bottom } from "./Bottom";
import { Projects } from "./Projects";

export const PortfolioComponents = () => {
  return (
    <div className={"w-screen"}>
      <Header />
      <Tools />
      <div className={"w-full flex justify-center mt-8"}>
        <div className={"bg-blue-900 h-1 w-3/5"} />
      </div>
      <Category />
      <Bottom />
    </div>
  );
};
