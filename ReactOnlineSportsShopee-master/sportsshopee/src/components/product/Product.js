import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {  getProductById ,deleteProductById} from "../../actions/product/ProductActionType";
import { Button, Grid } from '@material-ui/core';
import {Link} from "react-router-dom"

const Product = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [product,setProduct] = useState({
        productId: "",
        productName: "",
        category: "",
        description: "",
        brand: "",
        color: "",
        size: "",
        mrp: "",
        discount: "",
        priceAfterDiscount: "",
        inStock: "",
        estimatedDelivery: "",

        cart: {
            cartid: "",
            imageName: "",
            cartProductName : "",
            quantity: "",
            price: "",
            total: "",
        }
    });

    useEffect(() => {
        loadProduct();
    },[])

    const loadProduct = async () => 
    {
        const result=await axios.get(`http://localhost:9191/api/oss/getProduct/${productId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getProductById(result.data));
        setProduct(result.data);
    }
    const  deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:9191/api/oss/deleteProduct/${productId}`).catch((err) => {console.log("Error" , err);});
       dispatch(deleteProductById(productId));
       alert("Deleted Successfully");
       history.push('/product')
     }

    return (
        <div >
        <h1 class="display-4  bg-primary text-white"> Product Detail  </h1> 
        <ul class="list-group-item">
            <li class="list-group-item list-group-item-info"> <h3>Product Id : {productId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Product Name : {product.productName}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Product Category : {product.category}</h3> </li>
            <li class="list-group-item list-group-item-info"> <h3>Product Description : {product.description}</h3> </li>
            <li class="list-group-item list-group-item-info"> <h3>Product Brand : {product.brand}</h3> </li>
            <li class="list-group-item list-group-item-info"> <h3>Product Color : {product.color}</h3> </li>
            <li class="list-group-item list-group-item-info"> <h3>Product Size : {product.size}</h3> </li>
            <li class="list-group-item list-group-item-info"> <h3>Product Mrp : {product.mrp}</h3> </li>
            <li class="list-group-item list-group-item-info"> <h3>Product Discount : {product.discount}</h3> </li>
            <li class="list-group-item list-group-item-info"> <h3>Product priceAfterDiscount : {product.priceAfterDiscount}</h3> </li>
            <li class="list-group-item list-group-item-info"> <h3>Product Estimated Delivery : {product.estimatedDelivery}</h3> </li>
            
        </ul>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <Link to={`/order`}><Button style={style} >Order </Button></Link>
        </Grid>
        <Grid item xs={3}>
        <Link to={`/product`}><Button style={style} >See more Products </Button ></Link>
        </Grid>
        </Grid>

        </div>
    )
}

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

export default connect()(Product);