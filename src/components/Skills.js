import React from 'react' 
import {  Grid, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt, faJs, faReact, faNodeJs, faNpm, faGitAlt} from '@fortawesome/free-brands-svg-icons';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons' 

const useStyles = makeStyles((theme) => ({
    box:{
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap-reverse', 
         [theme.breakpoints.up('xs')]: { 
            marginRight: '1rem', 
            marginLeft: '-1rem',
            padding: '3rem',
            justifyContent: 'center',
        },
         [theme.breakpoints.down('xs')]: { 
            marginRight: '-2rem', 
            
        }, 
    },
    html: { 
        borderRadius: '5rem',
        backgroundColor: 'white',
        marginLeft: '8px',
        height: '57px',
        display: 'block',
        paddingTop: '19px',
        justifyContent: 'center',
        fontSize: '40px',
        textAlign: 'center',
        width: '75px',
        boxShadow: '10px 11px 34px -13px rgba(0,0,0,0.51)',
        color: '#454242'
    },

    
  }));


function Skills() {
    const classes = useStyles();
    return (
        <Grid xs={12} sm={12} md={8} lg={10} xl={8} spacing={2} className={classes.box}> 

            <Tooltip TransitionComponent={Zoom} className={classes.html} title={"npm"}>
            <span >
                <FontAwesomeIcon icon={faNpm}/>
            </span>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} className={classes.html} title={"nodejs"}>
            <span >
                <FontAwesomeIcon icon={faNodeJs}/>
            </span>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} className={classes.html} title={"git"}>
            <span >
                <FontAwesomeIcon icon={faGitAlt}/>
            </span>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} className={classes.html} title={"firebase"}>
            <span >
                <FontAwesomeIcon icon={faFireAlt}/>
            </span>
            </Tooltip>


            <Tooltip TransitionComponent={Zoom} className={classes.html} title={"Html5"} >
            <span >
                <FontAwesomeIcon icon={faHtml5}/>
            </span>
            </Tooltip> 
            <Tooltip TransitionComponent={Zoom} className={classes.html} title={"Css3"}>
            <span >
                <FontAwesomeIcon icon={faCss3Alt}/>
            </span>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} className={classes.html} title={"JavaScript"}>
            <span >
                <FontAwesomeIcon icon={faJs}/>
            </span>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} className={classes.html} title={"react"}>
            <span >
                <FontAwesomeIcon icon={faReact}/>
            </span>
            </Tooltip>
        </Grid>
    )
}

export default Skills;
