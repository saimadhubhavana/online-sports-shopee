import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUser } from "../../actions/user/UserActionType";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const UserListing = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers.users);

  const fetchUsers = async () => {
    const result = await axios.get('http://localhost:9191/api/oss/getAllUsers').catch((err) => { console.log("Error ", err); });
    console.log(result);
    dispatch(getAllUsers(result.data));
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("users :", users);

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>UserId</StyledTableCell>
                <StyledTableCell>username</StyledTableCell>
                <StyledTableCell>password</StyledTableCell>
                <StyledTableCell>role</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.map((user) => {
                  const { userId, username, password, role } = user;
                  return (
                    <StyledTableRow key={userId}>
                      <td>{userId}</td>
                      <td>{username}</td>
                      <td>{password}</td>
                      <td>{role}</td>
                      <td><Link to={`/getUser/${userId}`}><Button color="primary" variant="contained" className="btn btn-info">View </Button></Link></td>
                      <td><Link to={`/updateUser/${userId}`}><Button color="primary" variant="contained" className="btn btn-info">Update </Button></Link></td>
                      <td><Link to={`/getUser/${userId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete </Button></Link></td>
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

export default UserListing;