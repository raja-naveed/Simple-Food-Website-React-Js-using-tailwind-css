import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../assets/island1.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 340,
  },
    title: {
    fontSize: "2rem",
    color: "#fff",
    fontWeight: "bold",
    },
    desc : {
    fontSize: "1.1rem",
    color: "#ddd",
    },
});

export default function ImageCard({place}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
           {place.description}
          </Typography>
        </CardContent>
    </Card>
  );
}
