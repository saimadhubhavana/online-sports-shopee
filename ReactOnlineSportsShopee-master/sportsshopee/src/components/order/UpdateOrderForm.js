import React from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


export default class AddOrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                
                amount: "",
                billingDate:  "",
                customer: {
                    userId:  "",
                },
                product:{
                    productId: "",
                },
                payment:{
                    paymentId:  "",
                },
                error: ""
            

        }
    }
    
    onAmountChange = (e) => {
        this.setState({ amount: e.target.value });
    }

    onBillingDateChange = (e) => {
        this.setState({ billingDate: e.target.value });
    }

    onUserIdChange = (e) => {
        this.setState(state =>({customer: {...state.customer,userId:e.target.value}}));
    }

    onProductIdChange = (e) => {
        this.setState(state =>({product: {...state.product,productId:e.target.value}}));
    }

    onPaymentIdChange = (e) => {
        this.setState(state =>({payment: {...state.payment,paymentId:e.target.value}}));
    }

    onCancel = () => {
        this.props.history.push('/order');
    }

    onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitOrder(
            {
                orderId:this.state.orderId,
                amount: this.state.amount,
                billingDate: this.state.billingDate,
                userId: this.state.customer.userId,
                productId: this.state.product.productId,
                paymentId: this.state.payment.paymentId,
               
            }

        );
 
    }


    render() {
        return (
            <Container >
            <div >
            <form onSubmit={this.onSubmit}  >
                        <div>
                        <Box color="primary.main"> <h2>Order Details :</h2></Box>
                       </div>
                       <br />
               

                <FormControl fullWidth>  
                <TextField
                        required id="standard-number" label="Amount" type="number"
                        value={this.state.amount} onChange={this.onAmountChange}
                        InputLabelProps={{
                            shrink: true
                        }} />
                        </FormControl >
                    <br />
                    <FormControl fullWidth>
                    <TextField
                        required id="date"
                        label="Billing Date"
                        type="date"
                        placeholder="DD/MM/YYYY"
                        className={useStyles.textField}
                        value={this.state.billingDate}
                        onChange={this.onBillingDateChange}
                        InputLabelProps={{
                            shrink: true
                        }} />
                        </FormControl >
                    <br />
                    <FormControl fullWidth>
                    <TextField
                        required id="standard-number" label="User Id" type="number"
                        value={this.state.customer.userId} onChange={this.onUserIdChange}
                        InputLabelProps={{
                            shrink: true
                        }} />
                        </FormControl >
                    <br />
                    <FormControl fullWidth>
                    <TextField
                        required id="standard-number" label="Product Id" type="number"
                        value={this.state.product.productId} onChange={this.onProductIdChange}
                        InputLabelProps={{
                            shrink: true
                        }} />
                        </FormControl >
                    <br />
                    <FormControl fullWidth>
                    <TextField
                        required id="standard-number" label="Payment Id" type="number"
                        value={this.state.payment.paymentId} onChange={this.onPaymentIdChange}
                        InputLabelProps={{
                            shrink: true
                        }} />
                    </FormControl >
                        <br />
                        <br />
                        {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                        <Button style={style} type="submit">Update Order</Button>
                        <Button style={style} onChange={this.onCancel}> Cancel</Button>
                    </form>
                </div>
            </Container>
        )
    }

}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

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
