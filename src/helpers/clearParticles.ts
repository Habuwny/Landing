export const clearParticles = (str: string) => {
  const els = document.querySelectorAll(".particle__willBeDeleted");
  els.forEach((el) => {
    el.parentNode!.removeChild(el);
  });
};
