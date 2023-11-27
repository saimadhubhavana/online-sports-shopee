import React from "react";
import axios from "axios";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
                userId: "",
                userName: "",
                password: ""
        }
    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({...this.state,[nam]:val});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.validateLogin(this.state);
    }

    onCancel = () => {
        this.props.history.push('/');
    }

    validateLogin = async (User) => {
        console.log("this is validateLogin()", User);
        let result = await axios.patch(`http://localhost:9191/api/oss/validatelogin`, User)
        console.log("result data", result.data);
        if(result.data === "Login Successful!")
        {
            alert("Login Successful!");
            this.props.history.push('/homepage');
        }
        else
        {
            alert("Login Failed! User Name and Password does not Match");
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div >
                <Box color="white" bgcolor="palevioletred" p={1}> <h2>Login :</h2></Box>
         <Paper elevation={3} >
            <Container style={{ backgroundColor: '#c0fefc'  } } >
                <div>  
                <form onSubmit={(event)=>this.handleSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>Login </h2></Box>
                        </div>
                        <br />
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-number" label="User ID" placeholder="Enter User ID" type="number"
                                name="userId" onChange={event=>this.handleChange(event)} />
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="User Name" placeholder="Enter User Name"
                                name="userName" onChange={event=>this.handleChange(event)} />
                        </FormControl>
                        <br />
                        <br />
                        
                        <FormControl fullWidth >
                            <TextField
                            type="password"
                                required id="standard-textarea" label="Password" placeholder="Enter Pasword"
                                name="password" onChange={event=>this.handleChange(event)} />
                        </FormControl>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Button style={style}   type="submit" >Login</Button>
                        <Button style={style} onClick={this.onCancel}> Cancel</Button>

                    </form>
                </div>
               
            </Container>
            </Paper>
            </div>
        );
    };
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