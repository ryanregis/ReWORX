import React from 'react';
import { Box, Typography, Button, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import customTheme from './components/Theme';

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    title:{
        width:'100%',
        height: '50%',
        paddingRight: '50%',
    },

    button:{
        position: 'absolute',
        bottom: '5%',
        width: '100%',
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
    }
}));

const spanStyle = {
    background: 'linear-gradient(to right, #178260 15%, #9FDC7F 65%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
}


function Section1() {
    const classes = useStyles();
    return (
        <div className="section-1">
            <ThemeProvider theme={customTheme}>
                <Box className={classes.root}>
                    <Box className={classes.title}>
                        <Typography  variant="heroTitle" color="info.light">
                            Strategic <br />Outsourcing, <br />Re<span style={spanStyle}>WORX</span>ed.
                        </Typography>
                    </Box>
                    <Box className={classes.button}>
                        <Button variant="contained" sx={{borderRadius: 20}} href="#ContactUs">
                        <Typography  variant="body5" color="info.light">
                            Outsource With Us
                        </Typography>
                        </Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Section1;
