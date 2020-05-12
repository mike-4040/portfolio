import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 150
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function EducationCard({school}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h6' gutterBottom={true}>
          {school.when}
        </Typography>
        <Typography variant='h5' gutterBottom={true}>
          {school.result}
        </Typography>
        <Typography variant='subtitle2'>{school.school}</Typography>
      </CardContent>
    </Card>
  );
}
