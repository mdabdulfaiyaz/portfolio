import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from "@material-ui/core"
import thinking from '../thinking.json'
import { greetings } from "../portfolio";
import Displaylottie from './Displaylottie'
import Image from '../assets/images/background.jpg'; 
import Contactlinks from './Contactlinks' 


const useStyles = makeStyles((theme) => ({
  root: { 
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5px)',
    clipPath: 'polygon(0 0, 100% 0%, 100% 88%, 0 76%)',

  },
  introduction: {
    margin: 'auto', 
     [theme.breakpoints.down('sm')]: {
      marginBottom: '20rem',
      color: '#262323'
    }, 
  }
}));



export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Displaylottie  animationData={thinking} />
        <Grid className={classes.introduction} item xs={10} sm={10} md={4} lg={4} xl={3} spacing={2}>
          <Typography variant='h4'>
            {greetings.title + " "}
          </Typography>
          <Typography variant='subtitle1'>
            {greetings.description}
          </Typography>
          <br />
          <br />
          <Contactlinks />
        </Grid>
      </Grid> 
    </>
  );
}
