
type DataType = {
  id: number,
  title: string,
  year: string
};

type ColumnType = {
  name: string,
  selector: (row: DataType) => any,
  sortable: boolean
};

const columns: ColumnType[] = [
  {
    name: 'Title',
    selector: row => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: row => row.year,
    sortable: true,
  },
];

const data: DataType[] = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'Test 3',
    year: '1984',
  },
  {
    id: 4,
    title: 'Test 4',
    year: '1984',
  }
]

export const QueryResults = () => {
  return (
    <></>
  );
}
