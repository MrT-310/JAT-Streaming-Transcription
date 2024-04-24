import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', }}>
        <Box sx={{ width: '100%', mr: 1, }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
          <Typography variant="body2" sx={{padding: "0.25rem"}}>{props.value}%</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };
  
  export default function LinearWithValueLabel({ progress }) {
    return (
      <Box sx={{ width: '60%', margin: "0 auto", padding: "1rem" }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    );
  }
  
  LinearWithValueLabel.propTypes = {
    progress: PropTypes.number.isRequired,
  };