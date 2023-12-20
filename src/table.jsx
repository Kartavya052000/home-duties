import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InnerHeader from './InnerHeader';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, kitchen, corridor, garbage, washroom) {
  return { name, kitchen, corridor, garbage, washroom };
}

const currentDate = new Date();
const currentDay = currentDate.getDate();

const rows = [
  createData('KE', '20 Dec to 26 Dec', '3 Jan to 9 Jan', '27 Dec to 2 Jan', '10 Jan to 16 Jan'),
  createData('AM', '27 Dec to 2 Jan', '10 Jan to 16 Jan', '20 Dec to 26 Dec', '3 Jan to 9 Jan'),
  createData('HN', '3 Jan to 9 Jan', '20 Dec to 26 Dec', '10 Jan to 16 Jan', '27 Dec to 2 Jan'),
  createData('AR', '10 Jan to 16 Jan', '27 Dec to 2 Jan', '3 Jan to 9 Jan', '20 Dec to 26 Dec'),
];

export default function BasicTable() {
  return (
    <>
    <InnerHeader />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Names</StyledTableCell>
            <StyledTableCell align="right">Kitchen</StyledTableCell>
            <StyledTableCell align="right">Corridor</StyledTableCell>
            <StyledTableCell align="right">Garbage</StyledTableCell>
            <StyledTableCell align="right">Washroom&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{boldDate(row.kitchen)}</StyledTableCell>
              <StyledTableCell align="right">{boldDate(row.corridor)}</StyledTableCell>
              <StyledTableCell align="right">{boldDate(row.garbage)}</StyledTableCell>
              <StyledTableCell align="right">{boldDate(row.washroom)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

function boldDate(dateString) {
  const [start, end] = dateString.split(' to ');
  const [startDay] = start.split(' ');
  const [endDay] = end.split(' ');
  const startDate = parseInt(startDay, 10);
  const endDate = parseInt(endDay, 10);

  if (startDate <= currentDay && currentDay <= endDate) {
    return <b>{dateString}</b>;
  }
  return dateString;
}
