import darkBackground from '../assets/backgrounds/curve-line-dark.svg';
import lightBackground from '../assets/backgrounds/curve-line-light.svg';

const breakingPoints = {
  mobile: {
    tiny: 450,
    small: 580,
    large: 765,
  },
  desktop: {
    tiny: 1024,
    small: 1366,
    large: 1600,
    extralarge: 1980,
  },
};

const shadow = {
  soft: '0 0.25rem 0.75rem rgba(0, 0, 0, 0.1875)',
  hover: '0 0.25rem 1.25rem rgba(0, 0, 0, 0.35)',
};

export type ITheme = typeof light;

export const light = {
  title: 'light',
  backgroundImage: lightBackground,
  colors: {
    primary: '#C28C33BF',
    text: '#4D4F5C',
    tagText: '#ffffff',
    tagCloseIcon: '#C8CAe8',
    accept: '#289E28',
    wait: '#e0c513	',
    decline: '#B22222',
    scrollbar: '#C8CAB8ce',
    border: { soft: '#C8CAB8ce', light: '#C8CAB8ce' },
    background: {
      primary: '#E9EDC9',
      secondary: '#F8F9ED',
      chatList: '#F8F9ED',
      dropMenu: '#F8F9ED',
      button: '#F8F9ED',
      modal: '#F8F9ED',
    },
    glassMorphism: {
      background: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
    },
  },
  shadow,
  breakingPoints,
};

export const dark: typeof light = {
  title: 'dark',
  backgroundImage: darkBackground,
  colors: {
    primary: '#c28c3394',
    text: '#fff',
    tagText: '#ffffff',
    tagCloseIcon: '#ffffff',
    accept: '#32CD32',
    wait: '#FFFF33',
    decline: '#B22222',
    scrollbar: '#ffffff2e',
    border: { soft: '#ffffff2e', light: '#C8CAB8ce' },
    background: {
      primary: '#22303c',
      secondary: '#303a3f',
      chatList: '#394449',
      dropMenu: '#394449',
      button: '#394449',
      modal: '#394449',
    },
    glassMorphism: {
      background: 'rgba( 22, 22, 22, 0.2 )',
      boxShadow: '0 8px 32px 0 rgba( 255, 255, 255, 0.05 )',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
    },
  },
  shadow,
  breakingPoints,
};
