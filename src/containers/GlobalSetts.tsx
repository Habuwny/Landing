import React from "react";
import { gsapGeneralSetts } from "../helpers/global-setts/gsap";
interface GlobalSettsInterface {
  children: any;
}
export const GlobalSetts = ({ children }: GlobalSettsInterface) => {
  gsapGeneralSetts();
  return <div className={"app"}>{children}</div>;
};
