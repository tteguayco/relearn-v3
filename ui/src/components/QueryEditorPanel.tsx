import { useState } from 'react';
import { Box } from '@mui/system';
import { Stack, Tabs, tabsClasses } from '@mui/material';
import 'react-reflex/styles.css';
import { QueryEditorPanelContent } from './QueryEditorPanelContent';
import SheetTab from './common/SheetTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      className="lol"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <>
        {children}
      </>
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
      maxHeight="85vh"
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
              // backgroundColor: 'yellow', // for the color of the indicator
            }
          }}
        >
          <SheetTab index={0} selectedIndex={selectedSheetIndex} title="Untitled 1" />
          <SheetTab index={1} selectedIndex={selectedSheetIndex} title="Untitled 2" />
          
          {/* <Button variant="outlined" startIcon={<AddIcon />} /> */}
        </Tabs>
      </Stack>

      <TabPanel
        value={selectedSheetIndex}
        index={0}
      >
        <QueryEditorPanelContent />
      </TabPanel>

    </Box>
  );
};
