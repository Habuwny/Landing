import gsap from "gsap/gsap-core";
import {
  DrawSVGPlugin,
  EasePack,
  MorphSVGPlugin,
  MotionPathHelper,
  MotionPathPlugin,
  Physics2DPlugin,
  PhysicsPropsPlugin,
} from "../../services/plugins";

export const gsapGeneralSetts = () => {
  gsap.registerPlugin(
    DrawSVGPlugin,
    PhysicsPropsPlugin,
    Physics2DPlugin,
    EasePack,
    MorphSVGPlugin,
    MotionPathPlugin,
    MotionPathHelper
  );
  gsap.config({
    nullTargetWarn: false,
  });
};
