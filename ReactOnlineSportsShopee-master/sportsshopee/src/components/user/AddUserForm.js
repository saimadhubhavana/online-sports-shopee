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
import UserValidation from './UserValidation';
import { withRouter } from "react-router-dom";



 class AddUserForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
                username: "",
                password: "",
                role:"",
        };
        this.validators = UserValidation;
        this.resetValidators();
    }

    updateValidators = (fieldName, value) => {
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
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }
    onTypeChange = (event) => {
        this.setState({ role: event.target.value });

    }
    onCancel = () => {
        this.props.history.push('/');
    }

    onSubmit = event => {

        console.log("Submitted");
        console.log(this.state);
        event.preventDefault();
        this.props.onSubmitUser(
            {
                username: this.state.username,
                password: this.state.password,
                role: this.state.role,

            }

        );
 
    }



    render() {
        return (
            <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >

                    <form onSubmit={event => this.onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>User Details :</h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="User Name" placeholder="Enter User Name"
                                value={this.state.username} onChange={event => this.handleInputChange(event, 'username')} />
                        </FormControl>
                        {this.displayValidationErrors('username')}
                        <br />
                        <br />
                        
                        <FormControl fullWidth >
                            <TextField
                            type="password"
                                required id="standard-textarea" label="Password" placeholder="Enter Pasword"
                                value={this.state.password} onChange={event => this.handleInputChange(event, 'password')} />
                        </FormControl>
                        {this.displayValidationErrors('Password')}
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">User Type</FormLabel>
                            <RadioGroup required aria-label="Role" name="User Type" value={this.state.role} onChange={this.onTypeChange}>
                                <FormControlLabel value="User" control={<Radio required={true} />} label="User" />
                                <FormControlLabel value="Admin" control={<Radio required={true} />} label="Admin" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <br />
                        <Button style={style} type="submit" >Add User </Button>
                        <Button style={style} onClick={this.onCancel}> Cancel</Button>
                    </form>
                </div>
            </Container>
        )
    }

}
export default withRouter(AddUserForm);

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
