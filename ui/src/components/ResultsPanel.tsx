import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
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
    paddingLeft: theme.spacing(1),
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

interface StyledTabProps {
  label: string;
  value: TabValues
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: 12,
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
  Results = "results",
  SQLTranslation = "sqltranslation",
  Output = "output",
};

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
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="results-tabs"
        >
          <StyledTab value={TabValues.Results} label="RESULTS" />
          <StyledTab value={TabValues.SQLTranslation} label="SQL" />
          <StyledTab value={TabValues.Output} label="OUTPUT" />
        </StyledTabs>

          
      </Box>

      <TabPanel value={TabValues.Results} style={{ padding: 0 }}>
        <QueryResults />
      </TabPanel>
      <TabPanel value={TabValues.SQLTranslation} style={{ padding: 0 }}>
        <SQLTranslation/>
      </TabPanel>
      <TabPanel value={TabValues.Output} style={{ padding: 0 }}>
        Query executed successfully. Time: 0.33 ms
      </TabPanel>
    </TabContext>
  )
}
