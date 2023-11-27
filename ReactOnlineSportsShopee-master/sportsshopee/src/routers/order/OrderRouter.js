import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OrderDashBoard from '../../components/order/OrderDashBoard';
import AddOrder from "../../components/order/AddOrder";
import UpdateOrder from "../../components/order/UpdateOrder";
import Order from '../../components/order/Order';

const OrderRouter = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path={`/order`} component={OrderDashBoard}/>
                 <Route path={`/addOrder`} component={AddOrder} />
                 <Route path={`/updateOrder`} component={UpdateOrder} />
                 <Route path={`/getOrderById/:orderId`} component={Order} />
             </Switch>
         </div>
    </BrowserRouter>
);

export default OrderRouter;