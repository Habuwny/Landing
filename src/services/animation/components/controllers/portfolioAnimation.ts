import gsap from "gsap";
import { controllersFullSetts } from "../../../../helpers/components/home/controllers/controllers-full-setts";
import { circleToCurveAnime } from "./circToCurve";

export const portfolioAnimation = () => {
  controllersFullSetts();

  let master = gsap.timeline({});
  master.add(circleToCurveAnime());
  return master;
};
