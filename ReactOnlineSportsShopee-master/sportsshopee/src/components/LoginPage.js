import React from 'react';
import {  useHistory } from 'react-router-dom';
import logimg from '../images/blurbg.jpg';
import { Box,  Button,  Card,  CardActions,  CardContent, Grid,  Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import loginimg from '../images/logincard.jpg';
import signimg from '../images/singupcard.jpg';

const LoginPage = () => {
    const history = useHistory();
    const classes = useStyles();
    return(
        <div  >
          <div >
            <div>
                <center>
                <Box bgcolor="#344fa1" p={1} > <h1 class="ui white inverted header"><h1 class="display-3"> <strong >Welcome To Our Capgemini Sports Shop </strong></h1></h1></Box>
                </center>
            </div>
                
            <div style={{ backgroundImage: `url(${logimg})` }} > 
                <br/>
                <br/>
                <br/>
                <div>
                <Grid  container component="main" spacing={10} direction="row" justify="center" alignItems="center">
                <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        alt="Login Page" 
                        height = '200'
                        image={loginimg}
                        title = "Login Page" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text} >
                                LOGIN
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions >
                            <Button 
                            center
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/login")}>
                                Login
                            </Button>
                        </CardActions>
                </Card>
                </ Paper>
                </Grid>
                <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        alt="Customer DashBoard" 
                        height = '200'
                        image={signimg}
                        title = "Customer Service" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                SIGN UP
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions >
                            <Button  
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/signup")}>
                                SIGN UP 
                            </Button>
                        </CardActions>
                </Card>
                </Paper>
                </Grid>
                </Grid>
            </div>
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
            </div>
          </div>
        </div>

      
                 
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.disabled,
      backgroundColor: 'grey'
    },
    text:{
        color:"#1597bb"
    },
  }));

export default LoginPage;
