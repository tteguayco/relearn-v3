import Editor from '@monaco-editor/react';
import { Box } from '@mui/system';
import { useRef } from 'react';
import { useResize } from '../hooks/useResize';

export const SQLTranslation = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const { size } = useResize(containerRef);

  return (
    <Box
      ref={containerRef}
      sx={{ height: '90%' }}
    >
      <Editor
        height={size?.height}
        defaultLanguage="sql"
        defaultValue="SELECT * FROM table;"
        options={{
          readOnly: true,
          minimap: { enabled: false },
        }}
      />
    </Box>
  );
};
