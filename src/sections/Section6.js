import React, { useRef, useState, useEffect } from 'react';
import { FormControl, Input, InputLabel, FormHelperText, ThemeProvider, Typography, Link, Button, Grid, Box } from '@mui/material';
import customTheme from './components/Theme';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
    body: {
        height: '80%',
        padding: '3% 5%',
    },
    formstyles: {
        height: '100%',
        background: '#9FDC7F',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    reachstyles: {
        height: '100%',
        border: '5px solid #9FDC7F',
        borderRadius: '20px',
        padding: '2%',
        backgroundColor: '#FFFEFF !important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
    },
    inputstyles: {
        backgroundColor: '#FFFEFF',

        borderRadius: '5px',
        padding: '0.5rem',
        fontWeight: '100',
        fontSize: '1rem'
    },
    labelstyles: {
        color: 'black',
        fontWeight: '100',
        fontSize: '100%',
    },
    textfieldstyles: {
        backgroundColor: '#FFFEFF !important',
        color: '#363636 !important',
        fontSize: '0.75rem !important',
        fontWeight: '100 !important',
        borderRadius: '5px',
    }
}));

let productData = localStorage.getItem('contact') ? JSON.parse(localStorage.getItem('contact')) : [];
function Section6() {
    const styles = useStyles();
    const fNameRef = useRef(null);
    const lNameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const cNameRef = useRef(null);
    const [id, setID] = useState(Date.now);
    const [allContacts, setallContacts] = useState(productData);

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
        fNameRef.current.value = null;
        lNameRef.current.value = null;
        emailRef.current.value = null;
        messageRef.current.value = null;
        setID(Date.now);
    };
    useEffect(() => { localStorage.setItem("contact", JSON.stringify(allContacts)) }, [allContacts]);


    return (
        <div id="ContactUs" className="section section-6">
            <ThemeProvider theme={customTheme}>
                <Box sx={{width: '100%', height: '90vh'}} display="flex" justifyContent="center" alignItems="center">
                    <Grid container spacing={2} align="center" className={styles.body} >
                        <Grid item xs={12} md={6}>
                            <div className={styles.formstyles} ><br />
                                <Typography color="info.light" sx={{ textShadow: '0px 0px 10px #363636, 0px 0px 10px #363636, 0px 0px 10px #363636' }} variant="h3">Contact Us</Typography>
                                <form id="form" onSubmit={handleSubmit}>

                                    <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr', xs: '1fr' } }}>
                                        <div>
                                            <FormControl sx={{ margin: '3%' }}>
                                                <InputLabel htmlFor="fName" className={styles.labelstyles}>First Name</InputLabel>
                                                <Input type="text" inputRef={fNameRef} id="fName" name="fName" className={styles.inputstyles} required />
                                            </FormControl>
                                        </div>

                                        <div>
                                            <FormControl sx={{ margin: '3%' }}>
                                                <InputLabel htmlFor="lName" className={styles.labelstyles}>Last Name</InputLabel>
                                                <Input inputRef={lNameRef} id="lName" name="lName" type="text" className={styles.inputstyles} required />
                                            </FormControl>
                                        </div>

                                        <div>
                                            <FormControl sx={{ margin: '3%' }}>
                                                <InputLabel htmlFor="cName" className={styles.labelstyles}>Company Name</InputLabel>
                                                <Input inputRef={cNameRef} name="cName" type="text" id="cName" className={styles.inputstyles} />
                                                <FormHelperText>*Optional Only</FormHelperText>
                                            </FormControl>
                                        </div>

                                        <div>
                                            <FormControl sx={{ margin: '3%' }}>
                                                <InputLabel htmlFor="email" className={styles.labelstyles}>Email address</InputLabel>
                                                <Input inputRef={emailRef} id="email" name="email" type="email" className={styles.inputstyles} required />
                                            </FormControl>
                                        </div>

                                    </Box>
                                    <div>
                                        <FormControl sx={{ width: 'clamp(300px,35vmax, 1000px)' }}>
                                            <InputLabel className={styles.labelstyles} htmlFor="message">Send Your Message</InputLabel>
                                            <Input inputRef={messageRef} id="message" name="message" type="text" className={styles.inputstyles} multiline minRows='2' maxRows='4' required />
                                        </FormControl>
                                    </div>

                                    <div >
                                        <Button sx={{ m: 4 }} variant='contained' color='info' type="submit">Submit</Button>
                                        <Button sx={{ m: 4 }} variant='contained' color='error' type="reset">Reset</Button>
                                    </div>


                                </form>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} >

                            <div className={styles.reachstyles} >
                                <Typography color="primary" variant="h3">Reach Us</Typography>
                                <Typography variant="body6" color="InfoText">Contact Number: +639-xxxx-xxxx</Typography>
                                <Typography variant="body6" color="InfoText">Email: <Link href="#" underline="none">contact@reworx.com</Link></Typography>
                                <Typography variant="body6" color="InfoText">Visit our Office:</Typography>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722.346359775843!2d120.97001912239107!3d14.589205742170764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca3d1375e1fb%3A0x49ebfa658c0ba08!2sIntramuros%2C%20Manila%2C%201002%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1637990544085!5m2!1sen!2sph" width="100%" height="250px" style={{ border: "5px solid #178260" }} loading="lazy" title="maps"></iframe>

                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Section6;
