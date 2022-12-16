import { Tab, Tabs } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { TabPanel } from '@mui/lab';
import { SQLTranslation } from './SQLTranslation';

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
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

interface StyledTabProps {
  label: string;
  value: TabValues
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  padding: theme.spacing(2),  
  paddingBottom: theme.spacing(1),
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  '&.Mui-selected': {
    // color: 'rgba(100, 95, 228, 0.32)',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

const enum TabValues {
  Results = "results",
  SQLTranslation = "sqltranslation"
};

export const ResultsPanel = () => {
  const [value, setValue] = useState<TabValues>(TabValues.Results);

  const handleChange = (event: React.SyntheticEvent, newValue: TabValues) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="results-tabs"
      >
        <StyledTab value={TabValues.Results} label="Results (20)" />
        <StyledTab value={TabValues.SQLTranslation} label="SQL Translation" />
      </StyledTabs>

      <TabPanel value={TabValues.Results}>

      </TabPanel>
      <TabPanel value={TabValues.SQLTranslation}>
        <SQLTranslation />
      </TabPanel>
    </TabContext>
  )
}
