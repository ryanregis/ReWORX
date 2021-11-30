import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let customTheme = createTheme({
    palette: {
        primary: {
            main: '#178260',
        },
        secondary: {
            main: '#9FDC7F',
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
        heroTitle: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 10vw,6.25rem)',
        },
        title: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 800,
            color: customTheme.palette.secondary.main,
            fontSize: 'clamp(1.5rem, 6vw,4.5rem)',
        },
        quote: {
            fontFamily: '"Montserrat", "Poppins", Roboto',
            fontWeight: 800,
            fontStyle: 'italic',
            color: customTheme.palette.info.dark,
            fontSize: 'clamp(1rem, 4vmax, 8rem)',
        },
        subtitle1: {
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.secondary.main,
            fontSize: '3rem',
        },
        subtitle2: {
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.info.light,
            fontSize: '2.25rem',
        },
        body1: {
            textAlign: 'center',
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.info.light,
            fontSize: '1.5rem',
        },
        body2: {
            textAlign: 'center',
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.info.dark,
            fontSize: '1.5rem',
        },
        body3: {
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.info.light,
        },
        body4: {
            margin: '0 5px',
            textAlign: 'center',
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.info.light,
            fontSize: 'clamp(0.75rem, 3.2vw, 1.5rem)',
        },
        body5: {
            margin: '0 5px',
            textAlign: 'center',
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.info.dark,
            fontSize: 'clamp(0.75rem, 3.2vw, 1.5rem)',
        },
        body6: {
            margin: '0 5px',
            textAlign: 'center',
            fontFamily: '"Poppins", Roboto',
            fontWeight: 500,
            color: customTheme.palette.info.dark,
            fontSize: 'clamp(0.5rem, 2.7vw, 1.25rem)',
        },
        body7: {
            margin: '0 5px',
            textAlign: 'left',
            fontFamily: '"Poppins", Roboto',
            fontWeight: 500,
            color: customTheme.palette.info.dark,
            fontSize: 'clamp(0.75rem, 2vw, 1.25rem)',
        },
        link: {
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            margin: '0 0.75rem'
        },
        subquote1: {
            textAlign: 'right',
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.primary.main,
            fontSize: 'clamp(0.5rem, 2vmax, 4rem)'
        },
        subquote2: {
            fontFamily: '"Poppins", Roboto',
            fontWeight: 600,
            color: customTheme.palette.info.dark,
            fontSize: 'clamp(0.375rem, 1.5vmax, 2rem)'
        },
    }
});

customTheme = responsiveFontSizes(customTheme);
export default customTheme;
