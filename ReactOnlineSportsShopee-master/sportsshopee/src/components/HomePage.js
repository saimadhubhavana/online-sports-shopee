import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {  useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import { Box,  Button,  Card,  CardActions,  CardContent, Grid, Paper, Typography } from "@material-ui/core";
import image1 from '../images/onlineshop.jpg';
import image2 from '../images/customerfb.jpg';
import image3 from '../images/productr.jpg';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import userimg from '../images/usercard.jpg';
import customerimg from '../images/customercard.jpg';
import paymentimg from '../images/paymentcard.jpg';
import productimg from '../images/productcard.jpg';
import bgimg from '../images/greyws.jpg'




function HomePage(){
    const history = useHistory();
    const classes = useStyles();
    return(
        <div>
            <Header/>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src={image1}
                        alt="First Slide"/>
                        <Carousel.Caption>
                            <h2>Online Sports Shop</h2>
                            <p>Our Online Shop list all the lastest and new sports items</p>
                            <Box m={5}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src={image3}
                        alt="Second Slide"/>
                        <Carousel.Caption>
                            <h2>Product Quality</h2>
                            <p>Our Product  are made up of  one of the best quality material and We give warrenty also!!! </p>
                            <Box m={5}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" 
                        src={image2}
                        alt="Third Slide"/>
                        <Carousel.Caption>
                            <div class="text-dark">
                            <h2 >Customer Review</h2>
                            <p>Our Online Shop get award for best raing website!! </p>
                            </div>
                            <Box m={5}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
            <br />
            <div style={{ backgroundImage: `url(${bgimg})` }}>
            <div>
                <Grid  container component="main" spacing={10} direction="row" justify="center" alignItems="center">
                <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>

                        <CardMedia 
                        component="img"
                        alt="Users Manager" 
                        height = '200'
                        image={userimg}
                        title = "User Sevice" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                            USER 
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions >
                            <Button 
                            center
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/user")}>
                                USER 
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
                        image={customerimg}
                        title = "Customer Service" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                             CUSTOMER
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions >
                            <Button  
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/customer")}>
                                CUSTOMER
                            </Button>
                        </CardActions>
                </Card>
                </Paper>
                </Grid>
                </Grid>
            </div>
            <br />
            <br />
            <br />
            <div>
            <Grid  container component="main" spacing={10} direction="row" justify="center" alignItems="center">
            <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>

                        <CardMedia 
                        component="img"
                        alt="Payment DashBoard" 
                        height = '200'
                        image={productimg}
                        title = "User Sevice" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                PRODUCT
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button  
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/product")}>
                                Product
                            </Button>
                        </CardActions>

                    </CardActionArea>
                </Card>
                </Paper>
                </Grid>
                <Grid item md={3} >
                <Paper >
                <Card  className={classes.root}>
                    <CardActionArea>

                        <CardMedia 
                        component="img"
                        alt="Payment DashBoard" 
                        height = '200'
                        image={paymentimg}
                        title = "User Sevice" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                                PAYMENT
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button  
                            variant="outlined"
                            color="primary"
                            onClick={()=> history.push("/payment")}>
                                Payment
                            </Button>
                        </CardActions>

                    </CardActionArea>
                </Card>
                </Paper>
                </Grid>
                </Grid>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
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
  

export default HomePage;

