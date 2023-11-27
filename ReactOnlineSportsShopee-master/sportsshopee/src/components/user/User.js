import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { connect, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import {  getUser, deleteUser } from "../../actions/user/UserActionType";
import { Button, Grid } from '@material-ui/core';
import {Link} from "react-router-dom"

const User = () => {
    const {userId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [user,setUser] = useState({
            userId:'',
            username:'',
            password:'',
            role:'',
        
    });

    useEffect(() => {
        loadUser();
    },[])

    const loadUser = async () => 
    {
        const result=await axios.get(`http://localhost:9191/api/oss/getuser/${userId}`).catch((err) => { console.log("Error ", err); });
        dispatch(getUser(result.data));
        setUser(result.data);
    }
    const  removeUser = async (userId) => {
        await axios.delete(`http://localhost:9191/api/oss/deleteuser/${userId}`).catch((err) => {console.log("Error" , err);});
       dispatch(deleteUser(userId));
       alert("Deleted Successfully");
       history.push('/user')
     }

    return (
        <div >
        <h1 class="display-4  bg-primary text-white"> User Detail  </h1> 
        <ul class="list-group-item">
            <li class="list-group-item list-group-item-info"> <h3>User Id : {user.userId}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>user Name : {user.username}</h3> </li>
            <li class="list-group-item list-group-item-info"><h3>Password :  {user.password}</h3></li>
            <li class="list-group-item list-group-item-info"><h3>Role :  {user.role}</h3></li>
        </ul>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button style={style} onClick={ () =>  removeUser(userId)} > Delete </Button>
        </Grid>
        <Grid item xs={3}>
        <Link to={`/User`}><Button style={style} >Back To Home </Button ></Link>
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

export default connect()(User);