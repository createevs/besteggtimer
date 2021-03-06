import { systemWeights } from 'react-native-typography';
export default {
  disabledOpacity: 0.5,
  roundness: 6,
  colors: {
    background: 'rgb(239, 239, 240)',
    divider: 'rgb(212, 214, 218)',
    error: 'rgba(255, 69, 100, 1)',
    light: 'rgba(165, 173, 183, 1)',
    lightInverse: 'rgba(255, 255, 255, 0.68)',
    medium: 'rgba(70, 78, 88, 1)',
    mediumInverse: 'rgba(255, 255, 255, 0.87)',
    primary: 'rgb(38, 34, 99)',
    secondary: 'rgb(254, 195, 45)',
    strong: 'rgba(18, 20, 44, 1)',
    strongInverse: 'rgba(255, 255, 255, 1)',
    surface: 'rgba(255, 255, 255, 1)',
  },
  typography: {
    body1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    body2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    button: {
      ...systemWeights.bold,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 16,
    },
    caption: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 16,
    },
    custom14: {
      ...systemWeights.bold,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 24,
    },
    custom15: {
      ...systemWeights.bold,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 24,
    },
    custom16: {
      ...systemWeights.bold,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 20,
    },
    custom17: {
      ...systemWeights.bold,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 20,
    },
    custom18: {
      ...systemWeights.bold,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    custom19: {
      ...systemWeights.regular,
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 26,
    },
    headline1: {
      ...systemWeights.bold,
      fontSize: 60,
      letterSpacing: 0,
      lineHeight: 71,
    },
    headline2: {
      ...systemWeights.bold,
      fontSize: 48,
      letterSpacing: 0,
      lineHeight: 58,
    },
    headline3: {
      ...systemWeights.bold,
      fontSize: 34,
      letterSpacing: 0,
      lineHeight: 40,
    },
    headline4: {
      ...systemWeights.bold,
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 34,
    },
    headline5: {
      ...systemWeights.bold,
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: 26,
    },
    headline6: {
      ...systemWeights.bold,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
    overline: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: 16,
    },
    subtitle1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    subtitle2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
  },
};
