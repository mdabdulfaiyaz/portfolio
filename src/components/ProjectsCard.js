import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        boxShadow: '-2px 1px 82px -50px rgba(0,0,0,0.62)',
        "&:hover": {
            boxShadow: '-1px 1px 86px -30px rgba(0,0,0,0.75)',
        }
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#454242',
        color: 'white',
        "&:hover": {
            background: '#6d4c41',
        }
    }
});

export default function ProjectCard({ data }) {
    const classes = useStyles();


    return (

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {data.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {data.desc}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    data.link ?
                        <Button 
                            className={classes.button}
                            href={data.link.url}
                            target="_blank"
                        >
                            <span>
                                <FontAwesomeIcon className={classes.logo} icon={faLongArrowAltRight} />
                            </span>
                            <span >
                                {data.link.name}
                            </span>
                        </Button> : null
                }
            </CardActions>
        </Card>
    );
}