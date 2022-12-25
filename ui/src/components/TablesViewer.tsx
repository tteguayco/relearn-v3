import * as React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

// type StyledTreeItemProps = TreeItemProps & {
//   bgColor?: string;
//   color?: string;
//   labelIcon: React.ElementType<SvgIconProps>;
//   labelInfo?: string;
//   labelText: string;
// };

// const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
//   color: theme.palette.text.secondary,
//   [`& .${treeItemClasses.content}`]: {
//     color: theme.palette.text.secondary,
//     borderTopRightRadius: theme.spacing(2),
//     borderBottomRightRadius: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//     fontWeight: theme.typography.fontWeightMedium,
//     '&.Mui-expanded': {
//       fontWeight: theme.typography.fontWeightRegular,
//     },
//     '&:hover': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
//       backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
//       color: 'var(--tree-view-color)',
//     },
//     [`& .${treeItemClasses.label}`]: {
//       fontWeight: 'inherit',
//       color: 'inherit',
//     },
//   },
//   [`& .${treeItemClasses.group}`]: {
//     marginLeft: 0,
//     [`& .${treeItemClasses.content}`]: {
//       paddingLeft: theme.spacing(2),
//     },
//   },
// }));

// function StyledTreeItem(props: StyledTreeItemProps) {
//   const {
//     bgColor,
//     color,
//     labelIcon: LabelIcon,
//     labelInfo,
//     labelText,
//     ...other
//   } = props;

//   return (
//     <StyledTreeItemRoot
//       label={
//         <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
//           <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
//           <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
//             {labelText}
//           </Typography>
//         </Box>
//       }
//       // style={{
//       //   '--tree-view-color': color,
//       //   '--tree-view-bg-color': bgColor,
//       // }}
//       {...other}
//     />
//   );
// }

export const TablesViewer = () => {
  return (
    <Box
      style={{
        paddingTop: 20,
        paddingLeft: 35,
      }}
    >
      <Typography
        fontSize={12}
        fontWeight={600}
        display="flex"
        alignItems="center"
        color="#808080"
      >
        TABLES
      </Typography>
    </Box>
    // <TreeView
    //   aria-label="database"
    //   defaultExpanded={['3']}
    //   defaultCollapseIcon={<ArrowDropDownIcon />}
    //   defaultExpandIcon={<ArrowRightIcon />}
    //   defaultEndIcon={<div style={{ width: 24 }} />}
    //   sx={{ height: 264, minWidth: 200, maxWidth: 400, }}
    // >
    //   <StyledTreeItem nodeId="4" labelText="Categories" labelIcon={GridOnIcon}>

    //   </StyledTreeItem>
    //   <StyledTreeItem nodeId="1" labelText="Categories" labelIcon={GridOnIcon}>
    //     <StyledTreeItem
    //       nodeId="5"
    //       labelText="users"
    //       labelIcon={GridOnIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //     />
    //     <StyledTreeItem
    //       nodeId="6"
    //       labelText="subjects"
    //       labelIcon={GridOnIcon}
    //       labelInfo="2,294"
    //       color="#e3742f"
    //       bgColor="#fcefe3"
    //     />
    //     <StyledTreeItem
    //       nodeId="7"
    //       labelText="courses"
    //       labelIcon={GridOnIcon}
    //       labelInfo="3,566"
    //       color="#a250f5"
    //       bgColor="#f3e8fd"
    //     />
    //   </StyledTreeItem>
    //   <StyledTreeItem nodeId="2" labelText="Categories" labelIcon={GridOnIcon}>
    //     <StyledTreeItem
    //       nodeId="5"
    //       labelText="users"
    //       labelIcon={GridOnIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //     />
    //     <StyledTreeItem
    //       nodeId="6"
    //       labelText="subjects"
    //       labelIcon={GridOnIcon}
    //       labelInfo="2,294"
    //       color="#e3742f"
    //       bgColor="#fcefe3"
    //     />
    //     <StyledTreeItem
    //       nodeId="7"
    //       labelText="courses"
    //       labelIcon={GridOnIcon}
    //       labelInfo="3,566"
    //       color="#a250f5"
    //       bgColor="#f3e8fd"
    //     />
    //   </StyledTreeItem>
    //   <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={GridOnIcon}>
    //     <StyledTreeItem
    //       nodeId="5"
    //       labelText="users"
    //       labelIcon={GridOnIcon}
    //       labelInfo="90"
    //       color="#1a73e8"
    //       bgColor="#e8f0fe"
    //     />
    //     <StyledTreeItem
    //       nodeId="6"
    //       labelText="subjects"
    //       labelIcon={GridOnIcon}
    //       labelInfo="2,294"
    //       color="#e3742f"
    //       bgColor="#fcefe3"
    //     />
    //     <StyledTreeItem
    //       nodeId="7"
    //       labelText="courses"
    //       labelIcon={GridOnIcon}
    //       labelInfo="3,566"
    //       color="#a250f5"
    //       bgColor="#f3e8fd"
    //     />
    //   </StyledTreeItem>
    // </TreeView>
  );
};
