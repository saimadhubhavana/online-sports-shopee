  
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from '../../components/user/DashBoard';
import AddUser from "../../components/user/AddUser";
import UpdateUser from "../../components/user/UpdateUser";
import User from '../../components/user/User';

const UserRouter = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path={`/user`} component={DashBoard}/>
                 <Route path={`/addUser`} component={AddUser} />
                 <Route path={`/updateUser/:userId`} component={UpdateUser} />
                 <Route path={`/getUser/:userId`} component={User} />
             </Switch>
         </div>
    </BrowserRouter>
);

export default UserRouter;