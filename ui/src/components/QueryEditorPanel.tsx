import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box } from '@mui/system';
import { ResultsPanel } from './ResultsPanel';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import { EditorTopbar } from './EditorTopbar';
import { IconButton, Stack, Tab, Tabs, tabsClasses, Typography } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CloseIcon from '@mui/icons-material/Close';
import 'react-reflex/styles.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      height="100%"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

export const QueryEditorPanel = () => {
  const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);

  const handleSelectedSheetChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedSheetIndex(newValue);
  };

  return (
    <Box
      height="85vh"
      display="flex"
      flexDirection="column"
    >
      <Stack
        height={40}
        direction="row"
        justifyContent="start-end"
        spacing={0}
        sx={{
          borderBottom: 2,
          borderColor: "#EEEEEE",
        }}
      >
        <Tabs
          value={selectedSheetIndex}
          onChange={handleSelectedSheetChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': {
                opacity: 0.3,
              },
            },
            height: 40,
            minHeight: 40
          }}
          TabIndicatorProps={{
            sx: {
              height: 2, // indicator line thickness
              // backgroundColor: 'yellow', // for the color of indicator
            }
          }}
        >
          <Tab
            icon={<HistoryEduIcon style={{ color: 'black' }} />}
            iconPosition="start"
            label={
              <span
                style={{
                  display: 'contents',
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 2,
                }}
              >
                Untitled 1
                <IconButton
                  // size="small"
                  sx={{
                    marginLeft: 2,
                    width: 12,
                    height: 12,
                  }}
                  // onClick={}
                >
                  <CloseIcon style={{ fontSize: 12 }} />
                </IconButton>
              </span>
            }
            sx={{
              height: 40,
              minHeight: 40,
            }}
          />
          <Tab
            icon={<HistoryEduIcon />}
            iconPosition="start"
            label="Untitled 2"
            sx={{
              height: 40,
              minHeight: 40,
              backgroundColor: '#F3F4F6',
              '&.Mui-selected': {
                backgroundColor: 'yellow'
              },
            }}
          />
          {/* <Button variant="outlined" startIcon={<AddIcon />} /> */}
        </Tabs>
      </Stack>

      <TabPanel
        value={selectedSheetIndex}
        index={0}
      >

        <EditorTopbar />

        <ReflexContainer orientation="horizontal">
          <ReflexElement minSize={50}>
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

          <ReflexElement minSize={50}>
            <ResultsPanel />
          </ReflexElement>
        </ReflexContainer>


      </TabPanel>
      

    </Box>
  );
};
