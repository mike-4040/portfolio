import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import MyCard from './MyCard';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function Projects() {

  const classes = useStyles();
  return (
    <article>
      <Typography variant='h2'>
        Projects
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={6} md={4}>
            <MyCard />
          </Grid>
          <Grid item sm={6} md={4}>
            <MyCard />
          </Grid>
          <Grid item sm={6} md={4}>
            <MyCard />
          </Grid>
        </Grid>
      </div>
    </article>
  );
}
