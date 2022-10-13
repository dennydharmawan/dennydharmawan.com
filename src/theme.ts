import { grey } from "@mui/material/colors";
import { createTheme, experimental_sx as sx } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial', //https://meowni.ca/font-style-matcher/, https://screenspan.net/fallback
    h1: {},
    h2: {},
    h3: {
      fontSize: 'clamp(20px, calc(0.8vw + 1rem), 42px)'
    },
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {
      color: grey[200]
    },
    body2: {},
    button: {},
    caption: { fontSize: 'clamp(2rem, 4.5vw, 4rem)' },
    overline: {}
  },
  palette: {
    primary: {
      main: '#ffb703',
      contrastText: '#000'
    },
    secondary: {
      main: '#2E3034', // '#121528', //#19142A
      contrastText: '#fff'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 100 900;
          font-display: optional;
          src: url(/fonts/inter-var-latin.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
            U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
            U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Adjusted Arial Fallback';
          src: local(Arial);
          size-adjust: 107%;
          ascent-override: normal;
          descent-override: normal;
          line-gap-override: normal;
        }

        .MuiButtonBase-root.MuiButton-root {
          font-weight: 700;
          border-radius: 24px
        }

        body {background-color: #97989a}
      `
    }
  }
});

export default theme;
