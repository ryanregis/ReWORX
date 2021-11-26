import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let customTheme = createTheme({
    palette: {
        primary: {
            main: '#178260',
        },
        secondary: {
            main: '#9F0C7F',
        },
        info: {
            dark: '#363636',
            main: '#606462',
            light: '#FFFEFF',
        }
    },
});

customTheme = createTheme(customTheme, {
    typography: {
        fontSize: 16,
        color: customTheme.palette.info.light,
        h1: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 800,
        },
        h2: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 800,
        },
        h3: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 800,
        },
        h4: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 800,
        },
        h5: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 800,
        },
        h6: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 800,
        },
        title: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            color: customTheme.palette.secondary.main,
            fontSize: '4.5rem',
        },
        subtitle1: {
            fontFamily: '"Poppins", Roboto',
            color: customTheme.palette.secondary.main,
            fontSize: '3rem',
        },
        subtitle2: {
            fontFamily: '"Poppins", Roboto',
            color: customTheme.palette.info.light,
            fontSize: '2.25rem',
        },
        body1: {
            fontFamily: '"Poppins", Roboto',
            color: customTheme.palette.info.light,
            fontSize: '1.5rem',
        },
        body2: {
            fontFamily: '"Poppins", Roboto',
            color: customTheme.palette.info.dark,
            fontSize: '1.5rem',
        },
        body3: {
            fontFamily: '"Poppins", Roboto',
            color: customTheme.palette.info.light,
        }
    }
});

customTheme = responsiveFontSizes(customTheme);
export default customTheme;