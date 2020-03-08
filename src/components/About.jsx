import React from 'react';
import Typography from '@material-ui/core/Typography';

import about from '../data/about';

export default function About() {
  return (
    <article>
      <Typography variant='h2'>
        About
      </Typography>
      {about.map(({text}, index) => 
      <Typography paragraph key={index}>
       {text}
      </Typography>
      )}
    </article>
  );
}
