import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {  Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { skillsSection } from "../portfolio";
import Displaylottie from './Displaylottie';
import coding from '../coding.json';
import Skills from './Skills';



const useStyles = makeStyles((theme) => ({
  root: { 
    justifyContent: 'center',
    backgroundColor: '#ffffff', 
    boxShadow: '-5px -17px 23px -25px rgba(0,0,0,0.73)',
    
  },
  introduction: {
    margin: 'auto',
    textAlign: 'center',
    color: '#262323',
    marginTop:' 8rem',
  },
  logos: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    color: '#262323',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1rem',
      marginRight: '3rem',
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '10rem',
      marginRight: '9rem',
    }
  }, 

}));



const About = () => {
  const classes = useStyles();
  
  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);
  return (

    <Grid data-aos='fade-up' container className={classes.root} spacing={0}>
      <Grid className={classes.introduction} item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
        <Typography variant='h4'>
          {skillsSection.title}
        </Typography>
        <br />
        <Typography variant='subtitle1'>
          {skillsSection.subTitle}
        </Typography>
        <br />
        <br />
      </Grid>



      <Grid className={classes.logos} xs={12} sm={10} md={12} lg={3} xl={3} spacing={2} >
        <Skills />
        <br />
        <Typography variant='subtitle1'>
          {
            skillsSection.skills.map(skill => {
              return <p key={skill}>{skill}</p>
            })
          }
        </Typography>
      </Grid>
      <Displaylottie animationData={coding} />
    </Grid>
  )
}

export default About;