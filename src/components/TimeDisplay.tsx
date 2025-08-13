import React from 'react';
import { Typography, Tooltip } from '@mui/material';
import { getRelativeTime, getFullTimestamp } from '../utils/timeUtils';

interface TimeDisplayProps {
  timestamp: number;
  variant?: 'body2' | 'subtitle2' | 'caption';
  color?: string;
  sx?: object;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ 
  timestamp, 
  variant = 'subtitle2', 
  color = 'text.secondary',
  sx = {}
}) => {
  const relativeTime = getRelativeTime(timestamp);
  const fullTimestamp = getFullTimestamp(timestamp);

  return (
    <Tooltip 
      title={fullTimestamp} 
      arrow
      enterDelay={2000}
      disableHoverListener={false}
      PopperProps={{
        disablePortal: true,
      }}
    >
      <Typography 
        variant={variant} 
        color={color} 
        component="span"
        sx={{ 
          cursor: 'default',
          display: 'inline-block',
          '&:hover': {
            color: 'primary.main',
          },
          transition: 'color 0.2s ease',
          ...sx 
        }}
      >
        {relativeTime}
      </Typography>
    </Tooltip>
  );
};

export default TimeDisplay;