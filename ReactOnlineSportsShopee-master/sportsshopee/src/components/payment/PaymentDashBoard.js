import React from 'react';
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PaymentListing from './PaymentListing';
import Box from '@material-ui/core/Box';
import Footer from '../Footer';
import Header from '../Header';



function DashBoard() {

    const history = useHistory();
    return (
        <div>
            <Header />
            <br/>
            <Box component="div" display="inline" > <h3  class="ui red inverted header"><h2>Add Payment Detail:</h2>
            <Button style={style} onClick={() => history.push("/addPayment")}>Add Payment</Button></h3>
            </Box>
            <br />
            <Box component="div" display="inline" > <h3  class="ui red inverted header"><h2>Go to Order :</h2>
            <Button style={style} onClick={() => history.push("/order")}> Order </Button></h3></Box>
            <br/>
            <Box component="div" display="inline" > <h3 class="ui red inverted header" ><h3>List of Payment Details:</h3></h3></Box>
                <br/>
                <PaymentListing />
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
    padding: '0 50px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "20px",
};



export default DashBoard;