import gsap from "gsap";

export const rgbToArr = (tags: any[]) => {
  let arrays: any[] = [];
  tags.forEach((tag) => {
    let tag1RgbValues: any = [];

    let tag1Rgb = gsap
      .getProperty(tag, "backgroundColor")
      .toString()
      .split(",");
    tag1RgbValues.push(parseInt(tag1Rgb[0].slice(4).trim()));
    tag1RgbValues.push(parseInt(tag1Rgb[1].trim()));
    tag1RgbValues.push(parseInt(tag1Rgb[2].slice(0, -1).trim()));

    arrays.push(tag1RgbValues);
  });

  return arrays;
};
