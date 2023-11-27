import {
    Button, Grid
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import ProductListing from './ProductListing';
import Box from '@material-ui/core/Box';
import Header from '../Header';
import Footer from '../Footer';



function DashBoard() {

    const history = useHistory();
    return (
        <div>
            <Header />
            <br/>
                <Box color="primary.main"  component="div"   > <h3 class="ui red inverted header">Add Product Detail:
                <Button style={style} onClick={() => history.push("/addProduct")}>Add Product</Button></h3>
                </Box>
                <br/>

                <Box color="primary.main" component="div"   > <h2 class="ui red inverted header" >List of Product Details:</h2></Box>
                <Grid   >
                <br/>
                    <ProductListing />
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <Footer />
        </div>

    );
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



export default DashBoard;