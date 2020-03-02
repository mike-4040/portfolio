import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import Menu from './Menu';

export default function MyDrawer(props) {

  return (
    <Drawer
      className={props.classes.drawer}
      variant='permanent'
      classes={{
        paper: props.classes.drawerPaper
      }}
    >
      <div className={props.classes.toolbar} />
      <Menu />
    </Drawer>
  );
}
