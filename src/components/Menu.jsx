import React from 'react';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

import { menuItem } from '../utils/utils';

export default function Menu() {
  const menuItems = [
    new menuItem('About', 'about', (<PersonRoundedIcon />)),
    new menuItem('Projects', 'projects', (<CodeRoundedIcon />)),
    new menuItem('Education', 'education', (<AccountBalanceRoundedIcon />)),
    new menuItem('Contact', 'contact', (<ContactMailRoundedIcon />))
  ];

  return (
    <List>
      {menuItems.map(item => (
        <ListItem button key={item.name}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <Link href={`#${item.id}`} color='inherit'>
            <ListItemText primary={item.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
