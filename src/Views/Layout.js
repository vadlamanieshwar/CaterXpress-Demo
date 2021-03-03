import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react";
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Auth } from "aws-amplify";

import userSlice from "../store/slices/user";
import userDetailSlice from "../store/slices/userDetail";
import Footer from '../Default/Footer';
import Main from './Main';
import RestaurantMenu from './RestaurantMenu';
import Payment from "./Payment";
import MyOrders from './MyOrders';
import Ratings from './Ratings';
import { Home } from './Main';
import Signin from './Signin';

function Layout(){
    const dispatch = useDispatch();
    const history = useHistory();

    React.useEffect(() => {
        checkUser();
    }, []);
    async function checkUser() {
        Auth.currentAuthenticatedUser()
            .then(user => {
                // console.log("Checking user in layout:",user["attributes"]["email"],user);
                const username = user["attributes"]["email"];
                dispatch(userDetailSlice.actions.addUserDetail(username));
                dispatch(userSlice.actions.addUser());
            })
            .catch(err => console.log("Error in Layout:",err))
    }
  
 return <div>
    <Router>
        {/* <Container> */}

        {/* <HeaderNext/> */}
        <Switch>
            <Route path="/" exact render={props => <Home {...props}/>}  />
            <Route path="/main" render={props => <Main {...props}/>}  />
            <Route path="/restaurant/:id" render={props => <RestaurantMenu {...props}/>} />
            <Route path="/payment" render={props => <Payment {...props}/>} />
            <Route path="/myorders" render={props => <MyOrders {...props}/>} />
            <Route path="/rating" render={props => <Ratings {...props}/>} />
            <Route path="/signin" render={props => <Signin {...props}/>} />
        </Switch>
        <Footer/>
        {/* </Container> */}
    </Router>
</div>

}

export default Layout;