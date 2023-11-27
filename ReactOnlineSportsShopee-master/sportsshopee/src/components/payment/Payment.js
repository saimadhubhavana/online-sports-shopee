import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {  getPaymentById ,deletePaymentById} from "../../actions/payment/PaymentActionType";
import { Button, Grid } from '@material-ui/core';
import {Link} from "react-router-dom"
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const Payment = () => {
    const {paymentId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [payment,setPayment] = useState({
        type:'',
        status:'',
        card:{
            id:'',
            cardName:'',
            cardNumber:'',
            cardExpiry:'',
            ccv:'',
        }
    });

    useEffect(() => {
        loadPayment();
    },[])

    const loadPayment = async () => 
    {
        const result=await axios.get(`http://localhost:9191/api/oss/getPaymentById/${paymentId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getPaymentById(result.data));
        setPayment(result.data);
    }
    const  deletePayment = async (paymentId) => {
        await axios.delete(`http://localhost:9191/api/oss/removePayment/${paymentId}`).catch((err) => {console.log("Error" , err);});
       dispatch(deletePaymentById(paymentId));
       alert("Deleted Successfully");
       history.push('/payment')
     }

    return (
        <div className={useStyles.root} >
         <Box color="white" bgcolor="black" p={1}> <h2 class="ui blue inverted header">Payment Details</h2></Box>
         <Paper elevation={3} >
        <ul class="list-group-item " style={{ backgroundColor: '#c0fefc'  } }>
            <li class="list-group-item list-group-item-danger"> <h3>Payment Id : {paymentId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Payment Type : {payment.type}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Payment Status : {payment.status}</h3> </li>
            <li class="list-group-item list-group-item-danger"><h3>Card Id : {payment.card.id}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Card Name : {payment.card.cardName}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Card Number :  {payment.card.cardNumber}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Expiry : {payment.card.cardExpiry}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Card Cvv : {payment.card.cvv}</h3> </li>
        </ul>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button style={style} onClick={ () => deletePayment(paymentId)}>Delete </Button>
        </Grid>
        <Grid item xs={3}>
        <Link to={`/payment`}><Button style={style} >Back To Home </Button ></Link>
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

export default connect()(Payment);