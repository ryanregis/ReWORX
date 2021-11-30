import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './components/Theme';
import { CardMedia, CardActionArea, Divider, Button } from '@mui/material';
import { BrandName } from './images/CardImg';
function Section5() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id="AboutUs" className="section section-5" align='center'>
            <ThemeProvider theme={customTheme}>
                <Box variant='contained' p={2} sx={{ width: "90%", height: "85vh", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant='h3'>About us</Typography><br />
                    <Accordion TransitionProps={{ unmountOnExit: true }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary sx={{ backgroundColor: '#363636', border: '1px solid #FFFEFF' }} expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} >
                            <Typography variant="h5" color='info.light' sx={{ width: '100%', flexShrink: 0 }}>
                                What is ReWORX?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{maxHeight: 'clamp(350px, 60vmin, 750px)', backgroundColor: 'info.light', overflowY: 'scroll' }}>
                            <img src={BrandName} alt="ReWORX" style={{width: 'clamp(250px,70%, 500px)', backgroundColor: '#363636', borderRadius: 20, paddingLeft: '2%' }} />
                            <Divider sx={{ margin: 2 }} />
                            <Typography color='info.dark' variant='body7'>
                                ReWORX is an online outsourcing company that provides oppurtunity to all independent freelancers<br />looking for jobs or sidejobs,
                                companies looking for manpower, or just individuals looking for specific services.<br /><br /> ReWORX offers an easy to navigate platform
                                for freelancers and customers alike to maximize the coordination between the two entities.
                            </Typography>
                            <Divider sx={{ margin: 2 }} />
                            <Typography color="error" variant="h6">
                                ReWORX is a mock outsourcing company created as the first group project for KodeGo Web Development Bootcamp Batch 3: Exceeds.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion TransitionProps={{ unmountOnExit: true }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary sx={{ backgroundColor: '#363636', border: '1px solid #FFFEFF' }} expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h5" color='info.light' sx={{ width: '100%', flexShrink: 0 }}>
                                The Founder of ReWORX
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{maxHeight: 'clamp(350px, 60vmin, 750px)', backgroundColor: 'info.light', overflowY: 'scroll' }}>

                            <CardActionArea>
                                <Box sx={{ width: '100%', flexShrink: 0, display: 'grid', gridTemplateColumns: { sm: '1fr 1fr ', xs: '1fr' } }}>
                                    <CardMedia
                                        sx={{ height: 400, backgroundPosition: 'center', backgroundSize: 'contain' }}
                                        image={require('./images/section4-virtualassistance.jpeg').default}
                                        alt="ReWORX Founder Ryan Gerome Regis's Picture" />
                                    <Box p={3} display='flex'
                                        flexDirection='column' justifyContent='center' alignItems='center'>
                                        <Typography color='info.dark' variant='h3'>
                                            Ryan Gerome Regis
                                        </Typography>
                                        <Typography color='info.dark' variant='body3'>
                                            "An Electronics Engineer Graduate turned Full-Stack Web Developer"
                                        </Typography><br />
                                        <Typography align='left' color='info.dark' variant='body6'>
                                            Since I am a major in Embedded Software Engineering, I have a solid background in programming;<br />
                                            and so, I already know the fundamentals about the front-end development tools like JavaScript and React.
                                            <br /> However, I am on the process of learning the other tools on web development.
                                        </Typography><br />
                                        <Typography color='error' variant='link' m={1}> Check out his Portfolio and Resume below.
                                        </Typography>
                                        <Button variant="contained" href="#" target="_blank" >
                                            VIEW PROFILE
                                        </Button>
                                    </Box>
                                </Box>
                            </CardActionArea>

                        </AccordionDetails>
                    </Accordion>

                    <Accordion TransitionProps={{ unmountOnExit: true }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary sx={{ backgroundColor: '#363636', border: '1px solid #FFFEFF' }} expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                            <Typography variant="h5" color='info.light' sx={{ width: '100%', flexShrink: 0 }}>
                                The Co-Founders of ReWORX
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{maxHeight: 'clamp(350px, 60vmin, 750px)', padding: 0, backgroundColor: 'info.light', display: 'grid', overflowY: 'scroll', gridTemplateColumns: { sm: '1fr 1fr ', xs: '1fr' } }}>
                            <CardActionArea sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ margin: '1%', }}>
                                    <CardMedia
                                        sx={{ height: 300, backgroundPosition: 'center', backgroundSize: 'contain' }}
                                        image={require('./images/ronpic.jpg').default} alt="ReWORX Co-Founder Ron Velarde's Picture" />
                                    <Box p={3} display='flex'
                                        flexDirection='column' justifyContent='center' alignItems='center'>
                                        <Typography color='info.dark' variant='h6'>
                                            Ronald Velarde
                                        </Typography>
                                        <Typography color='info.dark' variant='body3'>
                                            "An avid learner of new things, Web Developer in progress"
                                        </Typography><br />
                                        <Typography align='left' color='info.dark' variant='body3'>
                                            I'm currently learning about web development and looking forward to master all the tools. I am very adaptive and persistent on the current things that I learn.
                                        </Typography><br />
                                        <Typography color='error' variant='link' m={1}> Check out his Portfolio and Resume below.
                                        </Typography>
                                        <Button variant="contained" href="https://ronv833.github.io/E-Portfolio/" target="_blank" >
                                            VIEW PROFILE
                                        </Button>
                                    </Box>
                                </Box>
                            </CardActionArea>

                            <CardActionArea sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ margin: '1%' }}>
                                    <CardMedia sx={{ height: 300, backgroundPosition: 'center', backgroundSize: 'contain' }} image={require('./images/ralphpic.jpg').default} alt="ReWORX Co-Founder Ralph Santolorin's Picture" />
                                    <Box p={3} display='flex'
                                        flexDirection='column' justifyContent='center' alignItems='center'>
                                        <Typography color='info.dark' variant='h6'>
                                            Ralph Santolorin
                                        </Typography>
                                        <Typography color='info.dark' variant='body3'>
                                            "A beginner in Web Development but unmatched in dedication"
                                        </Typography><br />
                                        <Typography align='left' color='info.dark' variant='body3'> I'm still new to the concept of web development but I am really working hard to understand it. With the help of my peers, I can also become an expert in Web Development.
                                        </Typography><br />
                                        <Typography color='error' variant='link' m={1}> Check out his Portfolio and Resume below.
                                        </Typography>
                                        <Button variant="contained" href="#">
                                            VIEW PROFILE
                                        </Button>
                                    </Box>
                                </Box>
                            </CardActionArea>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Section5;
