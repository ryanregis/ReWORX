import React, { useRef, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { FormControl, Input, InputLabel,TextareaAutosize, FormHelperText } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import customTheme from './components/Theme';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';


const styles = {
    body: {
        padding: '3% 5%',
        backgroundColor: 'white',
    },
    formstyles: {
        background: 'linear-gradient(90deg, #9FDC7F 50%, #178260 100%)',
        borderRadius: '20px',

    },
    reachstyles: {
        border: '5px solid #9FDC7F',
        borderRadius: '20px',
        padding: '2%',
    },
    inputstyles: {
        backgroundColor: 'white', 
        width:'100%', 
        height:'1vh', 
        borderRadius: '5px', 
        padding: '6%',
        fontWeight: '100',
    },  
    labelstyles: {
        color: 'black',  
        fontWeight: '200',
        fontSize: '100%',
    },
    buttonstyles: {
        fontSize: '100%',
        backgroundColor: 'lightgreen',
        color: 'black',
        margin: '2%',
    },

}


function Section6() {
    const fNameRef = useRef(null);
    const lNameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const cNameRef = useRef(null);
    const [id, setID] = useState(Date.now);
    const [allContacts, setallContacts] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = {
           id: id,
           fName: fNameRef.current.value,
           lName: lNameRef.current.value,
           email: emailRef.current.value,
           message: messageRef.current.value,
           cName: cNameRef.current.value,
        };
        //all data in object formData will be stored in allcontacts array spread
        setallContacts([...allContacts, formData])
        alert('Your Form Have Been Submitted');
        fNameRef.current.value =null;
        lNameRef.current.value=null;
        emailRef.current.value=null;
        messageRef.current.value=null;
        setID(Date.now);
     };
     useEffect(()=>{localStorage.setItem("contact", JSON.stringify(allContacts))},[allContacts]);
     

    return (
        <div id="ContactUs" className="section section-6">
            <ThemeProvider theme={customTheme}>
                <Grid container spacing={2} align="center"  style ={styles.body} >
                    <Grid item xs={12} md={6} >
                        <div  style ={styles.formstyles} ><br/>
                        <Typography color="info.light" variant="h3">Contact Us</Typography>
                            <form id="form" onSubmit={handleSubmit}> 
                                
                                <Box   sx={{display: 'grid',  gridTemplateColumns: { sm: '1fr 1fr' ,xs: '1fr'}}}>
                                    <div>
                                        <FormControl sx={{margin:'3%'}}>
                                            <InputLabel  htmlFor="fName" style={styles.labelstyles}>First Name</InputLabel>
                                            <Input type="text" inputRef={fNameRef} id="fName" name="fName"  style={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>
                                    
                                    <div>
                                        <FormControl sx={{margin:'3%'}}>
                                            <InputLabel  htmlFor="lName" style={styles.labelstyles}>Last Name</InputLabel>
                                            <Input  inputRef={lNameRef} id="lName"  name="lName" type="text" style={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl sx={{margin:'3%'}}>
                                            <InputLabel htmlFor="cName" style={styles.labelstyles}>Company Name</InputLabel>
                                            <Input inputRef={cNameRef}  name="cName" type="text" id="cName" style={styles.inputstyles} />
                                            <FormHelperText>*Optional Only</FormHelperText>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl sx={{margin:'3%'}}>
                                            <InputLabel htmlFor="email" style={styles.labelstyles}>Email address</InputLabel>
                                            <Input inputRef={emailRef} id="email" name="email" type="email" style={styles.inputstyles} required/>
                                        </FormControl>
                                    </div>

                                </Box>
                                    <div>
                                        <FormControl sx={{margin:'3%'}}>
                                            <TextareaAutosize  ref={messageRef} id="message"  name="message" style={{ fontSize: '1rem', width:'100%', height:'10vh'}} placeholder="Message Us" required/>
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
                            <Typography color="primary"   variant="h3">Reach Us</Typography>
                            <Typography variant="h6">Contact Number: <br/>+639-xxxx-xxxx</Typography>
                            <Typography variant="h6">Email: <br/><Link href="#">contact@reworx.com</Link></Typography>
                            <Typography variant="h6">Visit our Office:</Typography>
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
