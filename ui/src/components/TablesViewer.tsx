import * as React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TreeView } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { styled } from '@mui/material/styles';
import { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import { SvgIconProps } from '@mui/material/SvgIcon';
import StorageIcon from '@mui/icons-material/Storage';
import TableViewIcon from '@mui/icons-material/TableView';
import { Stack } from '@mui/system';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

declare module 'react' {
  interface CSSProperties {
    '--tree-view-icon-color'?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  labelIcon?: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
  textColor?: string;
  iconColor?: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: "#808080",
  [`& .${treeItemClasses.content}`]: {
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: 'transparent',
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'var(--tree-view-icon-color)'
    },
  },
}));

const StyledTreeItem = (props: StyledTreeItemProps) => {
  const {
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    textColor,
    iconColor,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, paddingLeft: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            fontSize={12}
            fontWeight={600}
            display="flex"
            alignItems="center"
            color={textColor ?? "#808080"}
          >
            {labelText} {labelInfo && (<Box fontStyle="italic" display="inline">&nbsp;({labelInfo})</Box>)}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-icon-color': iconColor,
      }}
      {...other}
    />
  );
}

export const TablesViewer = () => {
  return (
    <Box
      style={{
        paddingTop: 10,
        paddingLeft: 30,
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{
          marginRight: 1,
        }}
      >
        <Tooltip title="Expand All">
          <IconButton aria-label="expand-db" size="small">
            <UnfoldMoreIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Collapse All">
          <IconButton aria-label="collapse-db" size="small">
            <UnfoldLessIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Stack>

      <Typography
        fontSize={12}
        fontWeight={600}
        display="flex"
        alignItems="center"
        color="#808080"
      >
        DATABASES
      </Typography>

      <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        sx={{
          flexGrow: 1,
          maxWidth: 200,
          paddingTop: 1,
          paddingLeft: 0,
        }}
      >
        <StyledTreeItem nodeId="2" labelText="Courses" labelIcon={StorageIcon} iconColor="#F1B786">
          <StyledTreeItem nodeId="4" labelText="Teachers" labelIcon={TableViewIcon} iconColor="#87ADCB">
            <StyledTreeItem nodeId="6" labelText="address" labelInfo="string" textColor="#B1B1B1" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="5" labelText="Students" labelIcon={TableViewIcon} iconColor="#87ADCB" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="6" labelText="Chrome" labelIcon={StorageIcon} iconColor="#F1B786" />
        <StyledTreeItem nodeId="7" labelText="Webstorm" labelIcon={StorageIcon} iconColor="#F1B786" />
      </TreeView>
    </Box>
  );
};
