import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from '../../components/product/DashBoard';
import AddProduct from "../../components/product/AddProduct";
import UpdateProduct from "../../components/product/UpdateProduct";
import Product from '../../components/product/Product';

const ProductRouter = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path={`/product`} component={DashBoard}/>
                 <Route path={`/AddProduct`} component={AddProduct} />
                 <Route path={`/updateProduct/:productId`} component={UpdateProduct} />
                 <Route path={`/getProductById/:productId`} component={Product} />
             </Switch>
         </div>
    </BrowserRouter>
);

export default ProductRouter;