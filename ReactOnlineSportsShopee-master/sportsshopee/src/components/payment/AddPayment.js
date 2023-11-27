import React from 'react';
import { connect } from "react-redux";
import { addPayment } from '../../actions/payment/PaymentAction';
import AddPaymentForm from "./AddPaymentForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AddPayment = (props) => (
    <div style={{ backgroundColor: '#3edbf0' }}>
    <div className={useStyles.root}>
         <Box color="white" bgcolor="black" p={1}> <h2 class="ui blue inverted header">Add Payment</h2></Box>
         <Paper elevation={3} >
        <AddPaymentForm 
             onSubmitPayment={(state) => {
                 props.dispatch(addPayment(state));
                 alert("Added Successfully");
                 props.history.push('/payment');
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
export default connect()(AddPayment);