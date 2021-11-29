import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './components/Theme';

function Section5() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (e, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id="AboutUs" className="section section-5" align='center'>
            <ThemeProvider theme={customTheme}>
                <Box  p={5} sx={{textAlign:'center',        width: "80vw",height: '70vh',}}>
                    <Typography variant='h3'>About us</Typography><br/>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary sx={{backgroundColor:'#363636', border:'3px solid #FFFEFF'}} expandIcon={<ExpandMoreIcon sx={{color:'white'}} />} >
                            <Typography color='white' sx={{ width: '100%', flexShrink: 0 }}>
                                    What is ReWORX?
                            </Typography>
                        </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id dignissim quam.
                                </Typography>
                            </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary sx={{backgroundColor:'#363636', border:'3px solid #FFFEFF'}} expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}>
                            <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            The Founder of ReWORX
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary sx={{backgroundColor:'#363636', border:'3px solid #FFFEFF'}} expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}>
                            <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                The Co-Founders of ReWORX
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Section5;
