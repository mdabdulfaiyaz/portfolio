import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {  Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'; 
import Image from '../assets/images/footer.jpg';
import Contactlinks from './Contactlinks';
import brown from '@material-ui/core/colors/brown'





const textcolor = brown[900]
const useStyles = makeStyles((theme) => ({
  root: { 
    minHeight: '450px',
    minWidth: '100vw',
    margin: 'auto',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5px)', 
    button:{
      textTransform: 'none',
      color: 'red'
    }
  },
  introduction: { 
    color: '#ffffff',
    marginTop:' 7rem', 
    textAlign: 'left',
    margin: 'auto'
  },
  logo: { 
    fontFamily:'Brush Script MT',
    color: '#ffffff', 
    transform: 'rotate(-10deg)', 
    marginTop: '18rem', 
    fontSize: '40px',
    [theme.breakpoints.down('sm')]: {
        marginLeft: '15rem',
        marginTop: '7rem', 
        
      },
      [theme.breakpoints.down('xs')]: { 
        marginLeft: '5rem',  
      },
  },
  
  button: {
    backgroundColor: '#ffffff',
    letterSpacing: '2px',
    color: 'black',
    textTransform: 'none',
    "&:hover": {
        background: 'grey',
    },
    "&$buttonDisabled": {
      color: textcolor
  }
},
  buttonDisabled: {},


}));



const About = () => {
  const classes = useStyles();
  return (

    <Grid container className={classes.root} spacing={0}>
      <Grid className={classes.introduction} item xs={10} sm={10} md={4} lg={4} xl={7} spacing={2}>
          <Typography style={{color: 'black'}}variant='h5'>
                Reach Out to me!
          </Typography>
          <br />
          <Typography variant='h6'> 
          Discuss a project or just want to say hi? My inbox is open for all.
          <br />
           I'm a Full Stack Web Developer.
          </Typography>
          <br />
          
          <Button disabled classes={{ root: classes.button, disabled: classes.buttonDisabled }}>
             <Typography style={{marginRight: '7px'}}  variant='subtitle1'>
                    Hyderabad, India 
             </Typography>
                <span><FontAwesomeIcon  icon={faMapMarkerAlt}/></span> 
          </Button>
          
          
          <br />
          <br /> 
      <Contactlinks />
      </Grid>
      <Grid className={classes.logo} xs={12} sm={12} md={4} lg={4} xl={3} spacing={2} >
    <h6 className={classes.logos}>
          Mohammad Abdul Faiyaz
        </h6>
      <br /> 
    </Grid> 
    </Grid> 
  )
}

export default About;