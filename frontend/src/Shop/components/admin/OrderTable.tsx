import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function OrderTable() {
  const orders = [
    // ... your order data here
    {
      id: 575044,
      website: 'Bags of Love',
      date: '13/03/2017 17:59',
      customer: 'Meysam Sam',
      delivery: '[IMG]',
      cost: '€4.24',
      status: 'View',
    },
    // ... more order data
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        </Table>
        </TableContainer>
  );
}
export default OrderTable;