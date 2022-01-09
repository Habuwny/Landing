export const RGBA = (rgb: string, a: number) => {
  let rgbColors = [];
  const colors = rgb.split(",");
  rgbColors.push(
    colors[0].split("(")[1].trim(),
    colors[1].trim(),
    colors[2].replace(")", "").trim()
  );
  return `rgba(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]},${a})`;
};
export const RGB = (rgba: string) => {
  let rgbColors = [];
  const colors = rgba.split(",");
  rgbColors.push(
    colors[0].split("(")[1].trim(),
    colors[1].trim(),
    colors[2].trim()
  );
  return `rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`;
};
