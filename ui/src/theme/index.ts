import { createTheme } from "@mui/material";
import { blue, orange, red } from "@mui/material/colors";

declare module '@mui/material/styles' {
  interface Theme {
    // primary: string;
    // secondary: string;
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  // primary: red,
  // secondary: red,
  status: {
    danger: orange[500],
  },
});