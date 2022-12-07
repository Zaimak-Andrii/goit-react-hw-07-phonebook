export const theme = {
  colors: {
    black: '#000',
    white: '#FFF',
    red: 'red',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  fontWeights: {
    heading: 700,
    normal: 400,
    bold: 700,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 2, 4, 6, 8, 10, 12, 16, 32],
};

// radii aliases
theme.radii.none = theme.radii[0];
theme.radii.small = `${theme.radii[2]}px`;
theme.radii.middle = `${theme.radii[5]}px`;
theme.radii.large = `${theme.radii[7]}px`;
theme.radii.round = '50%';

// font sizes aliases
theme.fontSizes.h1 = `${theme.fontSizes[5]}px`;
theme.fontSizes.h2 = `${theme.fontSizes[4]}px`;
theme.fontSizes.h3 = `${theme.fontSizes[3]}px`;
