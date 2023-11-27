import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PaymentDashBoard from '../components/payment/PaymentDashBoard';
import AddPayment from '../components/payment/AddPayment';
import UpdatePayment from '../components/payment/UpdatePayment';
import Payment from '../components/payment/Payment';
import LoginPage from '../components/LoginPage';
import AboutUs from '../components/AboutUs';
import { Contact } from '../components/Contact';
import Login from '../components/login/Login'
import AddUser from '../components/user/AddUser';
import DashBoard from '../components/user/DashBoard';
import UpdateUser from '../components/user/UpdateUser';
import User from '../components/user/User';
import CustomerDashBoard from "../components/customer/DashBoard"
import AddCustomer from '../components/customer/AddCustomer';
import UpdateCustomer from '../components/customer/UpdateCustomer';
import Customer from '../components/customer/Customer';
import ProductDashBoard from '../components/product/DashBoard';
import AddProduct from '../components/product/AddProduct';
import UpdateProduct from '../components/product/UpdateProduct';
import Product from '../components/product/Product';
import OrderDashBoard from '../components/order/OrderDashBoard';
import AddOrder from '../components/order/AddOrder';
import UpdateOrder from '../components/order/UpdateOrder';
import Order from '../components/order/Order';
import NotFound from '../components/NotFound';

const HomeRouter = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path="/" component={LoginPage} exact/>
                 <Route path="/login" component={Login} />
                 <Route path="/signup" component={AddUser} />
                 <Route path ={`/aboutus`} component={AboutUs} />
                 <Route path ={`/contact`} component={Contact} />
                 <Route path={`/homepage`} component={HomePage}/> 
                 <Route path={`/user`} component={DashBoard} />
                 <Route path={`/updateUser/:userId`} component={UpdateUser} />
                 <Route path={`/getUser/:userId`} component={User} />
                 <Route path={`/customer`} component={CustomerDashBoard}/>
                 <Route path={`/addCustomer`} component={AddCustomer}/>
                 <Route path={`/updateCustomer`} component={UpdateCustomer} />
                 <Route path={`/getCustomer/:userId`} component={Customer} /> 
                 <Route path={`/product`} component={ProductDashBoard}/>
                 <Route path={`/AddProduct`} component={AddProduct} />
                 <Route path={`/updateProduct/:productId`} component={UpdateProduct} />
                 <Route path={`/getProductById/:productId`} component={Product} />  
                 <Route path={`/payment`} component={PaymentDashBoard}/>
                 <Route path={`/addPayment`} component={AddPayment} />
                 <Route path={`/updatePayment/:paymentId`} component={UpdatePayment} />
                 <Route path={`/getPaymentById/:paymentId`} component={Payment} /> 
                 <Route path={`/order`} component={OrderDashBoard}/>
                 <Route path={`/addOrder`} component={AddOrder} />
                 <Route path={`/updateOrder`} component={UpdateOrder} />
                 <Route path={`/getOrderById/:orderId`} component={Order} />    
                 <Route component={NotFound} />
      
             </Switch>
         </div>
    </BrowserRouter>
);

export default HomeRouter;