import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Moment from 'moment';

function FulfillmentClaimTable(props) {
    const result = Array.isArray(props.claims); //? siblings.map(element => element + 1) : [];
    const rowdata = props.claims //Object.entries(props.claims);
    const isarraynow = Array.isArray(rowdata);
    var sentdate = rowdata.map((rowdata => rowdata.SentToFulfiller))
    console.log('fulf-test',result ,isarraynow, rowdata ); 
    console.log('date format',Moment(sentdate).format('MM/DD/YYYY h:mm'))
             
    return ( <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 1200 }} size="small" aria-label="claim siblings" caption="Fulfillment">
            <TableHead>
            <TableRow>
                <TableCell align="center">Parent</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Reason</TableCell>
                <TableCell align="center">Sent To Fulfiller</TableCell>
                <TableCell align="center">Payment Number</TableCell>
                <TableCell align="center">Session Id</TableCell>
                <TableCell align="center">Printed</TableCell>
                <TableCell align="center">Cleared</TableCell>
                <TableCell align="center">Comment</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rowdata.map((row) => (
                <TableRow
                    key={row.GangParent}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="center" component="th" scope="row">{row.GangParent}</TableCell>
                    <TableCell align="center">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', useGrouping: false, minimumFractionDigits: 2 }).format(row.FulfillmentAmount)}</TableCell>
                    <TableCell align="right">{row.FulfillmentStatus}</TableCell>
                    <TableCell align="left">{row.FulfillmentStatusReason}</TableCell>
                    <TableCell align="left">{row.SentToFulfiller}</TableCell>
                    <TableCell align="center">{row.PrintSessionId}</TableCell>
                    <TableCell align="center">{row.PaymentNumber}</TableCell>
                    <TableCell align="center">{row.CheckPrintedDate}</TableCell>
                    <TableCell align="center">{row.CheckClearedDate}</TableCell>
                    <TableCell align="center">{row.Comment}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    }

export default FulfillmentClaimTable;

//         <div className="container">
//             <div className="itemtable">
//                 <table className="table-latitude">
//                     <caption>Fulfillments</caption>
//                     <thead>
//                         <tr>
//                             <th scope="col">Parent Claim ID</th>
//                             <th scope="col">Siblings</th>
//                             <th scope="col">Amount</th>
//                             <th scope="col">Status</th>
//                             <th scope="col">Reason</th>
//                             <th scope="col">Sent To Fulfiller</th>
//                             <th scope="col">Payment Number</th>
//                             <th scope="col">Print Session</th>
//                             <th scope="col">Check Printed</th>
//                             <th scope="col">Check Cleared</th>
//                             <th scope="col">Comment</th>
//                             <th scope="col">Batch File</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>{props.claim.GangParent}</td>
//                             <td>{props.claim.Siblings}</td>
//                             <td>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', useGrouping: false, minimumFractionDigits: 2 }).format(props.claim.RefundAmount)}</td>
//                             <td>{props.claim.FulfillmentStatus}</td>
//                             <td>{props.claim.FulfillmentStatusReason}</td>
//                             <td>{props.claim.SentToFulfiller}</td>
//                             <td>{props.claim.PaymentNumber}</td>
//                             <td>{props.claim.PrintSessionId}</td>
//                             <td>{props.claim.CheckPrintedDate}</td>
//                             <td>{props.claim.CheckClearedDate}</td>
//                             <td>{props.claim.FulfillmentVendorComments}</td>
//                             <td>{props.claim.FulfillerBatchFile}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
// );

// // http://localhost:3001/api