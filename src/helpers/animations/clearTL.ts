export const clearGTL = (theme: string, tls: any) => {
  if (theme === 'default_resize') {
    tls.default_full?.tl.clear();
    tls.heart_full?.tl.clear();
    tls.heart_resize?.tl.clear();
    tls.night_full?.tl.clear();
    tls.night_resize?.tl.clear();
    tls.day_full?.tl.clear();
    tls.day_resize?.tl.clear();
  } else if (theme === 'default_full') {
    tls.default_resize?.tl.clear();
    tls.heart_full?.tl.clear();
    tls.heart_resize?.tl.clear();
    tls.night_full?.tl.clear();
    tls.night_resize?.tl.clear();
    tls.day_full?.tl.clear();
    tls.day_resize?.tl.clear();
  } else if (theme === 'heart_resize') {
    tls.default_full?.tl.clear();
    tls.default_resize?.tl.clear();
    tls.heart_full?.tl.clear();
    tls.night_full?.tl.clear();
    tls.night_resize?.tl.clear();
    tls.day_full?.tl.clear();
    tls.day_resize?.tl.clear();
  } else if (theme === 'heart_full') {
    tls.default_full?.tl.clear();
    tls.default_resize?.tl.clear();
    tls.heart_resize?.tl.clear();
    tls.night_full?.tl.clear();
    tls.night_resize?.tl.clear();
    tls.day_full?.tl.clear();
    tls.day_resize?.tl.clear();
  } else if (theme === 'day_full') {
    tls.default_full?.tl.clear();
    tls.default_resize?.tl.clear();
    tls.heart_full?.tl.clear();
    tls.heart_resize?.tl.clear();
    tls.night_full?.tl.clear();
    tls.night_resize?.tl.clear();
    tls.day_resize?.tl.clear();
  } else if (theme === 'day_resize') {
    tls.default_full?.tl.clear();
    tls.default_resize?.tl.clear();
    tls.heart_full?.tl.clear();
    tls.heart_resize?.tl.clear();
    tls.night_full?.tl.clear();
    tls.night_resize?.tl.clear();
    tls.day_full?.tl.clear();
  } else if (theme === 'night_resize') {
    tls.default_full?.tl.clear();
    tls.default_resize?.tl.clear();
    tls.heart_full?.tl.clear();
    tls.heart_resize?.tl.clear();
    tls.night_full?.tl.clear();
    tls.day_full?.tl.clear();
    tls.day_resize?.tl.clear();
  } else if (theme === 'night_full') {
    tls.default_full?.tl.clear();
    tls.default_resize?.tl.clear();
    tls.heart_full?.tl.clear();
    tls.heart_resize?.tl.clear();
    tls.night_full?.tl.clear();
    tls.night_resize?.tl.clear();
    tls.day_resize?.tl.clear();
  }
};
