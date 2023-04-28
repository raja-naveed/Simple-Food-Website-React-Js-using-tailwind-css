import React from 'react'
import { makeStyles } from '@material-ui/core'
import ImageCard from './ImageCard';
import places from '../static/places'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
}));

const Placetovisit = () => {
    const classes = useStyles();
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[0]}/>
      <ImageCard place={places[1]}/>

    </div>
  )
}

export default Placetovisit
