import { ReactNode } from "react";
import { Box } from "@mui/system";
import { CustomSidebar } from "../CustomSidebar";

interface Props {
  children?: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Box height="100vh" display="flex" flexDirection="row">
      <CustomSidebar />

      {children}
    </Box>
  );
}
