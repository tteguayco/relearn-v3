import { MenuItem, Select, SvgIcon, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export const DatabaseSelector = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        padding: 3,
        backgroundColor: '#FAFCFE',
        borderBottom: '2px solid #EEEEEE'
      }}
    >
      <Typography
          fontSize={12}
          fontWeight={600}
          display="flex"
          alignItems="center"
          color="#808080"
          sx={{
            paddingBottom: 1
          }}
        >
          DATABASE
        </Typography>
        
        <Select
          IconComponent = {KeyboardArrowDownIcon}
          displayEmpty
          renderValue={(value: ReactNode) => {
            return (
              <Box sx={{ display: "flex", gap: 1 }}>
                <SvgIcon color="primary" style={{ marginRight: 5 }}>
                  <FontAwesomeIcon icon={faDatabase} />
                </SvgIcon>
                {/* {value} */}
                Courses
              </Box>
            );
          }}
          sx={{
            paddingLeft: 1,
            background: '#FFFFFE',
            borderRadius: 3,
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#EEEEEE',
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: '#EEEEEE',
            },
          }}
        >
          <MenuItem value={10}>Courses</MenuItem>
        </Select>
    </Box>
  )
}
