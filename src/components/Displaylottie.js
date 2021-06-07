import React, { useEffect, useRef } from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import lottie from 'lottie-web';



const useStyles = makeStyles((theme) => ({
   root:{ 
       marginRight: '-4rem', 
       [theme.breakpoints.down('sm')]: {
        marginLeft:'0rem'
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft:'0rem'
    },
    [theme.breakpoints.up('md')]: {
        marginLeft:'1rem',
        marginTop:'-7rem',
        
    },
   }
}));
function Displaylottie({animationData}) { 
    const container = useRef(null);
    const classes = useStyles();

    useEffect(() => {
        lottie.loadAnimation({ 
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            resizeMode:'cover', 
            animationData: animationData,
        })
    }) 

    return <Grid  className={classes.root} ref={container} item xs={12}  sm={12} md={8} lg={4} xl={4} spacing={2}></Grid> 
}

export default Displaylottie;
