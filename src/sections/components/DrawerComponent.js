import React, { useState } from 'react'
import { Divider, Drawer, IconButton, List, ListItem, ListItemText, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

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
    // <ListItem onClick={() => setOpenDrawer(false)}>
    //                     <ListItemText>
    //                         <Link to="/" className={classes.link}>Home</Link>
    //                     </ListItemText>
    //                 </ListItem>
    //                 <Divider />
    //                 <ListItem onClick={() => setOpenDrawer(false)}>
    //                     <ListItemText>
    //                         <Link to="/Portfolio" className={classes.link}>Portfolio</Link>
    //                     </ListItemText>
    //                 </ListItem>
    //                 <Divider />
    //                 <ListItem onClick={() => setOpenDrawer(false)}>
    //                     <ListItemText>
    //                         <Link to="/About" className={classes.link}>About</Link>
    //                     </ListItemText>
    //                 </ListItem>
    //                 <Divider />
    //                 <ListItem onClick={() => setOpenDrawer(false)}>
    //                     <ListItemText>
    //                         <Link to="/ContactUs" className={classes.link}>Contact Us</Link>
    //                     </ListItemText>
    //                 </ListItem>
    //                 <Divider />
    //                 <ListItem onClick={() => setOpenDrawer(false)}>
    //                     <ListItemText>
    //                         <Link to="/FAQ" className={classes.link}>FAQ</Link>
    //                     </ListItemText>
    //                 </ListItem>
    //                 <ListItem onClick={() => setOpenDrawer(false)}>
    //                     <ListItemText>
    //                         <Link to="/Example" className={classes.link}>Example</Link>
    //                     </ListItemText>
    //                 </ListItem>
    return (
        <>
            <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>

                </List>
            </Drawer>
            <IconButton className={classes.icon} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent;