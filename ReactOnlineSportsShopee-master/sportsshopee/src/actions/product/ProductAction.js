import axios from "../../axios/axios";


const _addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
});

export const addProduct = (productData = {
    
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
    imageName: "",
    cartProductName : "",
    quantity: "",
    price: "",
    total: "",
    
}) => {
    return (dispatch) => {
        const product = {
            productName: productData.productName,
            category: productData.category,
            description: productData.description,
            brand: productData.brand,
            color: productData.color,
            size: productData.size,
            mrp: productData.mrp,
            discount: productData.discount,
            priceAfterDiscount: productData.priceAfterDiscount,
            inStock: productData.inStock,
            estimatedDelivery: productData.estimatedDelivery,
            cart:
            {  
            imageName: productData.imageName,
            productName: productData.cartProductName,
            quantity: productData.quantity,
            price: productData.price,
            total: productData.total
            }
        };
        console.log(product);
        const result = axios.post('/addProduct', product);
        dispatch(_addProduct(result.data));
    };
};

const _updateProduct = (productId,updatedProduct) => ({
    type:"UPDATE_PRODUCT",
    productId,
    updatedProduct
});


export const updateProduct = (productId,updatedProduct) => {
    return (dispatch) => {
        const product = {
            productId:productId,
            productName: updatedProduct.productName,
            category : updatedProduct.category,
            description: updatedProduct.description,
            brand: updatedProduct.brand,
            color: updatedProduct.color,
            size: updatedProduct.size,
            mrp: updatedProduct.mrp,
            discount: updatedProduct.discount,
            priceAfterDiscount: updatedProduct.priceAfterDiscount,
            inStock : updatedProduct.inStock,
            estimatedDelivery: updatedProduct.estimatedDelivery,
            
            cart:{
                cartid:updatedProduct.cartid,
                imageName:updatedProduct.imageName,
                cartProductName:updatedProduct.cartProductName,
                quantity:updatedProduct.quantity,
                price:updatedProduct.price,
                total:updatedProduct.total
            }
        };
        console.log(product);
        return axios.put(`/updateProduct/${productId}`,product).then(() => {
            dispatch(_updateProduct(productId,product));
        }).catch(error => {
            throw (error);
        });
    }
};