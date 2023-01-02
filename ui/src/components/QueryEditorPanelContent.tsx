import Editor from '@monaco-editor/react';
import { ResultsPanel } from './ResultsPanel';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { EditorTopbar } from './EditorTopbar';
import { Box } from '@mui/material';

export const QueryEditorPanelContent = () => {
  return (
    <Box
      height="82vh"
      maxHeight="82vh"
    >
      <EditorTopbar />

      <ReflexContainer orientation="horizontal">
        <ReflexElement minSize={150}>
            <Editor
              className="monaco-editor-target-language"
              defaultLanguage="javascript"
              defaultValue="SELECT
  *
FROM
  table
WHERE
  1 = 1;"
            options={{
                minimap: { enabled: false },
            }}
            />
        </ReflexElement>

        <ReflexSplitter
            style={{
            borderBottom: 0,
            borderTop: 0,
            }}
        />

        <ReflexElement
          minSize={10}
          style={{ overflowY: 'hidden' }}
        >
          <ResultsPanel />
        </ReflexElement>
      </ReflexContainer>
    </Box>
  );
};