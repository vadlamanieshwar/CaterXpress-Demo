import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify";
import { Container } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Default/Header';
import HeaderNext from '../Default/HeaderNext';
import Footer from '../Default/Footer';
import Main from './Main';
import RestaurantMenu from './RestaurantMenu';
import Payment from "./Payment";
import store from "../store";
import MyOrders from './MyOrders';
import Ratings from './Ratings';

const initialFormState = {
    username: '', password: '', email: '',authCode: '',formType: 'signUp'   
}
const useStyles = makeStyles((theme) => ({
    signInCard: {
        minWidth: 275,
        width: 500,
        margin: 50,
    },
    content:{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        margin: "20px 40px"
    }
}));

function CustomLogin() {
    const classes = useStyles();

    const [formState, updateFormState] = useState(initialFormState);
    const [user, updateUser] = useState(null);
    useEffect(() => {
        checkUser()
        setAuthListener()
    }, [])
    async function setAuthListener() {
        Hub.listen('auth', (data) => {
            switch (data.payload.event){
                case 'signOut':
                    console.log("user signed out");
                    updateFormState(() => ({ ...formState, formType: "signUp"}))
                    break;
                default:
                    break;
            }
            })
    }
    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            updateUser(user);
            updateFormState(() => ({ ...formState, formType: "signedIn"}))
            console.log("user: ",user);
        } catch (err){

        }
    }
    function onChange(e){
        e.persist();
        updateFormState(()=>({...formState,[e.target.name]:e.target.value}))
    }
    const { formType } = formState;
    async function signUp() {
        const { username, email, password } = formState;
        await Auth.signUp({ username, password, attributes:{ email }});
        updateFormState(() => ({ ...formState, formType: "confirmSignUp"}))
    }
    async function confirmSignUp() {
        const { username, authCode } = formState;
        await Auth.confirmSignUp({ username, authCode});
        updateFormState(() => ({ ...formState, formType: "signIn"}))
    }
    async function signIn() {
        const { username, password } = formState;
        await Auth.signIn({ username, password });
        updateFormState(() => ({ ...formState, formType: "signedIn"}))

    }
    return(
        <div>
            {
                formType === 'signUp' && (
                    <div>
                    <input name="username" onChange={onChange} placeholder="username" />
                    <input name="password" type="password" onChange={onChange} placeholder="password"/>
                    <input name="email" onChange={onChange} placeholder="email"/>
                    <button onClick={signUp}>Sign Up</button>
                    <button onClick={() => updateFormState(()=>({
                        ...formState, formType: "signIn"
                    }))}>Sign In</button>
                    </div>
                )
            }
            {
                formType === 'confirmSignUp' && (
                    <div>
                    <input name="authCode" onChange={onChange} placeholder="Confirmation Code" />
                    <button onClick={confirmSignUp}>Confirm Sign Up</button>
                    </div>
                )
            }
            {
                formType === 'signIn' && (
                    <div>
                        <Header signUp={() => updateFormState(()=>({
                            ...formState, formType: "signUp"
                        }))} />
                        <Card className={classes.signInCard}>
                        
                            <CardContent className={classes.content}>
                                <h2>Sign In</h2>
                                <hr/>
                                <label for="username">Username</label>
                                <input className="payment-input" name="username" onChange={onChange} placeholder="username" />
                                <label for="password">Password</label>
                                <input className="payment-input" name="password" type="password" onChange={onChange} placeholder="password"/>
                                <button className="pay-button" onClick={signIn}>Sign In</button>
                            </CardContent>
                        </Card>
                        <Footer />
                    </div>
                )
            }{
                formType === 'signedIn' && (
                    <div>
                             {/* // redux provider */}
                        <Provider store={ store }>

                            <div className="App">
                            <Router>
                                <Container>
                        
                                <HeaderNext signOut={()=> Auth.signOut()}/>
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

                        {/* <h1>Hello World</h1>
                    <button onClick={()=> Auth.signOut()}>sign out</button> */}
                    </div>
                )
            }
        </div>
    )
}

export default CustomLogin;