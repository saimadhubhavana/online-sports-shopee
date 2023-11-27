import {
    Button,Grid, IconButton
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import React from 'react';
import OrderListing from './OrderListing';
import Box from '@material-ui/core/Box';
import Footer from '../Footer';
import Header from '../Header';

function DashBoard() {

    const history = useHistory();
    return (
        <div>
        <Header />
                <br/>
                <Box component="div" display="inline" > <h3  class="ui red inverted header"> <h2>  Place Your Order:</h2>
                <Button  style={style} onClick={() => history.push("/addOrder")}>ORDER</Button></h3>
                </Box>
                <br/>
                <br/>
                <Box component="div" display="inline" > <h3  class="ui red inverted header"><h2>  Go to Payment :</h2>
                <Button style={style} onClick={() => history.push("/payment")}> Payment </Button></h3></Box>
                <br/>
                <br/>
                <Box component="div" display="inline" > <h3 class="ui red inverted header" ><h2>List of Order Details:</h2></h3></Box>
                <br/>
                <OrderListing />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
          <Footer />    
        </div>

    );
}const style = {

    
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