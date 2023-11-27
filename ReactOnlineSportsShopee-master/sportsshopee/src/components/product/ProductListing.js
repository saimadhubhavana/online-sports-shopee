import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../actions/product/ProductActionType";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';



const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const fetchProducts = async () => {
    const result = await axios.get('http://localhost:9191/api/oss/getAllProduct').catch((err) => { console.log("Error ", err); });
    console.log(result);
    dispatch(getProducts(result.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products :", products);

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Product Id</StyledTableCell>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell>Category</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Brand</StyledTableCell>
                <StyledTableCell>Color</StyledTableCell>
                <StyledTableCell>Size</StyledTableCell>
                <StyledTableCell>Mrp</StyledTableCell>
                <StyledTableCell>Discount</StyledTableCell>
                <StyledTableCell>Price After Discount</StyledTableCell>
                <StyledTableCell align="center">View</StyledTableCell>
                <StyledTableCell align="center">Order</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {
                products.map((product) => {
                  const { productId, productName, category, description, brand, color, size, mrp, discount, priceAfterDiscount, estimatedDelivery } = product;
                  return (
                    <StyledTableRow key={productId}>
                      <td>{productId}</td>
                      <td>{productName}</td>
                      <td>{category}</td>
                      <td>{description}</td>
                      <td>{brand}</td>
                      <td>{color}</td>
                      <td>{size}</td>
                      <td>{mrp}</td>
                      <td>{discount}</td>
                      <td>{priceAfterDiscount}</td>
                      
                      
                      <td align="center"><Link to={`/getProductById/${productId}`}><Button color="primary" variant="contained" className="btn btn-info">View </Button></Link></td>
                      <td align="center"><Link to={`/order`}><Button color="secondary" variant="contained" className="btn btn-info">Order </Button></Link></td>
                    </StyledTableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </div>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default ProductListing;