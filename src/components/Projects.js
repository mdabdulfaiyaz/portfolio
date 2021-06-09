import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from "@material-ui/core"
import { projects } from "../portfolio"
import ProjectsCard from "./ProjectsCard" 



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    minWidth: '100vw', 
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5px)',
    justifyContent:'center',
    margin: 'auto'

  },
    logo:{
     
        backgroundColor: 'white',
        marginLeft: '-11rem',
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
      <Grid data-aos='fade-up' container className={classes.root} spacing={2}> 
        <Grid className={classes.introduction} item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}> 
               <Box className={classes.textShadow}>
                <FontAwesomeIcon  className={classes.logo} icon={faTasks}/>
                <Typography variant='h4'>Projects</Typography> 
               </Box>
        <br />
        <br />
      </Grid>
        {
          projects.map(data => {
            return (
              <Grid   item xs={12} sm={5} md={5} lg={3} xl={3} spacing={2}>
                <ProjectsCard data={data} />
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
