import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import { PrimaryButton } from "./common/PrimaryButton";
import { SecondaryButton } from "./common/SecondaryButton";

export const EditorTopbar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      sx={{
        padding: 1,
        paddingLeft: 3,
        paddingRight: 4,
        backgroundColor: "#FBFBFB"
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{
          padding: 0.1,
          // borderBottom: 2,
          // borderColor: "#EEEEEE"
        }}
      >
        <Typography
          fontSize={11}
          fontWeight={600}
          display="flex"
          alignItems="center"
          color="#004A7C"
        >
          LANGUAGE
        </Typography>
        <Select
          value={1}
          size="small"
          sx={{ fontSize: 13, backgroundColor: '#FDFDFD' }}
          // onChange={handleChange}
        >
          <MenuItem
            value={1}
            sx={{
              fontSize: 12
            }}
          >Relational Algebra</MenuItem>
        </Select>
      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{
          padding: 0,
        }}
      >
        <PrimaryButton size="small" startIcon={<PlayArrowIcon />}>Run Query</PrimaryButton>
        <SecondaryButton size="small" startIcon={<SaveIcon />}>Save</SecondaryButton>
      </Stack>
    </Box>
  );
}
