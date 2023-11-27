import React from 'react';
import { updatePayment } from '../../actions/payment/PaymentAction';
import UpdatePaymentForm from './UpdatePaymentForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UpdatePayment = (props) => (
    <div style={{ backgroundColor: '#3edbf0' }}>
    <div className={useStyles.root}>
        <Box color="white" bgcolor="black" p={1}> <h2  class="ui blue inverted header">Update Payment</h2></Box>
        <Paper elevation={3} >
        
        <UpdatePaymentForm 
            payment= {props.payment}
            onSubmitPayment = {(payment) => {
                props.dispatch(updatePayment(props.match.params.paymentId,payment));
                alert("Updated Successfully");
                props.history.push('/payment');
            }}
        /> 
        </Paper>
    </div>
    </div>
)

const mapStateToProps = (state,props) => {
    return state.paymentId === props.match.params.paymentId
    
};

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

export default connect(mapStateToProps)(UpdatePayment);