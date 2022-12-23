import Editor from "@monaco-editor/react";
import { Box } from "@mui/system";
import { ResultsPanel } from "./ResultsPanel";
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
            defaultValue=""
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
