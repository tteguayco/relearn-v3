import { Box, Button, IconButton } from "@mui/material";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import CodeIcon from '@mui/icons-material/Code';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



export const CustomSidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box height="100vh" display="flex">
      <Sidebar>
          <Menu>
            <MenuItem icon={<CodeIcon />}>Query Editor</MenuItem>
          </Menu>

          <IconButton
            aria-label="collapse"
            onClick={() => collapseSidebar()}
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: 2
            }}
          >
            {collapsed ? (
                <KeyboardDoubleArrowRightIcon />
              ) : (
                <KeyboardDoubleArrowLeftIcon />
            )}
          </IconButton>
      </Sidebar>
      {/* <Outlet /> */}
    </Box>
  );
}
