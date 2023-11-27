import 'bootstrap/dist/css/bootstrap.min.css';

const productReducerDefaultState = [];

const productReducer =  (state = productReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                action.product
            ];

        case 'UPDATE_PRODUCT':
            return state.map((product,productId) => {
                if (productId === action.productId){
                    return {
                        ...state,
                        ...action.product
                    };
                }else {
                    return product;
                }
            });

        default:
            return state;
    }
}
export default productReducer;