import {
  IconButton,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export const DatabaseSelector = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{
          marginTop: 1,
          marginRight: 1,
        }}
      >
        <Tooltip title="Create New Database">
          <IconButton aria-label="create-db" size="small">
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Existing Database">
          <IconButton aria-label="delete-db" size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Export Existing Database">
          <IconButton aria-label="download-db" size="small">
            <DownloadForOfflineIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Stack>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          paddingLeft: 3,
          paddingRight: 3,
          paddingBottom: 3,
          backgroundColor: '#FAFCFE',
          borderBottom: '2px solid #EEEEEE',
        }}
      >
        <Typography
          fontSize={12}
          fontWeight={600}
          display="flex"
          alignItems="center"
          color="#808080"
          sx={{
            paddingBottom: 1,
          }}
        >
          DATABASE
        </Typography>

        <Select
          IconComponent={KeyboardArrowDownIcon}
          displayEmpty
          renderValue={() => {
            return (
              <Box sx={{ display: 'flex', gap: 1 }}>
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
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#EEEEEE',
            },
          }}
        >
          <MenuItem value={10}>Courses</MenuItem>
        </Select>
      </Box>
    </>
  );
};
