import React, { useEffect, useState } from 'react'
import { getDwData } from "../../../../components/fetch-data/data.fetch";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function SiblingClaimTable(props) {
    const result = Array.isArray(props.claims); //? siblings.map(element => element + 1) : [];
    const rowdata = props.claims //Object.entries(props.claims);
    const isarraynow = Array.isArray(rowdata);
    console.log('test',result ,isarraynow, rowdata ); 
    // const [siblingData, setsiblingData] = useState([]);
    
    // const fetchSiblings = async () => {
    //     const result = await getDwData('/claim/getsibling/' + props);
    //     setsiblingData(result.data);
    //     console.log('sibling-url',props)

    // };
    // var parent = siblingData.map((siblingData => siblingData.GangParent))
    // var claim = siblingData.map((siblingData => siblingData.ClamiId))
    // var amount = siblingData.map((siblingData => siblingData.RefundAmount))
    // var lastname = siblingData.map((siblingData => siblingData.LastName))
    // var email = siblingData.map((siblingData => siblingData.Email))
    // var invoicedate = siblingData.map((siblingData => siblingData.InvoiceDate))
    // var invoicenumber = siblingData.map((siblingData => siblingData.InvoiceNumber))

    
    // useEffect(() => {
    //     setsiblingData(props);
    //     console.log('table',props.claimId);
    // }, []);
          
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="claim siblings">
            <TableHead>
            <TableRow>
                <TableCell align="center">Parent</TableCell>
                <TableCell align="center">Claim Id</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Invoice Date</TableCell>
                <TableCell align="center">Invoice No</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rowdata.map((row) => (
                <TableRow
                key={row.ClaimId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="center" component="th" scope="row">{row.GangParent}</TableCell>
                <TableCell align="center">{row.ClaimId}</TableCell>
                <TableCell align="right">{row.RefundAmount}</TableCell>
                <TableCell align="left">{row.LastName}</TableCell>
                <TableCell align="left">{row.Email}</TableCell>
                <TableCell align="center">{row.InvoiceDate}</TableCell>
                <TableCell align="center">{row.InvoiceNumber}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    }

export default SiblingClaimTable;