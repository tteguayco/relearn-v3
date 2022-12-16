import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { ResultsPanel } from "./ResultsPanel";

export const QueryEditorPanel = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Editor
        width="100vh"
        height="50vh"
        defaultLanguage="javascript"
        defaultValue="// Start writing your queries here"
      />

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
