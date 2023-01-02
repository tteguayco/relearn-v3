import Editor from '@monaco-editor/react';

export const SQLTranslation = () => {
  return (
    <Editor
      defaultLanguage="sql"
      defaultValue="SELECT * FROM table;"
      options={{
        readOnly: false,
        minimap: { enabled: false },
      }}
    />
  );
};
