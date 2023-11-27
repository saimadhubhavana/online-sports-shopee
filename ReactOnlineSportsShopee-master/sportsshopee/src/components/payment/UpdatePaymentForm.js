import React from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PaymentValidation from './PaymentValidation';
import { withRouter } from "react-router-dom";
class UpdatePaymentForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            type: "",
            status: "",

            card: {
                id:"",
                cardName: "",
                cardNumber: '',
                cardExpiry: "",
                cvv: '',
            }
        };
        this.validators = PaymentValidation;
        this.resetValidators();
    }

    updateValidators = (fieldName, value) => {
        this.validators[fieldName].errors = [];
        this.validators[fieldName].state = value;
        this.validators[fieldName].valid = true;
        this.validators[fieldName].rules.forEach((rule) => {
            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            }
        });
    }

    resetValidators = () => {
        Object.keys(this.validators).forEach((fieldName) => {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].state = '';
            this.validators[fieldName].valid = false;
        });
    }

    displayValidationErrors = (fieldName) => {
        const validator = this.validators[fieldName];
        const result = '';
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => {
                return <span style={errorStyle} key={index}>* {info}</span>;
            }); 

            return (
                <div style={errorStyle} className="col s12 row">
                    {errors}
                </div>
            ); 
        }
        return result;
    }

    isFormValid = () => {
        let status = true;
        Object.keys(this.validators).forEach((field) => {
            if (!this.validators[field].valid) {
                status = false;
            }
        });
        return status;
    }

    handleInputChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.card[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }
    
    onPaymentIdChange = (e) => {
        this.setState({paymentId : e.target.value});
    }

    onTypeChange = (e) => {
        this.setState({ type: e.target.value });
    }

    onStatusChange = (e) => {
        this.setState({ status: e.target.value });
    }

    onCancel = () => {
        this.props.history.push('/payment');
    }

    onSubmit = (e) => {

        e.preventDefault();
        console.log("Updated");
        console.log(this.state);
        this.props.onSubmitPayment(
            {
                type: this.state.type,
                status: this.state.status,
                id:this.state.card.id,
                cardName: this.state.card.cardName,
                cardNumber: this.state.card.cardNumber,
                cardExpiry: this.state.card.cardExpiry,
                cvv: this.state.card.cvv,
            }

        );
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#c0fefc' }}>
                <div >

                    <form onSubmit={this.onSubmit}  >
                        <div>
                            <Box color="primary.main"> <h2>Payment Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Payment Type</FormLabel>
                            <RadioGroup required aria-label="Payment Status" name="Payment Type" value={this.state.type} onChange={this.onTypeChange}>
                                <FormControlLabel value="Credit" control={<Radio required={true} />} label="Credit" />
                                <FormControlLabel value="Debit" control={<Radio required={true} />} label="Debit" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Payment Status</FormLabel>
                            <RadioGroup required aria-label="Payment Status" name="Payment Status" value={this.state.status} onChange={this.onStatusChange}>
                                <FormControlLabel value="Success" control={<Radio required={true} />} label="Success" />
                                <FormControlLabel value="Pending" control={<Radio required={true} />} label="Pending" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <br />
                        <div>
                            <Box color="primary.main"> <h2>Card Details :</h2></Box>
                        </div>
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Card Id" type="number"
                                value={this.state.card.id} onChange={event => this.handleInputChange(event, 'id')}
                                InputLabelProps={{
                                    shrink: true
                                }} />
                        </FormControl >
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="Card Name" placeholder="Enter Card Name"
                                value={this.state.card.cardName} onChange={event => this.handleInputChange(event, 'cardName')} />
                        </FormControl>
                        {this.displayValidationErrors('cardName')}
                        <br />
                        <br />

                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Card Number" type="number"
                                value={this.state.card.cardNumber} onChange={event => this.handleInputChange(event, 'cardNumber')}
                                InputLabelProps={{
                                    shrink: true
                                }} />
                        </FormControl>
                        {this.displayValidationErrors('cardNumber')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                required id="date"
                                label="Card Expiry"
                                type="date"
                                defaultValue="2021-04-29"
                                className={useStyles.textField}
                                value={this.state.card.cardExpiry}
                                onChange={event => this.handleInputChange(event, 'cardExpiry')}
                                InputLabelProps={{
                                    shrink: true
                                }} />
                        </FormControl>
                        {this.displayValidationErrors('cardExpiry')}
                        <br />
                        <br />

                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Cvv" type="number"
                                value={this.state.card.cvv} onChange={event => this.handleInputChange(event, 'cvv')}
                                InputLabelProps={{
                                    shrink: true
                                }} />
                        </FormControl >
                        {this.displayValidationErrors('cvv')}
                        <br />
                        <br />
                        <Button style={style} type="submit">Update Payment & Card </Button>
                        <Button style={style} onClick={this.onCancel}> Cancel</Button>
                    </form>
                </div>
            </Container>
        )
    }
}

export default withRouter(UpdatePaymentForm);

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

const errorStyle = {
    color: 'red'
};
