import {
    Button, Grid
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import UserListing from './UserListing';
import Box from '@material-ui/core/Box';
import Header from '../Header';
import Footer from '../Footer';



function DashBoard() {

    const history = useHistory();
    return (
        <div>
            <Header />
            <br/>
            <Box component="div" display="inline" > <h3  class="ui red inverted header"><h2>Go to Customer :</h2>
            <Button style={style} onClick={() => history.push("/customer")}> Customer </Button></h3></Box>
                <br/>
                <Box color="primary.main" component="div" display="inline"  > <h2 class="ui red inverted header">List of User Details:</h2></Box>
                <Grid   >
                    <br/>
                    <UserListing />
                </Grid>
                <br/>
                <br/>
                <br/>
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