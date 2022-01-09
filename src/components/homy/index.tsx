import { Hello } from "./Hello";
import { Bio } from "./Bio";
import { Bottom } from "./bottom";
import { LandingShow } from "./show";

export const Landing = () => {
  return (
    <div className={"home__landing"}>
      <LandingShow />
      <div className={"home__landing__bio"}>
        <Hello />
        <Bio />
      </div>
      <Bottom />
    </div>
  );
};
