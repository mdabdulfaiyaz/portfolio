import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Box, Typography, IconButton, Menu, MenuItem, Collapse } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import MoreIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'none',

  },
  sectionDesktop: {
    display: "none",
    padding: '0 10rem',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      padding: '0 12rem',
    },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    }
  },
  logo: {
    padding: '0 15rem',
    cursor: 'pointer',
    color: "#262323",
    fontFamily: 'Brush Script MT',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2rem',
      fontSize: '17px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem',
    },
  }
}))



const Nav = () => {
  const classes = useStyles();
  const [resMenuAnchorEl, setresMenuAnchorEl] = useState(null)
  const [checked, setchecked] = useState(false)
  const isResMenu = Boolean(resMenuAnchorEl);

  useEffect(() => {
    setchecked(true);
  }, [])

  const openResMenu = (e) => {
    setresMenuAnchorEl(e.currentTarget)

  }

  const closeResMenu = () => {
    setresMenuAnchorEl(null)
  }

  const responsiveMenu = (
    <Menu anchorEl={resMenuAnchorEl} id='responsive-menu' keepMounted open={isResMenu}>
      <MenuItem onClick={closeResMenu} to='/'>
        Home
         </MenuItem>
      <MenuItem onClick={closeResMenu} to='/About'>
        About
         </MenuItem>
      <MenuItem onClick={closeResMenu} to='/Contact'>
        Contact
         </MenuItem>
    </Menu>
  )

  return (
    <>

      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }} className={classes.logo}>
              Mohammad Abdul Faiyaz
          </Typography>
            <Box className={classes.sectionDesktop}>
              <Button to='/'>Home</Button>
              <Button to='/About'>About</Button>
              <Button to='/Contact'>Contact</Button>
            </Box>
            <IconButton color="inherit" onClick={openResMenu} className={classes.sectionMobile}>
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </Collapse>
      </AppBar>

      {responsiveMenu}

    </>

  );
};


export default Nav;