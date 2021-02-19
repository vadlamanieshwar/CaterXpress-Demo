import { withAuthenticator } from '@aws-amplify/ui-react';
import { Container } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";

import HeaderNext from './Default/HeaderNext';
import Footer from './Default/Footer';
import Main from './Views/Main';
import RestaurantMenu from './Views/RestaurantMenu';
import Payment from "./Views/Payment";
import store from "./store";
import MyOrders from './Views/MyOrders';
import Ratings from './Views/Ratings';
import './App.css';

function App() {
  return (
       // redux provider
       <Provider store={ store }>

    <div className="App">
      <Router>
        <Container>
  
          <HeaderNext />
          <Switch>
            <Route path="/" exact render={props => <Main {...props}/>}  />
            <Route path="/restaurant/:id" render={props => <RestaurantMenu {...props}/>} />
            <Route path="/payment" render={props => <Payment {...props}/>} />
            <Route path="/myorders" render={props => <MyOrders {...props}/>} />
            <Route path="/rating" render={props => <Ratings {...props}/>} />
          </Switch>
          <Footer />

        </Container>
      </Router>

    </div>
    </Provider>

  );
}

export default withAuthenticator(App);