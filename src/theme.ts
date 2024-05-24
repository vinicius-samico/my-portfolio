import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: "#4B0082"
    },
    secondary: {
      main: "#E6E6FA"
    },
  },
  typography: {
    fontFamily: "Montserrat",
   
  }
});

theme = responsiveFontSizes(theme)

export default theme