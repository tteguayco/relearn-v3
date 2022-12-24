import { ReactNode } from "react";
import { Box } from "@mui/system";
import { CustomSidebar } from "./CustomSidebar";
import { Topbar } from "./Topbar";
import { useProSidebar } from "react-pro-sidebar";

interface Props {
  children?: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  const { collapsed } = useProSidebar();

  return (
    <Box height="100vh" display="flex" flexDirection="row">
      {/* <CustomSidebar /> */}

      <Box
        // width={collapsed ? "95.5vw" : "85vw"}
        width="100vw"
        display="flex"
        flexDirection="column"
      >
        <Topbar />
        {children}
      </Box>
    </Box>
  );
}
