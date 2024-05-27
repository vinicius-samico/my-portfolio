import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: "#4682B4"
    },
    secondary: {
      main: "#000000"
    },
  },
  typography: {
    fontFamily: "Montserrat",
   
  }
});

theme = responsiveFontSizes(theme)

export default theme