import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';

import bamazon from '../static/bamazon.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MyCard({project}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bamazon}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {project.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant='contained'
          color='default'
          className={classes.button}
          startIcon={<GitHubIcon />}
          href={project.repoURI}
          target='_blank'
        >
          repo
        </Button>
        <Button
          variant='contained'
          color='default'
          className={classes.button}
          startIcon={<LanguageRoundedIcon />}
          href={project.deployURI}
          target='_blank'
        >
          demo
        </Button>
      </CardActions>
    </Card>
  );
}
