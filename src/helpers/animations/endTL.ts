export const endTl = (theme: string, tls: any) => {
  if (theme === "default_resize") {
    tls.default_resize?.tl.progress(1, false);
  } else if (theme === "default_full") {
    tls.default_full?.tl.progress(1, false);
  } else if (theme === "heart_resize") {
    tls.heart_resize?.tl.progress(1, false);
  } else if (theme === "heart_full") {
    tls.heart_full?.tl.progress(1, false);
  } else if (theme === "day_full") {
    tls.day_full?.tl.progress(1, false);
  } else if (theme === "day_resize") {
    tls.day_resize?.tl.progress(1, false);
  } else if (theme === "night_resize") {
    tls.night_resize?.tl.progress(1, false);
  } else if (theme === "night_full") {
    tls.night_full?.tl.progress(1, false);
  }
};
