import { Box } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import contactus from '../images/contactus.jpg';

export const Contact = () => {

    return (
        <div>
            <Header />
            <div class='contact' style={{ backgroundImage: `url(${contactus})` }}>
                <center>
                    <div >
                        <div>
                            <br />
                            <br />
                            <Box p={1} > <h1 class="ui red inverted header"><h1 class="display-2"> <strong>Contact Us </strong></h1></h1></Box>
                            <br />
                            <br />
                            <h1 class="text-dark"> You can know a little more about us here......</h1>
                            <h2 class="text-dark" >Please feel free to contact us if you have further comments or questions.</h2><br></br>
                            <h2><mark class="bg-info text-white">capgeminisportsshop@gmail.com</mark></h2><br></br>
                            <h3><mark class="bg-info text-white">+91-44–47893258</mark></h3>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </center>
            </div>
            <Footer />
        </div>
    );
};