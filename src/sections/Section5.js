import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './components/Theme';
import { CardMedia, CardActionArea, Link, Button } from '@mui/material';

function Section5() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id="AboutUs" className="section section-5" align='center'>
            <ThemeProvider theme={customTheme}>
                <Box variant='contained'  p={2} sx={{textAlign:'center',width: "80vw"}}>
                    <Typography variant='h3'>About us</Typography><br/>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary sx={{backgroundColor:'#363636', border:'1px solid #FFFEFF'}} expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} >
                            <Typography color='info.light' sx={{ width: '100%', flexShrink: 0 }}>
                                    What is ReWORX?
                            </Typography>
                        </AccordionSummary>
                            <AccordionDetails sx={{backgroundColor:'info.light'}}>
                                <Typography color='info.dark' variant='body3'>
                                    ReWORX is an online outsourcing company that provides oppurtunity to all independent freelancers looking for jobs or sidejobs, 
                                    companies looking for manpower or just individuals looking for a specific services. ReWORX offers an easy to navigate platform
                                    for freelancers and customers alike to maximize the coordination between the two entities. 
                                </Typography>
                            </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary sx={{backgroundColor:'#363636', border:'1px solid #FFFEFF'}} expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}>
                            <Typography color='info.light' sx={{ width: '100%', flexShrink: 0 }}>
                                The Founder of ReWORX
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails  sx={{backgroundColor:'info.light'}}>
                            
                            <CardActionArea> 
                                <Box sx={{ width: '100%', flexShrink: 0, display: 'grid',  gridTemplateColumns: { sm: '1fr 1fr ' ,xs: '1fr'} }}>
                                    <CardMedia component="img" height='270' image={require('./images/section4-virtualassistance.jpeg').default}  alt="virtualassistance"/> 
                                    <Box  p={3} display='flex' flexDirection='column'>
                                    <Typography color='info.dark' variant='h6'> Ryan Gerome Regis </Typography>
                                    <Typography  color='info.dark' variant='body3'> "An Electronics Engineer Graduate turned Full-Stack Web Developer" </Typography>
                                    <Typography align='left'  color='info.dark' variant='body3'> I already have some background about some of the front-end tools like JavaScript. However, I am on the process of learning the other tools on web development. I am a very resourceful and hardworking person.  </Typography> 
                                    <Typography color='info.dark' variant='body4'> Check out his Portfolio and Resume below. </Typography> 
                                    <Link href='#'><Button >VIEW PROFILE</Button></Link>
                                    </Box>
                                </Box>
                            </CardActionArea>
    
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary sx={{backgroundColor:'#363636', border:'1px solid #FFFEFF'}} expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}>
                            <Typography color='info.light' sx={{ width: '100%', flexShrink: 0 }}>
                                The Co-Founders of ReWORX
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails  sx={{backgroundColor:'info.light', display:'grid', gridTemplateColumns: { sm: '1fr 1fr ' ,xs: '1fr'} }}>
                            <CardActionArea  sx={{ width: '100%', display:'flex' }}> 
                                <Box sx={{margin: '5%'}}>
                                    <CardMedia component="img" height='270' position='center' image={require('./images/ronpic.jpeg').default}  alt="virtualassistance"/> 
                                    <Box  p={3} display='flex' flexDirection='column'>
                                    <Typography color='info.dark' variant='h6'> Ronald Velarde </Typography>
                                    <Typography color='info.dark' variant='body3'> "An avid learner of new things, Web Developer in Progress"</Typography>
                                    <Typography align='left' color='info.dark' variant='body3'> I am still learning about web developemnt but I am looking forward to master all the tools. I am very adaptive and persistant on the current things that I learn.   </Typography> 
                                    <Typography color='info.dark' variant='body4'> Check out his Portfolio and Resume below. </Typography> 
                                    <Link href='https://ronv833.github.io/E-Portfolio/' target='_blank'><Button >VIEW PROFILE</Button></Link>
                                    </Box>
                                </Box>
                            </CardActionArea>

                            <CardActionArea sx={{ width: '100%',  display:'flex' }}> 
                                <Box sx={{margin: '5%'}}>
                                    <CardMedia component="img" height='270' image={require('./images/section4-crypto.jpeg').default}  alt="virtualassistance"/> 
                                    <Box  p={3} display='flex' flexDirection='column'>
                                    <Typography color='info.dark' variant='h6'>Ralph Santolorin </Typography>
                                    <Typography  color='info.dark' variant='body3'> "A beginner in terms of web development but unparalleled in his dedication of learning"</Typography>
                                    <Typography align='left' color='info.dark' variant='body3'> I still new to the concept of web developement but I am still working hard to understand all the things we do in this bootcamp.  </Typography> 
                                    <Typography color='info.dark' variant='body4'> Check out his Portfolio and Resume below. </Typography> 
                                    <Link href='#'><Button >VIEW PROFILE</Button></Link>
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
