import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box} from '@mui/system';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';
//lightgreen background, two divs, two layered
const styles = {
cardMod: {
  borderRadius: '20px',
  boxShadow: '5px 5px 5px 5px black',
  marginBottom: '30px',
},
body: {
  padding: '20px',
},
media: {
  height: "200",
  
},
overlay: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  bgcolor: 'rgba(0, 0, 0, 0.54)',
  color: 'white',
  padding: '10px',
  textShadow: '0px 0px 10px #363636, 0px 0px 10px #363636, 0px 0px 10px #363636',
}
}


const Section4 = () => {
    return (
    <div style={styles.body}>
      <h1>Section 4</h1>
        <Grid container align="center" >
            <Grid item xs={12} md={6} order={{xs:2,md:1}}>
                <Card sx={{ maxWidth: 400}} style={styles.cardMod}>
                    <CardActionArea>
                      <Box sx={{ position: 'relative' }}>
                          <CardMedia component="img" height='230' image={require('./images/section4-virtualassistance.jpeg').default} styles={styles.media}/>
                        <Box sx={styles.overlay}>
                          <Typography variant="h5">Virtual Assistance</Typography>
                          <Typography variant="body2">Need some remote help?<br/> ReWORX has virtual assistants ready to do your tasks.</Typography>
                        </Box>
                      </Box>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} order={{xs:3,md:2}}>
                <Card sx={{ maxWidth: 400 }} style={styles.cardMod}>
                <CardActionArea>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia component="img" height='230' image={require('./images/section4-dataprocessing.jpeg').default} styles={styles.media}/>
                      <Box sx={styles.overlay}>
                        <Typography variant="h5">Data Processing</Typography>
                        <Typography variant="body2">Have some unrganized data entries or transcription <br/> projects?  Let ReWORX handle it.</Typography>
                      </Box>
                  </Box>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={12} order={{xs:1,md:3}}>
                  <h1>Services</h1>
            </Grid>
            <Grid item xs={12} md={6} order={{xs:4,md:4}}>
                <Card sx={{ maxWidth: 400 }} style={styles.cardMod}>
                <CardActionArea>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia component="img" height='230' image={require('./images/section4-crypto.jpeg').default} styles={styles.media}/>
                      <Box sx={styles.overlay}>
                        <Typography variant="h5">Cryptocurrency</Typography>
                        <Typography variant="body2">Want advice regarding current crypto trends? <br/> ReWORX's co-founder Ralph Santolorin has a series of webinars just for you.</Typography>
                      </Box>
                  </Box>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}  order={{xs:5,md:5}}>
                <Card sx={{ maxWidth: 400 }} style={styles.cardMod}>
                <CardActionArea>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia component="img" height='230' image={require('./images/section4-webdev.jpeg').default} styles={styles.media}/>
                      <Box sx={styles.overlay}>
                        <Typography variant="h5">Web Development</Typography>
                        <Typography variant="body2">Got a website idea that need realization? <br/> ReWORX can do it for you.</Typography>
                      </Box>
                  </Box>
                </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    
 
    </div>
    )
}
export default Section4;