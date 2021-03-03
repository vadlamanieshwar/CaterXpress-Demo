import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import React from "react";
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

import Footer from './Default/Footer';
import Main from './Views/Main';
import RestaurantMenu from './Views/RestaurantMenu';
import Payment from "./Views/Payment";
import store from "./store";
import MyOrders from './Views/MyOrders';
import Ratings from './Views/Ratings';
import './App.css';
import { Home } from './Views/Main';
import Signin from './Views/Signin';
import Layout from './Views/Layout';
import './App.css';

function App() {
  
  return ( 
        <Provider store={ store }>
          <Layout/>
        </Provider>
  );
}

// export default withAuthenticator(App);
export default App;