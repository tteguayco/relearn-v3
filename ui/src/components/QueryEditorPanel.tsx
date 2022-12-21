import Editor from "@monaco-editor/react";
import { Divider, MenuItem, Select, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import { PrimaryButton } from "./common/PrimaryButton";
import { ResultsPanel } from "./ResultsPanel";
import { SecondaryButton } from "./common/SecondaryButton";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import 'react-reflex/styles.css';
import { EditorTopbar } from "./EditorTopbar";

export const QueryEditorPanel = () => {
  return (
    <Box
      height="85vh"
      display="flex"
      flexDirection="column"
    >
      {/* <EditorTabs /> */}
      {/* <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{
          padding: 1,
          borderBottom: 2,
          borderColor: "#EEEEEE"
        }}
      >
        
      </Stack> */}

      <EditorTopbar />
      
      <ReflexContainer orientation="horizontal">
        <ReflexElement
          minSize={50}
        >
          <Editor
            className="monaco-editor-target-language"
            defaultLanguage="javascript"
            defaultValue="// Start writing your queries here"
            options={{
              minimap: { enabled: false }
            }}
          />
          </ReflexElement>

          <ReflexSplitter
            style={{
              borderBottom: 0,
              borderTop: 0
            }}
          />

          <ReflexElement minSize={50}>
            <ResultsPanel />
          </ReflexElement>
      </ReflexContainer>
    </Box>
  );
}
