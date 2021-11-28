import React, { useState } from 'react'
import { Divider, SwipeableDrawer, IconButton, List, ListItem, ListItemText, ListItemIcon, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        color: 'blue',
        fontSize: '20px',
    },
    icon: {
        color: 'white',
    },
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const linkArray = [
        { text: 'Home', className: 'link', href: '#Home', ref: React.createRef(), icon: <HomeIcon color="secondary" /> },
        { text: 'Services', className: 'link', href: '#Services', ref: React.createRef(),icon: <MiscellaneousServicesIcon color="secondary" /> },
        { text: 'About Us', className: 'link', href: '#AboutUs', ref: React.createRef(), icon: <InfoIcon color="secondary" /> },
        { text: 'Contact Us', className: 'link', href: '#ContactUs', ref: React.createRef(), icon: <EmailIcon color="secondary" /> }
    ];
    return (
        <>
            <SwipeableDrawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {linkArray.map(function (link){
                       return (
                           <>
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    <Link variant="link" className={link.className} color="info.light" href={link.href} ref={link.ref} underline="none">{link.text}</Link>
                                </ListItemText>
                            </ListItem>
                            <Divider color="#606462"/>
                            </>
                    )})}
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.icon} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent;