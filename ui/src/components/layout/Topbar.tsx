import { BorderBottom } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react';

export const Topbar = () => {
  return (
    <Box
      height="7vh"
      display="flex"
      flexDirection="row"
      alignContent="center"
      alignItems="center"
      style={{
        paddingLeft: 30,
        backgroundColor: '#00308F',
        backgroundImage: 'linear-gradient(to right, #00308F, #0066b2)',
        borderBottom: '2px solid #EEEEEE'
      }}
    >
      <img
        src="relearn.png"
        width={180}
        height={35}
      />
    </Box>
  )
}
