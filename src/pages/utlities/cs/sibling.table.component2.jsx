import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './sibling.table.styles.scss';

const columns = [
  { field: 'ClaimId', headerName: 'Claim Id', width: 100 },
  { field: 'RefundAmount', headerName: 'Amount', width: 70 },
  { field: 'ClaimType', headerName: 'Amount', width: 70 },
  { field: 'Email', headerName: 'Email', width: 300 },
  { field: 'InvoiceDate', headerName: 'Invoice Date', width: 130 },
  { field: 'InvoiceNumber', headerName: 'Invoice No', width: 130 },
]
  
export default function DataTable(props) {
    const result = Array.isArray(props.claims); //? siblings.map(element => element + 1) : [];
    const rows = props.claims //Object.entries(props.claims);
    const isarraynow = Array.isArray(rows);
    console.log('sib-test',result ,isarraynow, rows ); 

    return (
      <div className='sibling-table' style={{ height: 600, width: '65rem'}}>
        <DataGrid 
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection
          // color={'white'}
        />
      </div>
    );
  }
