import { Box, Tab, Tabs, tabsClasses } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { TabPanel } from '@mui/lab';
import { SQLTranslation } from './SQLTranslation';
import { QueryResults } from './QueryResults';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: TabValues) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

interface StyledTabProps {
  label: string;
  value: TabValues;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  height: 40,
  minHeight: 40,
  padding: 0,
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: 12,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  color: '#969797',
  '&.Mui-selected': {
    color: 'dark-grey',
  },
  '&.Mui-focusVisible': {
    color: theme.palette.primary,
    backgroundColor: theme.palette.primary,
  },
}));

const enum TabValues {
  Results = 'results',
  SQLTranslation = 'sqltranslation',
  Output = 'output',
}

export const ResultsPanel = () => {
  const [value, setValue] = useState<TabValues>(TabValues.Results);

  const handleChange = (event: React.SyntheticEvent, newValue: TabValues) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          backgroundColor: '#FAFCFE',
          borderBottom: '2px solid #EEEEEE',
          height: 40,
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="results-tabs"
          // sx={{ height: 40 }}
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': {
                opacity: 0.3,
              },
            },
            height: 40,
            minHeight: 40
          }}
        >
          <StyledTab value={TabValues.Results} label="RESULTS" />
          <StyledTab value={TabValues.SQLTranslation} label="SQL" />
          <StyledTab value={TabValues.Output} label="MESSAGES" />
        </StyledTabs>
      </Box>

      <TabPanel
        value={TabValues.Results}
        style={{ padding: 0,height: '100%' }}
      >
        <QueryResults />
      </TabPanel>
      
      <TabPanel
        value={TabValues.SQLTranslation}
        style={{ padding: 0, paddingTop: 10, height: '100%' }}
      >
        <SQLTranslation />
      </TabPanel>
      
      <TabPanel
        value={TabValues.Output}
        style={{
          padding: 20,
          paddingTop: 15,
          fontFamily: 'monospace',
          fontSize: 14,
        }}
      >
        Query executed successfully. Time: 0.33 ms
      </TabPanel>
    </TabContext>
  );
};
