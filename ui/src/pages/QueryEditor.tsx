import { Box } from "@mui/system";
import { DatabaseViewer } from "../components/DatabaseViewer";
import { QueryEditorPanel } from "../components/QueryEditorPanel";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import 'react-reflex/styles.css';
import { LoadingPlaceholder } from "../components/LoadingPlaceholder";

export const QueryEditor = () => {
  const loading = false;

  return (
    <Box
      height="92vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {loading ? (
        <LoadingPlaceholder />
      ) : (
        <ReflexContainer
          orientation="vertical"
        >
          <ReflexElement
            size={320}
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
      )}
    </Box>
  );
}