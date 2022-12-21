import { Box } from "@mui/system";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import { DatabaseSelector } from "./DatabaseSelector";
import { SavedQueriesPanel } from "./SavedQueriesPanel";
import { TablesViewer } from "./TablesViewer";

export const DatabaseViewer = () => {
  return (
    <Box
      height="92vh"
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: '#FBFBFB',
      }}
    >
      <ReflexContainer
        orientation="horizontal"
      >
        <ReflexElement
          size={320}
          minSize={100}
          maxSize={800}
        >
          <DatabaseSelector />
          <TablesViewer />
        </ReflexElement>

        <ReflexSplitter style={{
          borderTop: 0,
          borderBottom: 0
        }} />

        <ReflexElement>
          <SavedQueriesPanel />
        </ReflexElement>
      </ReflexContainer>
    </Box>
  )
}
