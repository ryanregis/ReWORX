import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { FormControl, Input, InputLabel,TextareaAutosize } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import customTheme from './components/Theme';
import { Typography } from '@mui/material';


const styles = {
    body: {
        padding: '2% 5%',
        backgroundColor: 'white',
    },
    formstyles: {
        background: 'linear-gradient(90deg, #9FDC7F 50%, #178260 100%)',
        padding: '5%, 2%',
        borderRadius: '20px',

    },
    reachstyles: {
        border: '5px solid #9FDC7F',
        borderRadius: '20px',
        padding: '2%',
    },
    inputstyles: {
        
        backgroundColor: 'white', 
        width:'250px', 
        height:'30px', 
        borderRadius: '5px', 
        padding: '20px',
        
    },  
    labelstyles: {
        color: 'black',  
        fontWeight:'600',
        fontSize: '20px',
    },
    buttonstyles: {
        fontSize: '20px',
        backgroundColor: 'lightgreen',
        color: 'black',
        margin: '20px',
    },

}

//gap={3}
function Section6() {
    return (
        <div className="section">
            <ThemeProvider theme={customTheme}>
                <Grid container spacing={2} align="center"  style ={styles.body} >
                    <Grid item xs={12} md={6} >
                        <div  style ={styles.formstyles} ><br/>
                        <Typography variant="h3">Contact Us</Typography>
                            <form > 
                                
                                <Box   sx={{display: 'grid',  gridTemplateColumns: { sm: '1fr 1fr' ,xs: '1fr'}}}>
                                    <div>
                                        <FormControl sx={{marginBottom:'20px'}}>
                                            <InputLabel sx={styles.labelstyles}>First Name</InputLabel>
                                            <Input  type="text" sx={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>
                                    
                                    <div>
                                        <FormControl sx={{marginBottom:'20px'}}>
                                            <InputLabel sx={styles.labelstyles}>Last Name</InputLabel>
                                            <Input  type="text" sx={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl sx={{marginBottom:'20px'}}>
                                            <InputLabel sx={styles.labelstyles}>Company Name</InputLabel>
                                            <Input type="text" sx={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl sx={{marginBottom:'20px'}}>
                                            <InputLabel sx={styles.labelstyles}>Email address</InputLabel>
                                            <Input type="email" sx={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl sx={{marginBottom:'20px'}}>
                                            <InputLabel sx={styles.labelstyles}>Phone Number</InputLabel>
                                            <Input type="number" sx={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl sx={{marginBottom:'20px'}}>
                                            <InputLabel sx={styles.labelstyles}>Zip Code</InputLabel>
                                            <Input type="number" sx={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>
                                </Box>
                                    <div>
                                        <FormControl sx={{marginBottom:'20px'}}>
                                            <TextareaAutosize  style={{ fontSize: '20px'}} placeholder="Message Us" required/>
                                        </FormControl>
                                    </div>

                                    <div >
                                        <Button sx={styles.buttonstyles} type="submit">Submit</Button>
                                    </div>
                                    
                                    <div >
                                        <Button sx={styles.buttonstyles} type="reset">Reset</Button>
                                    </div>
                            </form>
                        </div> 
                    </Grid>

                    <Grid item xs={12} md={6} >
                        
                        <div  style ={styles.reachstyles} >
                            <Typography variant="h3">Reach Us</Typography>
                            <Typography variant="h6">Contact Number: <br/>+639-xxxx-xxxx</Typography>
                            <Typography variant="h6">Email: <br/>contact@reworx.com</Typography>
                            <h3>Visit our Office: </h3>
                            {/* <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722.346359775843!2d120.97001912239107!3d14.589205742170764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca3d1375e1fb%3A0x49ebfa658c0ba08!2sIntramuros%2C%20Manila%2C%201002%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1637990544085!5m2!1sen!2sph" width="100%" height="250px" style={{border:"0"}}  loading="lazy" title="maps"></iframe>
                                     */}
                        </div> 
                    </Grid>

                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Section6;
