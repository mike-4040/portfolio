import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';

export const contacts = [
  {
    name: 'phone',
    contact: '619.578.4200',
    icon: <PhoneRoundedIcon />
  },
  {
    name: 'email',
    contact: 'mike4040@me.com',
    icon: <MailOutlineRoundedIcon />
  },
  {
    name: 'github',
    contact: 'https://github.com/mike-4040',
    icon: <GitHubIcon />
  },
  {
    name: 'linkedin',
    contact: 'https://www.linkedin.com/in/mike4040/',
    icon: <LinkedInIcon />
  }
];
