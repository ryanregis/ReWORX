import React from 'react';
import { Box, Typography, ThemeProvider } from '@mui/material';
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
    },

    quote: {
        width: '90%',
        height: '50%',
        paddingRight: 'clamp(50px,20%,200px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    from: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
}));

function Section3() {
    const classes = useStyles();
    return (
        <div id="section-3" className="section section-3">
            <ThemeProvider theme={customTheme}>
                <Box className={classes.root}>
                    <Box className={classes.quote}>
                        <Typography variant="quote" className="text-shadow">
                            "When the workload is too much,
                            you'll need some effective backup.
                            That's where ReWORX comes in."
                        </Typography>
                    </Box>
                    <Box className={classes.from}>
                        <Typography variant='subquote1' className="text-shadow">
                            -  Ryan Gerome Regis, Ralph Santolorin, and Ronald Velarde
                        </Typography>
                        <Typography variant='subquote2' className="text-shadow">
                            ReWORX Founder and Co-Founders
                        </Typography>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Section3;
