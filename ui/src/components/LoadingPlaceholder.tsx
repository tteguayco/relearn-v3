import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const LoadingPlaceholder = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};
