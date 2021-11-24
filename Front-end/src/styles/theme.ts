export const theme = {
  title: 'light',
  colors: {
    red: '#F15356',
    orange: '#F0BF5A',
    yellow: '#FDE980',
    green: '#85DB6B',
    blue: '#439EFA',
    purple: '#A993F5',
    pink: '#F26B9C',
  },
  assets: {
    font: '#1A1A1A',
    background: '#F8F8F8',
    borderLight: '#E0E0E0',
    borderDark: '#C4C4C4',
  },
  gradients: {
    red: 'linear-gradient(180deg, #F26B9C 0%, #F15356 80.21%)',
    rainbow:
      'linear-gradient(270deg, #F15356 2.68%, #F0BF5A 15.4%, #FDE980 31.84%, #85DB6B 48.27%, #439EFA 64.71%, #A993F5 83.26%, #F26B9C 101.82%)',
  },
};

export type Theme = typeof theme;
