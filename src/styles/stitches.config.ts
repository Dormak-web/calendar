import {createStitches} from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#ff6',
      gray100: '#EEEFF1',
      gray200: '#EBEBEB',
      gray300: '#E3E4E6',
      gray400: '#C5CACD',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
  },
});