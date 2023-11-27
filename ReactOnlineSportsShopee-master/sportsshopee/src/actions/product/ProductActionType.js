import {ActionType} from './ActionType'

export const getProducts = (products) =>{
    return {
        type: ActionType.GET_PRODUCTS ,
        payload: products
    }
}

export const getProductById = (product) =>{
    return {
        type: ActionType.GET_PRODUCT_ID ,
        payload: product
    }
}

export const deleteProductById = (productId) => {
    return {
        type: ActionType.DELETE_PRODUCT_ID,
        payload: productId
    }
}