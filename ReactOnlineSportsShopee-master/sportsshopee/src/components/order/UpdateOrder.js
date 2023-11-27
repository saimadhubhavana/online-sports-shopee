import React from 'react';
import { updateOrder } from '../../actions/order/OrderAction';
import UpdateOrderForm from './UpdateOrderForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UpdateOrder = (props) => (
    <div className={useStyles.root}>
        <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Order</h2></Box>
        <Paper elevation={3} >
        
        <UpdateOrderForm 
            order= {props.order}
            onSubmitOrder = {(order) => {
                props.dispatch(updateOrder( props.match.params.orderId,order));
                alert("Updated Successfully");
                props.history.push('/order');
            }}
        /> 
        </Paper>
    </div>
)

const mapStateToProps = (state,props) => {
    return state.orderId === props.match.params.orderId
    
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

export default connect(mapStateToProps)(UpdateOrder);