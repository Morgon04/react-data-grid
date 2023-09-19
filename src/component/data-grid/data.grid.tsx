import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import './data-grid.scss';

let columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 150,
    editable: false,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

columns = columns.map(col => { return { ...col, headerClassName: 'table-header' } })

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const DataGridDemo =  () => {
    return (
        <Box sx={{ width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
            className='demo-data-grid'
          />
        </Box>
      );
}

export default DataGridDemo