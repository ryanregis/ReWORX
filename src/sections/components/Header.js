import { AppBar, Toolbar, useMediaQuery, useTheme, Link, ThemeProvider, Box } from '@mui/material';
import customTheme from './Theme';
import ScrollSpy from 'react-scrollspy-navigation';
import React from 'react';
import DrawerComponent from './DrawerComponent';
import useWindowDimensions from './WindowDimensions';
import brandLogo from '../images/ReWORX-BrandLogo.png'



function Header() {
    // eslint-disable-next-line
    let {height, width} = useWindowDimensions();
    let h10 = height/10;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <ThemeProvider theme={customTheme}>
            <AppBar position="sticky">
                {/* <CssBaseline /> */}
                <Toolbar className="header">
                    <img src={brandLogo} alt="ReWORX Brand Logo" className="header-logo"/>
                    
                    {isMobile
                        ? <DrawerComponent />
                        :
                        <Box>
                            <ScrollSpy offsetTop={h10}>
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
