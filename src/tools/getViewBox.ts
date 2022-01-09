export const getViewBox = (el: string) => {
  const element = document.querySelector(el) as SVGSVGElement;
  const { height, width } = element.viewBox.animVal;
  return { height, width };
};
