import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Container } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";

import HeaderNext from './Default/HeaderNext';
import Footer from './Default/Footer';
import Main from './Views/Main';
import RestaurantMenu from './Views/RestaurantMenu';
import Payment from "./Views/Payment";
import store from "./store";

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
            <Route path="/restaurant" render={props => <RestaurantMenu {...props}/>} />
            <Route path="/payment" render={props => <Payment {...props}/>} />
          </Switch>
          <Footer />

        </Container>
      </Router>
      <AmplifySignOut className="amplify-so" />

    </div>
    </Provider>

  );
}

export default withAuthenticator(App);