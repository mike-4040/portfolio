import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import SvgIcon from '@material-ui/core/SvgIcon';


import { makeStyles } from '@material-ui/core/styles';

import SkillLevel from './SkillLevel';

import skills from '../data/skills';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  extendedIcon: {
    margin: theme.spacing(1)
  }
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <article>
      <Typography variant='h2'>Skills</Typography>
      <Card className={classes.root}>
        <CardContent>
          {skills.map(skill => (
            <Fab
              variant='extended'
              className={classes.extendedIcon}
              key={skill.skill}
            >
              {skill.icon && (
                <SvgIcon className={classes.extendedIcon} color='primary'>
                  <path d={skill.icon} />
                </SvgIcon>
              )}
              {skill.skill}
              <SkillLevel level={skill.level} />
            </Fab>
          ))}
        </CardContent>
      </Card>
    </article>
  );
}
