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
import { MainMenu } from '../Data/Data';
import Ellipse2 from '../Assets/img/Ellipse2.png';
import Ellipse3 from '../Assets/img/Ellipse3.png';
import Ellipse4 from '../Assets/img/Ellipse4.png';
import Ellipse5 from '../Assets/img/Ellipse5.png';
import Ellipse6 from '../Assets/img/Ellipse6.png';
import google from '../Assets/img/google.png';
import twitter from '../Assets/img/twitter.png';
import fb from '../Assets/img/fb.png';
import backg1 from '../Assets/img/backg1.png';

const initialFormState = {
    username: '', password: '', email: '',authCode: '',formType: 'signUp'   
}
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

function CustomLogin() {
    const classes = useStyles();
    const menu = MainMenu.data;
    const [formState, updateFormState] = useState(initialFormState);
    const [helperText,setHelperText] = useState("");
    const [helperTextC,setHelperTextC] = useState("")
    const [helperTextSI,setHelperTextSI] = useState("")

    const [user, updateUser] = useState(null);
    useEffect(() => {
        checkUser()
        setAuthListener()
        console.log("use effect")
        onAuthUIStateChange((nextAuthState, authData) => {
            // setAuthState(nextAuthState);
            // setUser(authData)
            console.log("use effect change",nextAuthState, authData)

        });
        // Amplify.configure({
        //     Auth: {
        //         oauth: {
        //             redirectSignIn: 'http://localhost:3000/',
        //             redirectSignOut: 'http://localhost:3000/',
        //         }}
        // })
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
        let e=false;
        const { username, email, password } = formState;
        try{
            setHelperText("");
            await Auth.signUp({ username, password, attributes:{ email }});
        }catch(err){
            console.log("sign up error:",err)
            setHelperText(err.message);
            e=true;
        }
        if(!e){
            updateFormState(() => ({ ...formState, formType: "confirmSignUp"}))
        }
    }
    async function confirmSignUp() {
        let e=false;

        const { username, authCode } = formState;
        console.log(username,authCode);
        try{
            setHelperTextC("");
            await Auth.confirmSignUp({ username, authCode});
        }catch(err){
            console.log("confirm sign up error:",err)
            setHelperTextC(err.message);
            e=true;
        }
        if(!e){
            updateFormState(() => ({ ...formState, formType: "signIn"}))
        }
    }
    async function signIn() {
        let e=false;
        const { username, password } = formState;
        Auth.signIn(username, password)
        // If we are successful, navigate to Home screen
        .then(user => console.log(user,"signed in"))
        // On failure, display error in console
        .catch(err => console.log(err));
        // try{
        //     setHelperTextSI("");
        //     await Auth.signIn({ username, password });
        //     console.log("sign in clicked")
        // }catch(err){
        //     console.log("Sign In error:",err)
        //     setHelperTextSI(err.message);
        //     e=true;
        // }
        // if(!e){
        //     updateFormState(() => ({ ...formState, formType: "signedIn"}))
        // }

    }
    return(
        <div>
            
            {
                formType === 'home' && (
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
                )
            }{
                formType === 'signUp' && (
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

                        <div className={classes.wrap}>
                        <AmplifyAuthenticator>
                        <AmplifySignUp
                                headerText="Sign Up"
                                slot="sign-up"
                                // usernameAlias="email"
                                formFields={[
                                {
                                    type: "email",
                                    label: "Custom email Label",
                                    placeholder: "custom email placeholder",
                                    required: true,
                                },
                                {
                                    type: "password",
                                    label: "Custom Password Label",
                                    placeholder: "custom password placeholder",
                                    required: true,
                                },
                                {
                                    type: "username",
                                    label: "Custom Phone Label",
                                    placeholder: "custom Phone placeholder",
                                    required: true,
                                },
                                ]} 
                            />
                        </AmplifyAuthenticator>
                        {/* <Card className={classes.signInCard}>
                        
                        <CardContent className={classes.content}>
                            <h2>Sign Up</h2>
                            <hr/>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <img src={google} alt="google"/>
                                <img src={fb} alt="fb"/>
                                <img src={twitter} alt="twitter"/>
                            </div>
                            <div style={{display:"flex",justifyContent:"center",paddingBlockEnd:20}}>or sign up with</div>
                            <form style={{display:"flex",flexDirection:"column"}}>
                            <label for="email">Email</label>
                            <input className="payment-input" name="email" onChange={onChange} placeholder="email"/>
                            <label for="username">Username</label>
                            <input className="payment-input" name="username" onChange={onChange} placeholder="username" />
                            <label for="password">Password</label>
                            <input className="payment-input" name="password" type="password" onChange={onChange} placeholder="password"/>
                            <FormHelperText style={{color:"red",textAlign: "center"}} id="component-error-text">{helperText}</FormHelperText>
                            <button className="pay-button" onClick={signUp}>Sign Up</button>
                            <p className={classes.note}>Already have registered?
                                <span onClick={() => updateFormState(()=>({
                                    ...formState, formType: "signIn"
                                }))}>
                                    SIGN IN
                                </span>
                            </p>
                            </form>
                        </CardContent>
                    </Card> */}
                    {/* <input name="username" onChange={onChange} placeholder="username" />
                    <input name="password" type="password" onChange={onChange} placeholder="password"/>
                    <input name="email" onChange={onChange} placeholder="email"/>
                    <button onClick={signUp}>Sign Up</button>
                    <button onClick={() => updateFormState(()=>({
                        ...formState, formType: "signIn"
                    }))}>Sign In</button> */}
                    </div>
                    </div>
                )
            }
            {
                formType === 'confirmSignUp' && (
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
                        <Card className={classes.signInCard}>
                            
                            <CardContent className={classes.content}>
                                <h2>Confirm  Sign Up</h2>
                                <hr/>
                                <form style={{display:"flex",flexDirection:"column"}}>
                                <label for="authCode">Authcode</label>
                                <input className="payment-input" name="authCode" onChange={onChange} placeholder="Confirmation Code" />
                                <FormHelperText style={{color:"red",textAlign: "center"}} id="component-error-text">{helperTextC}</FormHelperText>
                                <button className="pay-button" onClick={confirmSignUp}>Confirm Sign Up</button>
                                </form>
                            </CardContent>

                        </Card>

                    </div>
                )
            }
            {
                formType === 'signIn' && (
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
                        <div className={classes.wrap}>

                        <AmplifyAuthenticator>
                        <AmplifySignIn
                            headerText="My Custom Sign In Text"
                            slot="sign-in"
                        ></AmplifySignIn>
                        </AmplifyAuthenticator>
                        {/* <Card className={classes.signInCard}>
                        
                            <CardContent className={classes.content}>
                                <h2>Sign In</h2>
                                <hr/>
                                <div style={{display:"flex",justifyContent:"center"}}>
                                    <img src={google} alt="google"/>
                                    <img src={fb} alt="fb"/>
                                    <img src={twitter} alt="twitter"/>
                                </div>
                            <div style={{display:"flex",justifyContent:"center",paddingBlockEnd:20}}>or sign in with</div>
                            <form style={{display:"flex",flexDirection:"column"}}>
                                <label for="username">Username</label>
                                <input className="payment-input" name="username" onChange={onChange} placeholder="username" />
                                <label for="password">Password</label>
                                <input className="payment-input" name="password" type="password" onChange={onChange} placeholder="password"/>
                                <FormHelperText style={{color:"red",textAlign: "center"}} id="component-error-text">{helperTextSI}</FormHelperText>
                                <button className="pay-button" onClick={signIn}>Sign In</button>
                                <p className={classes.note}>Don't have an account?
                                <span onClick={() => updateFormState(()=>({
                                    ...formState, formType: "signUp"
                                }))}>
                                    SIGN UP
                                </span>
                                </p>
                                </form>
                            </CardContent>
                        </Card> */}
                        </div>
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

                                </Container>
                            </Router>
                            </div>
                        </Provider>

                        {/* <h1>Hello World</h1>
                    <button onClick={()=> Auth.signOut()}>sign out</button> */}
                    </div>
                )
            }
            <Footer />
        </div>
    )
}

export default CustomLogin;