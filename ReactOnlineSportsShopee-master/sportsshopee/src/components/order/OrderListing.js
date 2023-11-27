import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from "../../actions/order/OrderActionType";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import ViewListIcon from '@material-ui/icons/ViewList';

const OrderListing = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrders.orders);

  const fetchOrders = async () => {
    const result = await axios.get('http://localhost:9191/api/oss/getAllOrder').catch((err) => { console.log("Error ", err); });
    console.log(result);
    dispatch(getOrders(result.data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  console.log("Orders :", orders);

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover"size="medium" aria-label="a dense table">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Order Id</StyledTableCell>
                <StyledTableCell>Amount</StyledTableCell>
                <StyledTableCell>Billing Date</StyledTableCell>
                <StyledTableCell>User Id</StyledTableCell>
                <StyledTableCell>Product Id</StyledTableCell>
                <StyledTableCell>Payment Id</StyledTableCell>
                <StyledTableCell align ="center">View Invoice</StyledTableCell>
                <StyledTableCell align ="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                orders.map((order) => {
                  const { orderId,amount,billingDate,customer,payment,product} = order;
                  return (
                    <StyledTableRow key={orderId}>
                      <td>{orderId}</td>
                      <td>{amount}</td>
                      <td>{billingDate}</td>
                      <td>{customer.userId}</td>
                      <td>{product.productId}</td>
                      <td>{payment.paymentId}</td>
                      <td align ="center"><Link to={`/getOrderById/${orderId}`}><Button align ="center" color="info" variant="contained" className="btn btn-info">View </Button></Link></td>
                      {/* <td align ="center"><Link to={`/updateOrder/${orderId}`}><Button align ="center" color="primary" variant="contained" className="btn btn-info">Update </Button></Link></td> */}
                      <td align ="center"><Link to={`/getOrderById/${orderId}`}><Button align ="center" color="secondary" variant="contained" className="btn btn-secondary" ><DeleteRoundedIcon/> Delete </Button></Link> </td>
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


};
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


export default OrderListing;