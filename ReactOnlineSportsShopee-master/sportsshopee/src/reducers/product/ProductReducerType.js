import { ActionType } from "../../actions/product/ActionType";

const initialState ={
    products:[]
};

export const getProductsReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionType.GET_PRODUCTS:
            return {...state,products:payload}
            
    
        default:
            return state;
            
    }
};

export const getProductReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case ActionType.GET_PRODUCT_ID:
            return {...state,...payload}
            
        default:
            return state;
    }
}

export const deleteProductReducer = (state = {} , {type,payload}) => {
    switch (type){
        case ActionType.DELETE_PRODUCT_ID:
            return {...state,productId:payload}

        default :
            return state
    }
}