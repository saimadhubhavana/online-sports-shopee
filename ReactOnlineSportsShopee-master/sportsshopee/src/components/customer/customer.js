import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {  getCustomerById ,deleteCustomerById} from "../../actions/customer/CustomerActionType";
import { Button, Grid } from '@material-ui/core';
import {Link} from "react-router-dom"
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Customer = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [customer,setCustomer] = useState({
        name : "",
        email: "",
        contactNo: "",
        dob: "",
        address:
        {
            doorNo: "",
            street: "",
            area: "",
            city: "",
            state: "",
            pinCode: "",
        }      
    });

    useEffect(() => {
        loadCustomer();
    },[])

    const loadCustomer = async () => 
    {
        const result=await axios.get(`http://localhost:9191/api/oss/getCustomer/${userId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getCustomerById(result.data));
        setCustomer(result.data);
    }
    const  deleteCustomer = async (userId) => {
        await axios.delete(`http://localhost:9191/api/oss/deleteCustomer/${userId}`).catch((err) => {console.log("Error" , err);});
       dispatch(deleteCustomerById(userId));
       alert("Deleted Successfully");
       history.push('/customer')
     }

    return (
        <div className={useStyles.root}>
        <Box color="white" bgcolor="palevioletred" p={1}> <h2> Customer Details</h2></Box>
        <Paper elevation={3} >
        <ul class="list-group-item">
            <li class="list-group-item list-group-item-info"> <h3>CUSTOMER ID : {userId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>NAME : {customer.name}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>EMAIL ID : {customer.email}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>CONTACT NO : {customer.contactNo}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>DATE OF BIRTH : {customer.dob}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>DOOR NO:  {customer.address.doorNo}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>STREET : {customer.address.street}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>AREA : {customer.address.area}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>CITY : {customer.address.city}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>STATE : {customer.address.state}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>PINCODE: {customer.address.pinCode}</h3> </li>
            
        </ul>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button style={style} onClick={ () => deleteCustomer(userId)}>Delete </Button>
        </Grid>
        <Grid item xs={3}>
        <Link to={`/customer`}><Button style={style} >Back To Home </Button ></Link>
        </Grid>
        </Grid>
        </Paper>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "10px",
};

export default connect()(Customer);