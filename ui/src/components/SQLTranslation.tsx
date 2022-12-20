import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Box } from "@mui/system";

export const SQLTranslation = () => {
  return (
    <Box>
      <Editor
        width="95vh"
        // height="30vh"
        defaultLanguage="sql"
        defaultValue="SELECT * FROM table;"
        options={{
          readOnly: true,
        }}
      />
    </Box>
  )
}
