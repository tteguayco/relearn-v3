
import { DataEditor, GridCell, GridCellKind, GridColumn, Item, DataEditorContainer } from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";

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
  return (
    <DataEditorContainer width={500} height={500}>
      <DataEditor
        width={5000}
        height={5000}
        rowMarkers="number"
        getCellContent={getData}
        columns={columns}
        rows={20}
      />
    </DataEditorContainer>
  );
};
