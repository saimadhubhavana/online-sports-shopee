import React from 'react';
import { connect } from "react-redux";
import { addOrder } from '../../actions/order/OrderAction';
import AddOrderForm from "./AddOrderForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AddOrder = (props) => (
    <div style={{ backgroundColor: '#3edbf0' }}>
    <div className={useStyles.root}>
         <Box color="white" bgcolor="black" p={1}> <h2 class="ui blue inverted header">Add Order</h2></Box>
         <Paper elevation={3} >
        <AddOrderForm 
             onSubmitOrder={(state) => {
                 props.dispatch(addOrder(state));
                 alert("Your Order has been Placed Successfully");
                 props.history.push('/order');
             }} />
             </Paper>
        
    </div>
    </div>
);
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
export default connect()(AddOrder);