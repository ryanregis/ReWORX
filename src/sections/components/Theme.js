import { createTheme } from "@mui/material/styles";

const theme = createTheme(theme, {
    palette: {
        primary: {
            main: '#178260',
        },
        secondary: {
            main: '#9F0C7F',
        },
        black: {
            main: '#363636',
            light: '#606462',
        },
        white: {
            main: "#FFFEFF",
            dark: "#EDF0EE",
        },
    },

    typography: {
        fontSize: 16,
        fontFamily: '"Montserrat", "Poppins", Roboto',
        color: theme.palette.white.main,
        h1: {
            fontWeight: 800,
        },
        h2: {
            fontWeight: 800,
        },
        h3: {
            fontWeight: 800,
        },
        h4: {
            fontWeight: 800,
        },
        h5: {
            fontWeight: 800,
        },
        h6: {
            fontWeight: 800,
        },
        title: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            color: theme.palette.secondary.main,
            fontSize: '4.5rem',
        },
        subtitle1: {
            fontFamily: '"Poppins", Roboto',
            color: theme.palette.secondary.main,
            fontSize: '3rem',
        },
        subtitle2: {
            fontFamily: '"Poppins", Roboto',
            color: theme.palette.white.main,
            fontSize: '2.25rem',
        },
        body1: {
            fontFamily: '"Poppins", Roboto',
            color: theme.palette.white.main,
            fontSize: '1.5rem',
        },
        body2: {
            fontFamily: '"Poppins", Roboto',
            color: theme.palette.black.main,
            fontSize: '1.5rem',
        }
    }

});
theme = responsiveFontSizes(theme);
export default theme;