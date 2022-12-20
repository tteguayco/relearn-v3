import { Box } from "@mui/system";
import { DatabaseViewer } from "../components/DatabaseViewer";
import { QueryEditorPanel } from "../components/QueryEditorPanel";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import 'react-reflex/styles.css';

export const QueryEditor = () => {
  return (
    <Box height="92vh" display="flex" flexDirection="row">
      <ReflexContainer
        orientation="vertical"
      >
        <ReflexElement
          minSize={200}
          maxSize={500}
        >
          <DatabaseViewer />
        </ReflexElement>

        <ReflexSplitter style={{
          borderLeft: 0,
          borderRight: 0
        }} />

        <ReflexElement>
          <QueryEditorPanel />
        </ReflexElement>
      </ReflexContainer>
    </Box>
  );
}