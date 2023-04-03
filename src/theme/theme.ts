import borders from './borders';
import colors from './colors';
import shadows from './shadows';
import typography from './typography';

export const theme = {
  colors,
  shadows,
  typography,
  borders,
};

export type Theme = typeof theme;
