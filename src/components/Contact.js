import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {  Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'; 
import Image from '../assets/images/footer.jpg';
import Contactlinks from './Contactlinks';



const useStyles = makeStyles((theme) => ({
  root: { 
    minHeight: '450px',
    minWidth: '100vw',
    margin: 'auto',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5px)', 
    
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
    "&:hover": {
        background: 'grey',
    }
}

}));



const About = () => {
  const classes = useStyles();
  return (

    <Grid container className={classes.root} spacing={0}>
      <Grid className={classes.introduction} item xs={12} sm={12} md={4} lg={4} xl={7} spacing={2}>
          <Typography style={{color: 'black'}}variant='h5'>
                Reach Out to me!
          </Typography>
          <br />
          <Typography variant='body2'>
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
          <br />
           I'm a Full Stack Web Developer | Android App Developer | Open Source Contributor
          </Typography>
          <br />
          <Button className={classes.button}>
          <Typography style={{marginRight: '7px'}}variant='subtitle1'>
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