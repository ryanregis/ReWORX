import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, ThemeProvider, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import customTheme from './components/Theme';
import { Card1img, Card2img, Card3img, Card4img } from './images/CardImg';
const useStyles = makeStyles(() => ({
    root: {
        minHeight: '90vh',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clientContainer: {
        border: '1px solid white',
        minHeight: '50vh',
        width: '90%',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    cardGrid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: `${customTheme.palette.info.light} !important`,
    },
    cardImg: {
        height: '10vh',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
    },
    cardContent: {
        flexGrow: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'pre-line',
    },
    subtitle:{
        textAlign:'right',
    },
}));

function Section2a() {
    const classes = useStyles();

    const cardContent = [
        { img: Card1img, alt: 'Tech Solutions Brand Logo', 
        title: "ReWORX improved our \ncompany's productivity.",
        subtitle:'Tech Solutions Inc.'},
        { img: Card2img, alt: 'Tech Solutions Brand Logo', title: "ReWORX improved our \ncompany's productivity.", },
        { img: Card3img, alt: 'Tech Solutions Brand Logo', title: "ReWORX improved our \ncompany's productivity.", },
        { img: Card4img, alt: 'Tech Solutions Brand Logo', title: "ReWORX improved our \ncompany's productivity.", },
    ];

    return (
        <div className="section-2-children section-2a">
            <ThemeProvider theme={customTheme}>
                <Box className={classes.root}>
                    <Typography variant="title">
                        Why outsource with us?
                    </Typography>
                    <Typography variant="body1">
                        Here at ReWORX, we provide solutions to your problems.<br />
                        Whether it's additional workforce or virtual assistance,<br />
                        you can be assured that ReWORX will deliver the best service.
                    </Typography>
                    <Box className={classes.clientContainer}>
                        <Typography variant="subtitle1">
                            Clients
                        </Typography>
                        <Grid container spacing={2}>
                            {cardContent.map((card) => {
                                return (

                                    <Grid item xs={12} md={6} >
                                        <Card className={classes.cardGrid}>
                                                <CardMedia
                                                className={classes.cardImg}
                                                image={card.img}
                                                alt={card.alt} />
                                                <CardContent>
                                                    <Typography variant="h6" color="info.dark">
                                                        "{card.title}"
                                                    </Typography>
                                                </CardContent>
                                                <Divider />
                                                <CardContent>
                                                    <Typography className={classes.subtitle} color="info.dark">
                                                        - {card.subtitle}
                                                    </Typography>
                                                </CardContent>
                                        </Card>
                                    </Grid>

                                )
                            })}
                        </Grid>
                    </Box>
                </Box>
            </ThemeProvider>

        </div>
    )
}

export default Section2a;
