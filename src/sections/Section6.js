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
        <div id="ContactUs" className="section section-6">
            
        </div>
    )
}

export default Section6;
