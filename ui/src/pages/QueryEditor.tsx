import { Box } from "@mui/system";
import { DatabaseViewer } from "../components/DatabaseViewer";
import { QueryEditorPanel } from "../components/QueryEditorPanel";

export const QueryEditor = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="row">
      <DatabaseViewer />
      <QueryEditorPanel />
    </Box>
  );
}