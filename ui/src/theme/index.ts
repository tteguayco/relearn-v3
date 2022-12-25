import { createTheme } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    light: string;
    dark: string;
    dark1: string;
    grey1: string;
  }
}

const palette = {
  primary: {
    main: '#004A7C',
  },
  secondary: {
    main: '#003b63',
  },
  info: {
    main: '#E4ECFE',
  },
  common: {
    greyBackground: '#FBFBFB',
    light: '#FEFFFD',
    dark: '#070D0D',
    dark1: '#515656',
    grey1: '#ededed',
  },
};

export const theme = createTheme({
  palette,
  typography: {
    fontSize: 12,
    button: {
      textTransform: 'none',
    },
  },
});
