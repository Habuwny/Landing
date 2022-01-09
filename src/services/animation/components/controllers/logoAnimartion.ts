import gsap from 'gsap';
import { wing } from './wing';

export const logoAnimation = () => {
  let master = gsap.timeline({});



  master.add(wing());

  return master;
};
