import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const SavedQueriesPanel = () => {
  return (
    <Box
      style={{
        paddingTop: 20,
        paddingLeft: 30,
      }}
    >
      <Typography
        fontSize={12}
        fontWeight={600}
        display="flex"
        alignItems="center"
        color="#808080"
      >
        SAVED QUERIES
      </Typography>
    </Box>
  );
};
