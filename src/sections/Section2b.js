import React from 'react';
import { Box, Grid, Typography, ThemeProvider, Divider, Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import customTheme from './components/Theme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    Grid1img, Grid2img, Grid3img, Grid4img, BrandName,
    Grid5img, Grid6img, Grid7img, Grid8img,
} from './images/CardImg';
const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        minHeight: '90vh',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 35,
    },
    arrow: {
        position: 'absolute',
        top: '50%',
        left: 0,
    },
    top: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    gridContainer: {
        margin: '5px 0',
        width: '80%',
    },
    imgContainer: {
        margin: 5,
        backgroundColor: customTheme.palette.info.light,
    },
    brandNameImg: {
        margin: '10px 0',
        backgroundColor: customTheme.palette.info.dark,
        paddingLeft: 15,
        borderRadius: 20,
        height: 100,
        width: 300,
        objectFit: 'scale-down',

        '&:hover': {
            boxShadow: `0 0 15px 5px ${customTheme.palette.info.light} !important`,
        },
    },
    companyBrandImg: {
        backgroundColor: customTheme.palette.info.light,
        borderRadius: 1000,
        height: 100,
        width: 100,
        objectFit: 'scale-down',

        '&:hover': {
            boxShadow: `0 0 15px 5px ${customTheme.palette.info.dark} !important`,
        },
    }

}));

function Section2b() {
    const classes = useStyles();
    const companyBrands = [
        {
            src: Grid1img,
            alt: 'Company Logo',
        },
        {
            src: Grid2img,
            alt: 'Company Logo',
        },
        {
            src: Grid3img,
            alt: 'Company Logo',
        },
        {
            src: Grid4img,
            alt: 'Company Logo',
        },
        {
            src: BrandName,
            alt: 'ReWORX Brand Name Logo',
        },
        {
            src: Grid5img,
            alt: 'Company Logo',
        },
        {
            src: Grid6img,
            alt: 'Company Logo',
        },
        {
            src: Grid7img,
            alt: 'Company Logo',
        },
        {
            src: Grid8img,
            alt: 'Company Logo',
        }
    ];
    return (
        <div id="Section2b" className="section-2-children section-2b">
            <ThemeProvider theme={customTheme}>
                <Box className={classes.root}>
                    <Box className={classes.top}>
                        <IconButton href="#Section2a" color="info" className={classes.arrow}>
                            <ArrowBackIcon fontSize="large" sx={{ m: 2 }} />
                        </IconButton>
                        <Typography variant="title" color="info.dark">
                            Welcome, Freelancers!
                        </Typography>
                    </Box>
                    <Typography variant="body5">
                        Freelancing has its drawbacks with client scarcity.<br />
                        Through ReWORX’s exclusive connections, it has never been easier to get new clients!<br />
                        Become part of the ReWORX company by clicking the ReWORX brand name below.
                    </Typography>
                    <Box className={classes.gridContainer}>
                        <Grid container
                            justifyContent="space-around"
                            alignItems="center"
                            spacing={2}>
                            {companyBrands.map((logo, index) => {
                                if (index === 4) {
                                    return (
                                        <Grid item xs={12} sx={{display: 'flex', justifyContent:'center'}}>
                                            <Button>
                                            <img src={logo.src} alt={logo.alt} className={classes.brandNameImg} />
                                            </Button>
                                        </Grid>
                                    )
                                } else {
                                    return (
                                        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent:'center',}}>
                                            <img src={logo.src} alt={logo.alt} className={classes.companyBrandImg} />
                                        </Grid>
                                    )
                                }

                            })}
                        </Grid>
                    </Box>
                </Box>

            </ThemeProvider>
        </div>
    )
}

export default Section2b;
