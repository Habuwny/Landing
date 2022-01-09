import { CategoryHead } from "../state/types";

export const headName = (className: any): CategoryHead => {
  const i = className.indexOf("-");
  let str: CategoryHead;
  str = className.slice(i + 1);
  return str;
};
