import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { contacts } from '../data/contacts';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <article>
      <Typography variant='h2'>Contact</Typography>
      <Card className={classes.root}>
        <CardContent>
          <List>
            {contacts.map(contact => (
              <ListItem key={contact.name}>
                <ListItemAvatar>
                  <Avatar>
                    {contact.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact.contact} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </article>
  );
}
