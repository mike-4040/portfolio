import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import owner from '../data/owner';

export default function MyBar(props) {

  return (
    <AppBar position='fixed' className={props.classes.appBar}>
      <Toolbar>
        <Typography variant='h6' noWrap>
          {`${owner.name} - ${owner.title}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
