import React from 'react'
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { socialLinks } from '../portfolio'



const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '5rem',
        backgroundColor: 'white',
        marginLeft: '5px',
        height: '60px'
    },

}));

function Contactlinks() {
    const classes = useStyles();
    return (
        <>


            <Box style={{ marginLeft: '-10px' }}>
                <Link href={socialLinks.instagram} >
                <Button  className={classes.root}>
                    <InstagramIcon  />
                </Button>
                </Link>
                <Link href={socialLinks.facebook}>
                <Button className={classes.root}>
                    <FacebookIcon />
                </Button>
                </Link>
                
                <Link href={socialLinks.twitter}>
                <Button className={classes.root}>
                    <TwitterIcon />
                </Button>
                </Link>
                <Link href={socialLinks.github}>
                <Button className={classes.root}>
                    <GitHubIcon />
                </Button>
                </Link>
            </Box> 

        </>
    )
}

export default Contactlinks;
