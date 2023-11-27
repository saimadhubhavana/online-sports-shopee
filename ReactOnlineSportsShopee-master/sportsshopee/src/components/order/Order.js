
import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {  getOrderById ,deleteOrderById} from "../../actions/order/OrderActionType";
import { Button, Grid } from '@material-ui/core';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const Order = () => {
    const {orderId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [order,setOrder] = useState({
         amount: '',
         billingDate: '',
         customer: {
             userId: '',
             name: '',
             email: '',
             contactNo: '',
             dob:'' ,
             address: {
                 addressId:'' ,
                 doorNo:'' ,
                 street:'' ,
                 area:'' ,
                 city:'' ,
                 state:'' ,
                 pinCode: '',
             }
         },
         product: {
             productId: '',
             productName: '',
             category: '',
             description: '',
             brand: '',
             color: '',
             size: '',
             mrp: '',
             discount: '',
             priceAfterDiscount: '',
             inStock: '',
             estimatedDelivery:'',
             cart: {
                 imageName: '',
                 quantity: '',
                 price:'',
                 total: '',
                 productName: '',
                 cartId: '',
             }
         },
         payment: {
             paymentId: '',
             type: '',
             status: '',
             card: {
                 id: '',
                 cardName:'',
                 cardNumber: '',
                 cardExpiry:'',
                 cvv: '',
             }
         }
    
     });
     

    useEffect(() => {
        loadOrder();
    },[])

    const loadOrder = async () => 
    {
        const result=await axios.get(`http://localhost:9191/api/oss/getOrder/${orderId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getOrderById(result.data));
        setOrder(result.data);
    }
    const  deleteOrder = async (orderId) => {
        await axios.delete(`http://localhost:9191/api/oss/removeOrder/${orderId}`).catch((err) => {console.log("Error" , err);});
       dispatch(deleteOrderById(orderId));
       alert("Deleted Successfully");
       history.push('/order')
     }
     return (
        <div className={useStyles.root}>
        <Box color="white" bgcolor="black" p={1}> <h2 class="ui blue inverted header">Order Details</h2></Box>
        <Paper elevation={3} >
        <ul class="list-group-item" style={{ backgroundColor: '#c0fefc'  } }>
            <li class="list-group-item list-group-item-info"> <h3>Order Id : {orderId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Amount : {order.amount}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Billing Date : {order.billingDate}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>User Id : {order.customer.userId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Name : {order.customer.name}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Email : {order.customer.email}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Contact No. : {order.customer.contactNo}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>DOB : {order.customer.dob}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Address Id : {order.customer.address.addressId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Door No. : {order.customer.address.doorNo}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Street : {order.customer.address.street}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Area : {order.customer.address.area}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>city : {order.customer.address.city}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>State : {order.customer.address.state}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>PinCode : {order.customer.address.pinCode}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Product Id : {order.product.productId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Product Name : {order.product.productName}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Category : {order.product.category}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Description : {order.product.description}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Brand : {order.product.brand}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Color: {order.product.color}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Size : {order.product.size}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Mrp : {order.product.mrp}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Discount : {order.product.discount}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>PriceAfterDiscount: {order.product.priceAfterDiscount}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Estimated Delivery: {order.product.estimatedDelivery}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>ImageName : {order.product.cart.imageName}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Quantity : {order.product.cart.quantity}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Price : {order.product.cart.price}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Total : {order.product.cart.total}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Product Name : {order.product.cart.productName}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Cart Id : {order.product.cart.cartId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Payment Id :  {order.payment.paymentId}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Type :  {order.payment.type}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Status :  {order.payment.status}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Id :  {order.payment.card.id}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Name :  {order.payment.card.cardName}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Number :  {order.payment.card.cardNumber}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Card Expiry :  {order.payment.card.cardExpiry}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>CVV :  {order.payment.card.cvv}</h3></li>
            
        </ul>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button style={style} onClick={ () => deleteOrderById(orderId)}>Delete </Button>
        </Grid>
        <Grid item xs={3}>
        <Link to={`/order`}><Button style={style} >Back To Home </Button ></Link>
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

export default connect()(Order);

    
    