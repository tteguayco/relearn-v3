import { ReactNode } from "react";
import { Box } from "@mui/system";
import { CustomSidebar } from "./CustomSidebar";
import { Topbar } from "./Topbar";

interface Props {
  children?: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Box height="100vh" display="flex" flexDirection="row">
      <CustomSidebar />

      <Box width="100vh" height="5vh" display="flex" flexDirection="column">
        <Topbar />
        {children}
      </Box>
    </Box>
  );
}
