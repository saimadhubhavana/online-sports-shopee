import 'bootstrap/dist/css/bootstrap.min.css';

const orderReducerDefaultState = [];

const orderReducer =  (state = orderReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return [
                ...state,
                action.order
            ];
            case 'UPDATE_ORDER':
            return state.map((order,orderId) => {
                if (orderId === action.orderId){
                    return {
                        ...state,
                        ...action.order
                    };
                }else {
                    return order;
                }
            });

           
            default:
                return state;
        }
    }
    
    export default orderReducer;