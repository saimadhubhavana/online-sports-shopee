import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getPayments } from "../../actions/payment/PaymentActionType";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const PaymentListing = () => {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.allPayments.payments);

  const fetchPayments = async () => {
    const result = await axios.get('http://localhost:9191/api/oss/getAllPayment').catch((err) => { console.log("Error ", err); });
    console.log(result);
    dispatch(getPayments(result.data));
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  console.log("payments :", payments);

  return (
    <div >
      <Grid >
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover" size="medium" aria-label="a dense table">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Payment Id</StyledTableCell>
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Card Id</StyledTableCell>
                <StyledTableCell  align ="center">View</StyledTableCell>
                <StyledTableCell  align ="center">Update</StyledTableCell>
                <StyledTableCell  align ="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                payments.map((payment) => {
                  const { paymentId, type, status, card } = payment;
                  return (
                    <StyledTableRow key={paymentId}>
                      <td>{paymentId}</td>
                      <td>{type}</td>
                      <td>{status}</td>
                      <td>{card.id}</td>
                      <td align ="center"><Link to={`/getPaymentById/${paymentId}`}><Button align ="center" color="info" variant="contained" className="btn btn-info">View </Button></Link></td>
                      <td align ="center"><Link to={`/updatePayment/${paymentId}`}><Button align ="center" color="primary" variant="contained" className="btn btn-info">Update </Button></Link></td>
                      <td align ="center"><Link to={`/getPaymentById/${paymentId}`}><Button align ="center" color="secondary" variant="contained" className="btn btn-secondary" >Delete </Button></Link> </td>
                    </StyledTableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </div>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default PaymentListing;