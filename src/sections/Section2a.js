import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, ThemeProvider, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import customTheme from './components/Theme';
import { Card1img, Card2img, Card3img, Card4img, ClientDecor } from './images/CardImg';
const useStyles = makeStyles(() => ({
    root: {
        minHeight: '90vh',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clientContainer: {
        minHeight: '50vh',
        width: '90%',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    cardGrid: {
        width: '100%',
        minHeight: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch',
        alignItems: 'center',
        backgroundColor: `${customTheme.palette.info.light} !important`,

        '&:hover': {
            boxShadow: `0 0 15px 5px ${customTheme.palette.secondary.main} !important`,
        },
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'pre-line',
    },
    subtitle: {
        textAlign: 'right',
    },
}));

function Section2a() {
    const classes = useStyles();

    const cardContent = [
        {
            img: Card1img, alt: 'BillionGrafix Brand Logo',
            title: "ReWORX improved our \ncompany's productivity.",
            subtitle: 'BillionGrafix Inc.'
        },
        {
            img: Card2img, alt: 'cryptoblocks Brand Logo',
            title: "Our markup increased by 200% thanks to ReWORX.",
            subtitle: 'cryptoblocks Inc.'
        },
        {
            img: Card3img, alt: 'Web Binge Brand Logo',
            title: "Without ReWORX, our company would've gone downhill.",
            subtitle: 'Web Binge (WB) Inc.'
        },
        {
            img: Card4img, alt: 'Lightning Virto Brand Logo',
            title: "Our company has been finishing deadlines early by outsourcing to ReWORX.",
            subtitle: 'Lightning Virto Inc.'
        },
    ];

    return (
        <div id="Section2a" className="section-2-children section-2a">
            <ThemeProvider theme={customTheme}>
                <Box className={classes.root}>
                    <Typography variant="title" sx={{mb:2}}>
                        Why outsource with us?
                    </Typography>
                    <Typography variant="body4">
                        Here at ReWORX, we provide solutions to your problems.<br />
                        Whether it's additional workforce or virtual assistance,<br />
                        you can be assured that ReWORX will deliver the best service.
                    </Typography>
    
                    <Typography variant="body3" sx={{mt:3, mb:1}}>
                        Are you a freelancer looking for a job?
                    </Typography>
                    <Button href="#Section2b" variant="contained" sx={{borderRadius:20, mb:3}}>Click Here</Button>

                    <Box className={classes.clientContainer}>
                        <Typography variant="subtitle1" sx={{ display: 'flex', gap: 10 }}>
                            <img src={ClientDecor} alt="Client Text Decoration" />
                            <span>Clients</span>
                            <img src={ClientDecor} alt="Client Text Decoration" />
                        </Typography>

                        <Grid container
                            justifyContent="space-around"
                            alignItems="center"
                            spacing={5}>
                            {cardContent.map((card) => {
                                return (
                                    <Grid item xs={12} md={6}>
                                        <Card className={classes.cardGrid}>
                                            <CardMedia
                                                sx={{ flexShrink: 0, width: 150, height: 150 }}
                                                image={card.img}
                                                alt={card.alt} />
                                            <Box display="flex"
                                                flexDirection="column"
                                                flexShrink="1">
                                                <CardContent>
                                                    <Typography variant="body3" fontWeight="600" color="info.dark">
                                                        "{card.title}"
                                                    </Typography>
                                                </CardContent>
                                                <Divider />
                                                <CardContent>
                                                    <Typography variant="body3" fontWeight="400" className={classes.subtitle} color="info.dark">
                                                        - {card.subtitle}
                                                    </Typography>
                                                </CardContent>
                                            </Box>
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
