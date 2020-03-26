import React from 'react';

import Box from '@material-ui/core/Box';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

export default function SkillLevel({level}) {
return (
  <Box m={1}>
    <StarRoundedIcon />
    {level >= 2 ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
    {level === 3 ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
  </Box>
);
}
