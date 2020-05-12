import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import EducationCard from './EducationCard';

import education from '../data/education';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const educationSorted = education.sort((a, b) => b.when - a.when);

export default function Education() {
  const classes = useStyles();
  return (
    <article>
      <Typography variant='h2'>Education</Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {educationSorted.map(school => (
            <Grid key={school.school} item sm={12} md={6}>
              <EducationCard school={school} />
            </Grid>
          ))}
        </Grid>
      </div>
    </article>
  );
}
