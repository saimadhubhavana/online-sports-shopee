import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from "../../actions/customer/CustomerActionType";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const CustomerListing = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.allCustomers.customers);

  const fetchCustomers = async () => {
    const result = await axios.get('http://localhost:9191/api/oss/getAllCustomers').catch((err) => { console.log("Error ", err); });
    dispatch(getCustomers(result.data))
  };


  useEffect(() => {
    fetchCustomers();
  }, []);

  console.log("Customers :", customers);

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow >
                <StyledTableCell align ="center">Customer Id</StyledTableCell>
                <StyledTableCell align ="center">NAME</StyledTableCell>
                <StyledTableCell align ="center">EMAIL ID</StyledTableCell>
                <StyledTableCell align ="center">CONTACT</StyledTableCell>
                <StyledTableCell align ="center">View</StyledTableCell>
                <StyledTableCell align ="center">Update</StyledTableCell>
                <StyledTableCell align ="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                customers.map((customer) => {
                  const { userId, name, email, contactNo } = customer;
                  return (
                    <StyledTableRow key={userId}>
                      <td align="center">{userId}</td>
                      <td align="center">{name}</td>
                      <td align="center">{email}</td>
                      <td align="center">{contactNo}</td>
                      <td align="center"><Link to={`/getCustomer/${userId}`}><Button color="primary" variant="contained" className="btn btn-info">View </Button></Link></td>
                      <td align="center"><Link to={`/updateCustomer/${userId}`}><Button color="primary" variant="contained" className="btn btn-info">Update </Button></Link></td>
                      <td align="center"><Link to={`/getCustomer/${userId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete </Button></Link></td>
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
  
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default CustomerListing;