import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from '../styles/useStyles';

export default function MyBar() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' noWrap>
          Mike Kravtsov - Web Developer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
