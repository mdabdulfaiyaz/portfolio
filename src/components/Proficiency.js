import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Grid, LinearProgress } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { SkillBars } from "../portfolio"
import Displaylottie from './Displaylottie';
import process from '../process.json';




const useStyles = makeStyles((theme) => ({
    root: {  
        marginTop: '7rem',
        margin: 'auto', 
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    profiencyBox: { 
        justifyContent: ' center',
        alignItems: 'center',
        marginRight: '-5rem',
        marginLeft: '-30rem', 
        [theme.breakpoints.down('md')]: { 
            marginRight: '11rem',
            marginLeft: '-51rem',
            marginTop: '-2rem'
           
        },
        [theme.breakpoints.down('sm')]: { 
            marginRight: '0rem',
            marginTop: '-2rem', 
            
        },  
        [theme.breakpoints.down('xs')]: { 
            marginRight: '7px',
            marginTop: '-2rem',
        }

    },
    percentageText: {
        float: 'right',
        marginTop: '-1rem',
        fontSize: '13px',
        marginLeft: '-3rem'
    },
    text: {
        margin: 'revert',
        letterSpacing: '1.5px'
    }, 
    process:{ 
        marginTop: '16rem',
        marginRight: '-66rem', 
        [theme.breakpoints.up('xs')]: { 
            marginRight: 'auto',
        }, 
        [theme.breakpoints.up('md')]: { 
            marginRight: '-37rem',
            marginLeft: '5rem'
            
        },
        
    }
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "#6d4c41"
    }
}))(LinearProgress);

function Proficiency() {
    useEffect(()=> {
        Aos.init({duration: 2000});
      }, []);
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2} >
           <Grid data-aos= 'fade-right' xs={12}  className={classes.process} spacing={2} >
           <Displaylottie  animationData={process} />
           </Grid>
                    
           
            <Grid data-aos= 'fade-left' className={classes.profiencyBox} item xs={12} sm={12} md={6} lg={4} xl={3} spacing={2} >
                <Typography variant='h3'>Proficiency </Typography>
                {
                    SkillBars.map(skill => {
                        return <Box className={classes.percentageBox} key={skill.Stack}>
                            <Typography variant='body2' className={classes.text}>
                                <span>{skill.Stack}</span>
                            </Typography>
                            <Typography className={classes.percentageText}>
                                <span>{skill.progressPercentage}%</span>
                            </Typography>
                            <BorderLinearProgress max="100" variant="determinate" value={skill.progressPercentage} />
                        </Box>
                    })
                } 
            </Grid> 

        </Grid>
    )
}

export default Proficiency
