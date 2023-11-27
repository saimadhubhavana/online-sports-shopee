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
import ProductValidation from './ProductValidation';
import { withRouter } from "react-router-dom";



 class AddProductForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        
            productName: "",
            category: "",
            description: "",
            brand: "",
            color: "",
            size: "",
            mrp: "",
            discount: "",
            priceAfterDiscount: "",
            inStock: "",
            estimatedDelivery: "",


            cart: {
                
                imageName: "",
                cartProductName: "",
                quantity: '',
                price: '',
                total: '',
            }
        };
        this.validators = ProductValidation;
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
        newState.cart[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }



    onProductIdChange = (e) => {
        this.setState({ productId: e.target.value });
    }

    onProductNameChange = (e) => {
        this.setState({ productName: e.target.value });
    }

    onCategoryChange = (e) => {
        this.setState({ category: e.target.value });
    }

    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    }

    onCartProductNameChange = (e) => {
        this.setState(state => ({ cart: { ...state.cart, cartProductName: e.target.value }, }));
    }

    onBrandChange = (e) => {
        this.setState({ brand: e.target.value });
    }

    onColorChange = (e) => {
        this.setState({ color: e.target.value });
    }

    onSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    onMrpChange = (e) => {
        this.setState({ mrp: e.target.value });
    }

    onDiscountChange = (e) => {
        this.setState({ discount: e.target.value });
    }

    onPriceAfterDiscountChange = (e) => {
        this.setState({ priceAfterDiscount: e.target.value });
    }

    onInStockChange = (e) => {
        this.setState({ inStock: e.target.value });
    }

    onEstimatedDeliveryChange = (e) => {
        this.setState({ estimatedDelivery: e.target.value });
    }

    onImageChange = (e) => {
        this.setState(state => ({ cart: { ...state.cart, imageName: e.target.value }, }));
    }
    
 onQuantityChange = (e) => {
        this.setState(state => ({ cart: { ...state.cart, quantity: e.target.value }, }));
    }

    onTotalChange = (e) => {
        this.setState(state => ({ cart: { ...state.cart, total: e.target.value }, }));
    }
    
    onCancel = () => {
        this.props.history.push('/product');
    }

    onSubmit = event => {
        event.preventDefault();
        console.log("Submitted");
        console.log(this.state);
       
        this.props.onSubmitProduct(
            {
             
                productName: this.state.productName,
                category: this.state.category,
                description: this.state.description,
                brand: this.state.brand,
                color: this.state.color,
                size: this.state.size,
                mrp: this.state.mrp,
                discount: this.state.discount,
                priceAfterDiscount: this.state.priceAfterDiscount,
                inStock: this.state.inStock,
                estimatedDelivery: this.state.estimatedDelivery,
                
                imageName: this.state.cart.imageName,
                cartProductName: this.state.cart.cartProductName,
                quantity: this.state.cart.quantity,
                price: this.state.cart.price,
                total: this.state.cart.total,
            }

        );
 
    }



    render() {
        return (
            <Container style={{ backgroundColor: '#cfe8fc' }} >
                <div  >

                    <form onSubmit={event => this.onSubmit(event)} >
                        <div>
                            <Box color="primary.main" p={1}> <h2>Product Details :</h2></Box>
                        </div>
                    

                        <br />
                            <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="Product Name" placeholder="Enter Product Name"
                                value={this.state.productName} onChange={event => this.onProductNameChange(event)} />
                        </FormControl>
                        
                        <br />
                        <br />

                    

                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Product Category</FormLabel>
                            <FormControlLabel value="Sports Items" control={<Radio required={true} />} label="Sports Items" />
                                <FormControlLabel value="Sports Fits" control={<Radio required={true} />} label="Sports Fits" />
                                <FormControlLabel value="Shoes" control={<Radio required={true} />} label="Shoes" />
                               <TextField
                                required id="standard-textarea" label="Product Category" placeholder="Enter Product Category"
                                value={this.state.category} onChange={event => this.onCategoryChange(event)} />
                                

                        </FormControl>
                    
                        <br />

                        <br />
                            <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="Product Description" placeholder="Enter Product Description"
                                value={this.state.description} onChange={event => this.onDescriptionChange(event)} />
                        </FormControl>
                     
                        <br />
                        <br />

                        <br />
                            <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="Product Brand" placeholder="Enter Product Brand"
                                value={this.state.brand} onChange={event => this.onBrandChange(event)} />
                        </FormControl>
                        
                        <br />
                        <br />
                       
                        <br />
                            <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="Product Color" placeholder="Enter Product Color"
                                value={this.state.color} onChange={event => this.onColorChange(event)} />
                        </FormControl>
                        
                        <br />
                        <br />

                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Product Size</FormLabel>
                            <RadioGroup required aria-label="Product Size" name="Product Size" value={this.state.size} onChange={this.onSizeChange}>
                                <FormControlLabel value="32" control={<Radio required={true} />} label="XS" />
                                <FormControlLabel value="35" control={<Radio required={true} />} label="S" />
                                <FormControlLabel value="38" control={<Radio required={true} />} label="M" />
                                <FormControlLabel value="42" control={<Radio required={true} />} label="L" />
                                <FormControlLabel value="44" control={<Radio required={true} />} label="XL" />
                                <FormControlLabel value="46" control={<Radio required={true} />} label="XXL" />
                            </RadioGroup>
                            <TextField
                                required id="standard-textarea" label="Product Size" placeholder="Enter Product Size"
                                value={this.state.size} onChange={event => this.onSizeChange(event)} />
                              
                        </FormControl>
                        <br />

                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Product Mrp" type="number"
                                value={this.state.mrp} onChange={event => this.onMrpChange(event)}
                                InputLabelProps={{
                                 
                                }} />
                        </FormControl>
                        
                        <br />
                        <br />

                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Product Discount" type="number"
                                value={this.state.discount} onChange={event => this.onDiscountChange(event)}
                                InputLabelProps={{
                                    
                                }} />
                        </FormControl>
                        
                        <br />
                        <br />

                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Product Price After Discount" type="number"
                                value={this.state.priceAfterDiscount} onChange={event => this.onPriceAfterDiscountChange(event)}
                                InputLabelProps={{
                                   
                                }} />
                        </FormControl>
                        
                        <br />
                        <br />

                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Product InStock</FormLabel>
                            <RadioGroup required aria-label="Product InStock" name="Product InStock" value={this.state.inStock} onChange={this.onInStockChange}>
                                <FormControlLabel value="true" control={<Radio required={true} />} label="Available" />
                                <FormControlLabel value="false" control={<Radio required={true} />} label="Not Available" />
                            </RadioGroup>
                            <TextField
                                required id="standard-textarea" label="Product inStock" placeholder="Enter Product inStock"
                                value={this.state.inStock} onChange={event => this.onInStockChange(event)} />
                              

                        </FormControl>
                        <br />

                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Product Estimated Delivery" type="date"
                                value={this.state.estimatedDelivery} onChange={event => this.onEstimatedDeliveryChange(event)}
                                InputLabelProps={{
                                shrink : true
                                }} />
                        </FormControl>
                     
                        <br />
                        <br />
                    
                
                
                        <br />
                        <br />

                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="Image Name" placeholder="Enter Image Name"
                                value={this.state.cart.imageName} onChange={event => this.onImageChange(event)} />
                        </FormControl>
                        {this.displayValidationErrors('imageName')}
                        <br />
                        <br />

                        <FormControl fullWidth >
                            <TextField
                                required id="standard-textarea" label="Cart Product Name" placeholder="Enter Cart Product Name"
                                value={this.state.cart.cartProductName} onChange={event => this.onCartProductNameChange(event)} />
                        </FormControl>
           
                        <br />
                        <br />

                        
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Quantity" type="number"
                                value={this.state.cart.quantity} onChange={event => this.onQuantityChange(event)}
                                InputLabelProps={{
                                
                                }} />
                        </FormControl>
                        {this.displayValidationErrors('quantity')}
                        <br />
                        <br />

                        
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Price" type="number"
                                value={this.state.cart.price} onChange={event => this.handleInputChange(event, 'price')}
                                InputLabelProps={{
                                 
                                }} />
                        </FormControl>
                        {this.displayValidationErrors('price')}
                        <br />
                        <br />

                        
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Total" type="number"
                                value={this.state.cart.total} onChange={event => this.onTotalChange(event)}
                                InputLabelProps={{
                                    
                                }} />
                        </FormControl>
                        
                        <br />
                        <br />

                        <Button style={style} type="submit" >Add Product & Cart</Button>
                        <Button style={style} onClick={this.onCancel}> Cancel</Button>
                    </form>
                </div>
            </Container>
        )
    }

}
export default withRouter(AddProductForm);

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