import React from 'react';
import { updateProduct } from '../../actions/product/ProductAction';
import UpdateProductForm from './UpdateProductForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UpdateProduct = (props) => (
    <div className={useStyles.root}>
        <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Product</h2></Box>
        <Paper elevation={3} >
        
        <UpdateProductForm 
            product= {props.product}
            onSubmitProduct = {(product) => {
                props.dispatch(updateProduct(props.match.params.productId,product));
                alert("Updated Successfully");
                props.history.push('/product');
            }}
        /> 
        </Paper>
    </div>
)

const mapStateToProps = (state,props) => {
    return state.productId === props.match.params.productId
    
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

export default connect(mapStateToProps)(UpdateProduct);