import React from 'react' 
import { Button, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';



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

        <Box style={{marginLeft: '-10px'}}>
            <Button className={classes.root}>
                <InstagramIcon />
            </Button>
            <Button className={classes.root}>
                <FacebookIcon />
            </Button>
            <Button className={classes.root}>
                <TwitterIcon />
            </Button>
            <Button className={classes.root}>
                <GitHubIcon />
            </Button>
        </Box>
        
    )
}

export default Contactlinks;
