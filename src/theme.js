import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#860000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text:{
      primary: '#fff'
    }
  },
  typography: {
    fontFamily: [
      'Alegreya',
      'Poppins'
    ].join(''),
  },
});

export default theme;