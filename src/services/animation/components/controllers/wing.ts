import gsap from 'gsap';
import { Sine } from 'gsap/gsap-core';

export const wing = () => {
  let tl = gsap.timeline({});

  tl
    .add('shake')
    .fromTo(
      '#rightTopWing',
      { x: '-=70', y: '+=70' },
      {
        duration: 3,
        x: 0,
        y: 0,
        yoyo: true,
        repeat: -1,
        yoyoEase: Sine.easeInOut,
      }
    )
    .fromTo(
      '#rightBottomWing',
      { x: '-=70', y: '-=70' },
      {
        duration: 3,
        x: 0,
        y: 0,
        yoyo: true,
        repeat: -1,
        yoyoEase: Sine.easeInOut,
      },
      'shake'
    )
    .fromTo(
      '#leftTopWing',
      { x: '+=70', y: '+=70' },
      {
        duration: 3,
        x: 0,
        y: 0,
        yoyo: true,
        repeat: -1,
        yoyoEase: Sine.easeInOut,
      },
      'shake'
    )
    .fromTo(
      '#leftBottomWing',
      { x: '+=70', y: '-=70' },
      {
        duration: 3,
        x: 0,
        y: 0,
        yoyo: true,
        repeat: -1,
        yoyoEase: Sine.easeInOut,
      },
      'shake'
    );

  return tl;
};
