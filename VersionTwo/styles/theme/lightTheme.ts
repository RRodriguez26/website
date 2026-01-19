// @mui
import { createTheme } from '@mui/material/styles';
// common theme options
import commonThemeOptions from 'styles/theme/commonThemeOptions';

const { components: commonComponentsOptions } = commonThemeOptions;

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#181C14',
      light: '#ECDFCC',
      dark: '#3C3D37',
      contrastText: '#181C14',
    },
    secondary: {
      main: '#2196F3',
      light: '#4DABF5',
      dark: '#1769AA',
      contrastText: '#ECDFCC',
    },
    info: {
      main: '#ECDFCC',
      light: '#ECDFCC',
      dark: '#3C3D37',
      contrastText: '#181C14',
    },
    background: {
      default: '#181C14',
      paper: '#697565',
    },
    text: {
      primary: '#ECDFCC',
      secondary: '#383838',
      disabled: '#777777',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#383838',
        },
      },
    },
    ...commonComponentsOptions,
  },
});

export default lightTheme;
