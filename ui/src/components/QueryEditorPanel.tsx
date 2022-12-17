import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import { PrimaryButton } from "./common/PrimaryButton";
import { ResultsPanel } from "./ResultsPanel";
import { SecondaryButton } from "./common/SecondaryButton";

export const QueryEditorPanel = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Editor
        width="100vh"
        height="50vh"
        defaultLanguage="javascript"
        defaultValue="// Start writing your queries here"
      />

      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginLeft: 2
        }}
      >
        <PrimaryButton startIcon={<PlayArrowIcon />}>Run Query</PrimaryButton>
        <SecondaryButton startIcon={<SaveIcon />}>Save</SecondaryButton>
      </Stack>

      <Divider
        sx={{
          marginTop: 5,
          marginBottom: 2,
          marginLeft: 2,
        }}
      />
      
      <ResultsPanel />
    </Box>
  );
}
