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
    // maxWidth: 40,
    width: '80%',
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
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(4),  
  paddingBottom: theme.spacing(0.5),
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
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
  SQLTranslation = "sqltranslation"
};

export const ResultsPanel = () => {
  const [value, setValue] = useState<TabValues>(TabValues.Results);

  const handleChange = (event: React.SyntheticEvent, newValue: TabValues) => {
    setValue(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      sx={{
        backgroundColor: '#FBFBFB',
        borderBottom: '2px solid #EEEEEE'
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{
          padding: 0.1,
          margin: 1.5,
          marginLeft: 3,
          // borderBottom: 2,
          // borderColor: "#EEEEEE"
        }}
      >
        <Typography
          fontSize={12}
          fontWeight={600}
          display="flex"
          alignItems="center"
          color="#000000"
        >
          OUTPUT
        </Typography>
        

      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{
          padding: 0,
          margin: 1.5,
          marginRight: 4
        }}
      >

      </Stack>
    </Box>
  )
}
