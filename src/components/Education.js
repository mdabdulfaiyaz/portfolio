import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from "@material-ui/core"
import { educationInfo } from "../portfolio";
import EducationCard from "./EducationCard" 



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    minWidth: '100vw', 
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5px)',
    justifyContent:'center',
    margin: 'auto'

  },
    logo:{
     
        backgroundColor: 'white',
        marginLeft: '-13rem',
        height: '25px', 
        textAlign: 'center', 
        color: '#454242',
        fontSize: '40px',
        marginBottom: '-33px', 

    }, 
      introduction: {
        margin: 'auto',
        textAlign: 'center',
        color: '#262323',
        marginTop:' 8rem',
      }, 
      textShadow:{ 
        width: '200px',
        margin: 'auto',
        textShadow: '9px 9px 9px rgba(150, 150, 150, 1)',
      },
      
}));



export default function Home() {
  const classes = useStyles();
  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);
  return (
    <>
      <Grid data-aos='fade-left' container className={classes.root} spacing={2}> 
        <Grid className={classes.introduction} item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}> 
               <Box className={classes.textShadow}>
                <FontAwesomeIcon  className={classes.logo} icon={faBookOpen}/>
                <Typography variant='h4'>Education</Typography> 
               </Box>
        <br />
        <br />
      </Grid>
        {
          educationInfo.map(info => {
            return (
              <Grid  data-aos='fade-right' item xs={12} sm={12} md={12} lg={5} xl={3} spacing={2}  key={info.schoolName}>
                <EducationCard education={info} />
              </Grid>
            )
          })
        } 
        <br />
        <br /> 
      </Grid>

    </>
  );
}
