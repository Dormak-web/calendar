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
      primary: '#2684FF',

      gray100: '#EEEFF1',
      gray200: '#EBEBEB',
      gray300: '#E3E4E6',
      gray400: '#C5CACD',

      divider: '$gray400',

      grayFocused: 'rgba(238, 239, 241, .5)',
      grayActive: 'rgba(235, 235, 235, .5)',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
  },
});