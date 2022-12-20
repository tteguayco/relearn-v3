import Editor from "@monaco-editor/react";
import { Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import { PrimaryButton } from "./common/PrimaryButton";
import { ResultsPanel } from "./ResultsPanel";
import { SecondaryButton } from "./common/SecondaryButton";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import 'react-reflex/styles.css'

export const QueryEditorPanel = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Stack
        direction="row"
        // justifyContent="flex-end"
        spacing={2}
        sx={{
          margin: 2
        }}
      >
        <PrimaryButton startIcon={<PlayArrowIcon />}>Run Query</PrimaryButton>
        <SecondaryButton startIcon={<SaveIcon />}>Save</SecondaryButton>
      </Stack>      
      
      <ReflexContainer orientation="horizontal">
        <ReflexElement>
          <Editor
            width="100vh"
            defaultLanguage="javascript"
            defaultValue="// Start writing your queries here"
          />
          </ReflexElement>

          <ReflexSplitter style={{
            borderBottom: 0,
            borderTop: 0
          }} />

          <ReflexElement>
            <ResultsPanel />
          </ReflexElement>
      </ReflexContainer>
    </Box>
  );
}
