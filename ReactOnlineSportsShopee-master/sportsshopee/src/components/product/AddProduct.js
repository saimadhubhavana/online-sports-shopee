import React from 'react';
import { connect } from "react-redux";
import { addProduct } from '../../actions/product/ProductAction';
import AddProductForm from "./AddProductForm";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AddProduct = (props) => (
    <div >
    <div className={useStyles.root}>
         <Box color="white" bgcolor="palevioletred" p={1}> <h2>Add Product</h2></Box>
         <Paper elevation={3} >
        <AddProductForm 
             onSubmitProduct={(state) => {
                 props.dispatch(addProduct(state));
                 alert("Added Successfully");
                 props.history.push('/product');
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
export default connect()(AddProduct);