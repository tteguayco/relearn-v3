import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Box } from "@mui/system";

export const SQLTranslation = () => {
  return (
      <Editor
        // width="100%"
        // height="35vh"
        defaultLanguage="sql"
        defaultValue="SELECT * FROM table;"
        options={{
          readOnly: false,
          minimap: { enabled: false }
        }}
      />
  )
}
