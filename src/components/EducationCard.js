import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        boxShadow: '-2px 1px 82px -50px rgba(0,0,0,0.62)',
        "&:hover": {
            background: 'grey',
            color: 'white'
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
            background: 'black',
        }
    }
});

export default function EducationCard({ education }) {
    const classes = useStyles();


    return (

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title}  >
                    {education.schoolName}
                </Typography>
                <Typography variant="h5" component="h2">
                    {education.subHeader}
                </Typography>
                <Typography className={classes.pos}>
                    {education.duration}
                </Typography>
                <Typography variant="body2" component="p"> 
                    <p>
                        {education.desc}
                        <br />
                        <br />
                        <ul>
                            {
                                education.descBullets ?
                                    education.descBullets.map((desc) => {
                                        return <li key={desc}>{desc}</li>
                                    }) : null
                            }
                        </ul>
                    </p>
                </Typography>
            </CardContent> 
        </Card>
    );
}