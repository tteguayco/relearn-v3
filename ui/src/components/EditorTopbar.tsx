import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import { PrimaryButton } from "./common/PrimaryButton";
import { SecondaryButton } from "./common/SecondaryButton";

export const EditorTopbar = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{
          padding: 0.1,
          margin: 1.5,
          marginLeft: 3,
          // borderBottom: 2,
          // borderColor: "#EEEEEE"
        }}
      >
        <Typography
          fontSize={12}
          fontWeight={600}
          display="flex"
          alignItems="center"
        >
          LANGUAGE
        </Typography>
        <Select
          value={1}
          size="small"
          sx={{ fontSize: 13 }}
          // onChange={handleChange}
        >
          <MenuItem value={1}>Relational Algebra</MenuItem>
        </Select>
      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{
          padding: 0,
          margin: 1.5,
          marginRight: 4
        }}
      >
        <PrimaryButton startIcon={<PlayArrowIcon />}>Run Query</PrimaryButton>
        <SecondaryButton startIcon={<SaveIcon />}>Save</SecondaryButton>
      </Stack>
    </Box>
  );
}
