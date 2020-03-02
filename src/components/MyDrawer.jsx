import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import useStyles from '../styles/useStyles';

import Menu from './Menu';

export default function MyDrawer() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <Menu />
    </Drawer>
  );
}
