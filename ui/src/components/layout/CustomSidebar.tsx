import { Box, IconButton } from "@mui/material";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import CodeIcon from '@mui/icons-material/Code';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { ReactNode } from "react";

interface CustomMenuProps {
  children: ReactNode
};

const CustomMenu = ({ children }: CustomMenuProps) => (
  <Menu
    menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? '#B4C6FC' : '#E4ECFE',
            backgroundColor: active ? '#362F78' : undefined,
            margin: 10,
            marginRight: 15,
            paddingLeft: 10,
            borderRadius: 10,
            ":hover": {
              color: "#E4ECFE",
              backgroundColor: "#003b63"
            },
            fontWeight: "bold",
            fontSize: 14
          };
      },
    }}
  >
    {children}
  </Menu>
);

export const CustomSidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box height="100vh" display="flex">
      <Sidebar
        width="280px"
        backgroundColor="#004A7C"
      >
          <CustomMenu>
            <MenuItem icon={<CodeIcon fontSize="small" />}>Query Editor</MenuItem>
          </CustomMenu>

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
                <KeyboardDoubleArrowRightIcon color="secondary" />
              ) : (
                <KeyboardDoubleArrowLeftIcon color="secondary" />
            )}
          </IconButton>
      </Sidebar>
      {/* <Outlet /> */}
    </Box>
  );
}
