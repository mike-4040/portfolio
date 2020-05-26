import React from 'react';
// import { SvgIcon } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function ApigeeIcon() {
  return (
    <SvgIcon color='error'>
      <path d='M 10 10 H 90 V 90 H 10 Z' fill='transparent' stroke='black' />
    </SvgIcon>

    // <SvgIcon {...props}>
    //   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z 22"></path>
    // </SvgIcon>
  );
}
