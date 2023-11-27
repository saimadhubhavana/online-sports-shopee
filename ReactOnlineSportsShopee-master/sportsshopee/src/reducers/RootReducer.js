import { combineReducers } from "redux";
import  paymentReducer  from "./payment/paymentReducer";
import { getPaymentReducer,getPaymentsReducer } from "./payment/PaymentReducerType";
import  userReducer  from "./user/userReducer";
import { getUserReducer,getUsersReducer } from "./user/UserReducerType";
import  customerReducer  from "./customer/CustomerReducer";
import { getCustomerReducer,getCustomersReducer } from "./customer/CustomerReducerType";
import  productReducer  from "./product/productReducer";
import { getProductReducer,getProductsReducer } from "./product/ProductReducerType";
import  orderReducer  from "./order/orderReducer";
import { getOrderReducer,getOrdersReducer } from "./order/OrderReducerType";

const rootReducer = combineReducers({
    paymentReducer,
    allPayments:getPaymentsReducer,
    payment:getPaymentReducer,
    userReducer,
    allUsers:getUsersReducer,
    user:getUserReducer,
    customerReducer,
    allCustomers:getCustomersReducer,
    customer:getCustomerReducer,
    productReducer,
    allProducts:getProductsReducer,
    product:getProductReducer,
    orderReducer,
    allOrders:getOrdersReducer,
    order:getOrderReducer,
});

export default rootReducer;