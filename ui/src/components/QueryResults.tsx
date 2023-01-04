
import { DataEditor, GridCell, GridCellKind, GridColumn, Item } from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";
import { Box } from "@mui/system";
import { useRef } from "react";
import { useResize } from "../hooks/useResize";

const columns: GridColumn[] = [
  { title: "First Name", width: 100 },
  { title: "Last Name", width: 100 },
];

// If fetching data is slow you can use the DataEditor ref to send updates for cells
// once data is loaded.
const getData = ([col]: Item): GridCell => {
  if (col === 0) {
      return {
          kind: GridCellKind.Text,
          data: "John",
          allowOverlay: false,
          displayData: "John",
      };
  } else if (col === 1) {
      return {
          kind: GridCellKind.Text,
          data: "Doe",
          allowOverlay: false,
          displayData: "Doe",
      };
  } else {
      throw new Error();
  }
};

export const QueryResults = () => {
  const containerRef = useRef<HTMLInputElement>(null);

  const { size } = useResize(containerRef);

  return (
    <Box
      ref={containerRef}
      sx={{ height: '100%' }}
    >
      <DataEditor
        smoothScrollY={true}
        width={size?.width}
        height={size?.height}
        rowMarkers="number"
        getCellContent={getData}
        columns={columns}
        rows={5}
      />
    </Box>
  );
};
