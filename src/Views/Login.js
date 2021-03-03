import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Hub } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignIn,AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Container } from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import { Card, Button, Paper, IconButton, InputBase,FormHelperText } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDropDownCircleSharpIcon from '@material-ui/icons/ArrowDropDownCircleSharp';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';

import Header from '../Default/Header';
import HeaderNext from '../Default/HeaderNext';
import Footer from '../Default/Footer';
import Main from './Main';
import RestaurantMenu from './RestaurantMenu';
import Payment from "./Payment";
import store from "../store";
import MyOrders from './MyOrders';
import Ratings from './Ratings';
import { Mainmenu } from '../Data/Data';
import Ellipse2 from '../Assets/img/Ellipse2.png';
import Ellipse3 from '../Assets/img/Ellipse3.png';
import Ellipse4 from '../Assets/img/Ellipse4.png';
import Ellipse5 from '../Assets/img/Ellipse5.png';
import Ellipse6 from '../Assets/img/Ellipse6.png';
import google from '../Assets/img/google.png';
import twitter from '../Assets/img/twitter.png';
import fb from '../Assets/img/fb.png';
import backg1 from '../Assets/img/backg1.png';
import { Filter, FilteredMenu, fetchMenu, fetchFilter } from './Main';

const useStyles = makeStyles((theme) => ({
    signInCard: {
        minWidth: 275,
        width: 500,
        margin: 50,
        // transform: "translate(75%,0%)",
    },
    wrap:{
        display:"flex",
        justifyContent:"center"
    },
    content:{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        margin: "20px 40px"
    },
    note: {
        textAlign: "center"
    },
    viweAllChip:{
      background: "transparent linear-gradient(180deg, #DB750A 0%, #DB4300 100%) 0% 0% no-repeat padding-box",
      borderRadius: 36,
      padding: "5px 20px",
      color: "white"
    },
    optChange: {
        background: "#DBDBDB",
        borderRadius: "50%",
        fontSize: "xx-large",
        color: "#6C6C6C",
        padding: "5px",
        marginLeft: "10px"
    },
    chip: {
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      border: "1px solid #707070",
      borderRadius: "36px",
      opacity: 1,
      font: "normal normal normal 14px SF Pro",
      letterSpacing: "0px",
      color: "#19222A",
      padding: "5px 20px",
      "& :focus":{
          outline: "none"
      }
    },
    starColor: {
        color: "#E87803"
    }
}));

const initialFormState = {
    username: '', password: '', email: '',authCode: '',formType: 'signIn'   
}

function  Login(){
    const [filter,setFilter] = useState({
        filter:"",
        sel:false
    });
   
    const classes = useStyles();
    const menu = Mainmenu.data;
    const [formState, updateFormState] = useState(initialFormState);
    const { formType } = formState;

    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        console.log(authState,user);
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
            console.log(nextAuthState,authData)
        });
    }, []);

    return authState === AuthState.SignedIn && user ? (
        <div>
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

                        </Container>
                    </Router>
                </div>

        </div>
      ) : (
        <div>
            <Header
                signUp={() => updateFormState(()=>({
                            ...formState, formType: "signUp"
                        }))}
                signIn={() => updateFormState(()=>({
                    ...formState, formType: "signIn"
                }))}   
                home={() => updateFormState(()=>({
                    ...formState, formType: "home"
                }))}
                />
                {
                    formType === "home" ?
                    <div>
                        <div style={{padding:"5% 0 5% 0",height:"800px",color: "white",background: `transparent url(${backg1}) 100% no-repeat padding-box`}}>
                            <div  className="App">
                                <div style={{fontSize: "48px",fontWeight:"600",paddingBlockStart:"80px"}}>Your favourite foods, <br/>delivered</div>
                                <Paper style={{height:"fit-content",margin:"15px",width: "300px",borderRadius: "23px"}}>
                                    <IconButton type="submit" 
                                    aria-label="search">
                                        <LocationOnIcon/>
                                    </IconButton>
                                    <InputBase
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                    <IconButton type="submit" 
                                    aria-label="search">
                                        <ArrowForwardIcon/>
                                    </IconButton>                    
                                </Paper>
                                <p><u>Sign In</u> for your recent delivery address</p>
                            </div>
                        </div>
                        <div className="App">
                        
                            <div className="food-filter">
                                {/* <Filter setFilter={setFilter} sel={filter.sel} filter={filter.filter}/> */}
                                <Button 
                                    className={classes.chip} 
                                    variant="outlined"
                                    endIcon={<div><StarOutlineIcon className={classes.starColor} /><ArrowDropDownCircleSharpIcon /></div>}>
                                        Over 4.5
                                </Button>
                                <Button className={classes.chip} variant="outlined">Under 30 min</Button>
                                <Button className={classes.chip} variant="outlined">Vegetarian</Button>
                                <Button className={classes.chip} variant="outlined" endIcon={<ArrowDropDownCircleSharpIcon />}>Under 20$</Button>
                                <Button className={classes.chip} variant="outlined">New</Button>
                                <Button className={classes.chip} variant="outlined">Group Order</Button>
                            </div>
            
                        </div>
                        
                        <div className="App">
                            <div className="cat-cont">
                                <div className="cat-title-cont">  
                                    <div className="cat-title">Food Near Me</div>
                                    <div className="cat-buttons">
                                        <Button className={classes.viweAllChip} variant="outlined">View All</Button>
                                        <ArrowBackIcon className={classes.optChange}/>
                                        <ArrowForwardIcon className={classes.optChange} />
                                    </div>
                                </div>
                                <div className="main-page-options">
                                    <div>
                                        <img src={Ellipse2} alt="Fast Food"/>
                                        <p className="opt-food-p">Fast Food</p>
                                    </div>
                                    <div>
                                        <img src={Ellipse3} alt="American"/>
                                        <p className="opt-food-p">American</p>
                                    </div>
                                    <div>
                                        <img src={Ellipse4} alt="Burgers"/>
                                        <p className="opt-food-p">Burgers</p>
                                    </div>
                                    <div>
                                        <img src={Ellipse5} alt="Indian"/>
                                        <p className="opt-food-p">Indian</p>
                                    </div>
                                    <div>
                                        <img src={Ellipse6} alt="Sea Food"/>
                                        <p className="opt-food-p">Sea Food</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="App">
                            {menu.map((cat,idx) => (

                                <div className="cat-cont">
                                    <div className="cat-title-cont">  
                                        <div className="cat-title">{cat.category}</div>
                                        <div className="cat-buttons">
                                            <Button className={classes.viweAllChip} variant="outlined">View All</Button>
                                            <ArrowBackIcon className={classes.optChange}/>
                                            <ArrowForwardIcon className={classes.optChange} />
                                        </div>
                                    </div>
                                    <div className="cat-options">
                                        {cat.options.map((opt,i) => (
                                            <div className="opt-card">
                                                <img className="opt-img" src={opt.img} alt={opt.restaurant}/>
                                                <div className="opt-restaurant">{opt.restaurant}</div>
                                                <div className="opt-rest-det">$ {opt.rate} delivery - {opt.time} mins</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>
                    :
                    <div className={classes.wrap}>
                        <AmplifyAuthenticator>
                            <AmplifySignUp
                                headerText="Sign Up"
                                slot="sign-up"
                                formFields={[
                                { type: "username" },
                                { type: "password" },
                                { type: "email" }
                                ]}
                            />
                            <AmplifySignIn
                                headerText="Sign In"
                                slot="sign-in"
                            ></AmplifySignIn>
                        </AmplifyAuthenticator>
                    </div>
                }
            
        </div>
    );
}

export default Login;