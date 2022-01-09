export const getSVgWH = (
  id: string,
  t: 'w' | 'h' | 'x' | 'y' | 'r' | 'l' | 'b' | 'a'
) => {
  const heartWhiteRedBucket = document.querySelector(id) as SVGSVGElement;
  const { width, height, x, y } =
    heartWhiteRedBucket.getBBox();
  if (t === 'w') return width;
  else if (t === 'h') return height;
  else if (t === 'x') return x;
  else if (t === 'y') return y;
  else return 0;
};

