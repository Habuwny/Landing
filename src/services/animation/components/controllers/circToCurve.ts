import gsap from 'gsap';


export const circleToCurveAnime = () => {
  let tl = gsap.timeline({ repeat: -1 });

  tl.set('#leftDotToStickCircle', { visibility: 'visible' })
    .set('#leftDotToStickCurveBack', { visibility: 'hidden' })
    .to('#leftDotToStickCircle', {
      duration: 4,
      morphSVG: '#leftDotToStickCurve',
    })
    .set('#leftDotToStickCircle', { visibility: 'hidden' })
    .set('#leftDotToStickCurveBack', { visibility: 'visible' })
    .to('#leftDotToStickCurveBack', {
      duration: 4,
      morphSVG: '#leftDotToStickCircleBack',
    });

  return tl;
};
