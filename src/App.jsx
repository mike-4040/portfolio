import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import useStyles from './styles/useStyles';

import MyBar from './components/MyBar';
import MyDrawer from './components/MyDrawer';
import Content from './components/Content';

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MyBar classes={classes} />
      <MyDrawer classes={classes} />
      <Content classes={classes}/>
    </div>
  );
}
