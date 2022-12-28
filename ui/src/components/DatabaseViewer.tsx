import { Box } from '@mui/system';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { SavedQueriesPanel } from './SavedQueriesPanel';
import { TablesViewer } from './TablesViewer';

export const DatabaseViewer = () => {
  return (
    <Box
      height="92vh"
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: '#FAFCFE',
      }}
    >
      {/* <DatabaseSelector /> */}

      <ReflexContainer orientation="horizontal">
        <ReflexElement size={320} minSize={100} maxSize={800}>
          <TablesViewer />
        </ReflexElement>

        <ReflexSplitter
          style={{
            borderTop: 0,
            borderBottom: 0,
          }}
        />

        <ReflexElement minSize={100}>
          <SavedQueriesPanel />
        </ReflexElement>
      </ReflexContainer>
    </Box>
  );
};
