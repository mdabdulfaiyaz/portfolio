import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,  Typography,  Collapse } from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar';




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
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem', 
     fontSize: '45px'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 2rem',
      fontSize: '30px', 
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 2rem',
      fontSize: '20px',
    },
  }
}))



const Nav = () => {
  const classes = useStyles(); 
  const [checked, setchecked] = useState(false) 

  useEffect(() => {
    setchecked(true);
  }, []) 

  return (
    <>

      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
          <Toolbar>
            <Typography variant="h6"  className={classes.logo}>
              Mohammad Abdul Faiyaz
            </Typography>    
          </Toolbar>
        </Collapse>
      </AppBar> 

    </>

  );
};


export default Nav;