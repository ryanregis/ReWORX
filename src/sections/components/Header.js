import { AppBar, Toolbar, useMediaQuery, useTheme, Link, ThemeProvider, Box, Button } from '@mui/material';
import customTheme from './Theme';
import ScrollSpy from 'react-scrollspy-navigation';
import React from 'react';
import DrawerComponent from './DrawerComponent';
import brandLogo from '../images/ReWORX-BrandLogo.png'



function Header() {
    // eslint-disable-next-line
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <ThemeProvider theme={customTheme}>
            <AppBar position="fixed">
                {/* <CssBaseline /> */}
                <Toolbar className="header">
                    <Button href="#Home">
                        <img src={brandLogo} alt="ReWORX Brand Logo" className="header-logo"/>
                    </Button>
                    
                    
                    {isMobile
                        ? <DrawerComponent />
                        :
                        <Box>
                            <ScrollSpy>
                                <Link variant="link" className="link" color="info.light" href="#Home" ref={React.createRef()} underline="none">Home</Link>
                                <Link variant="link" className="link" color="info.light" href="#Services" ref={React.createRef()} underline="none">Services</Link>
                                <Link variant="link" className="link" color="info.light" href="#AboutUs" ref={React.createRef()} underline="none">About Us</Link>
                                <Link variant="link" className="contactLink" color="info.light" href="#ContactUs" ref={React.createRef()} underline="none">Contact Us</Link>
                            </ScrollSpy>
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header;
