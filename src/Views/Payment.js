// local imports
import itemSlice, { getItems } from "../store/slices/items";
import cartSlice from "../store/slices/cart";
import payDone from "../Assets/img/payDone.svg";
import Header from "../Default/Header";

// imports from downloads
import { useSelector,  useDispatch } from "react-redux";
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import HeaderNext from "../Default/HeaderNext";
import userSlice, { getUser } from "../store/slices/user";
import userDetailSlice, { getUserDetail } from "../store/slices/userDetail";
import { getCart } from "../store/slices/cart";

import { useHistory } from "react-router-dom";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Auth } from "aws-amplify";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      width: 500,
      margin: 50
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    content:{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        margin: "20px 40px"
    },
    check:{
       background: "transparent linear-gradient(180deg, #DB750A 0%, #DB4300 100%) 0% 0% no-repeat padding-box"
    }
  });

const Payment = () => {
    const items = useSelector(getItems) || [];
    const classes = useStyles();
    const dispatch = useDispatch();
    const [pay,setPay] = React.useState(false);
    const isUser = useSelector(getUser) || false;
    const user = useSelector(getUserDetail) || "";
    const no = useSelector(getCart) || 0;

    return(
        <div>
            <HeaderNext/>
            {/* {console.log("user:",user,"isUser:",isUser)} */}
            <div  className="payment">
                <Card className={classes.root} variant="outlined">
                    <CardContent className={classes.content}>
                        <h2>Payment</h2>
                        <hr/>
                        {isUser?
                            pay?
                                <div className="payment-done">
                                    {/* <CheckCircleOutlineIcon color="#DB4300" /> */}
                                    <img src={payDone} alt="payment cpmpleted"/>
                                    <div style={{color: "#8E8E8E",padding:"50px 5px",font:"normal normal normal 26px/15px Roboto"}}>
                                        Your Payment was Successful.<br/><br/><br/>Enjoy Your Food!
                                    </div>
                                    <Link to="/main">
                                        <div className="pay-button" onClick={()=>setPay(false)}>Back to Menu</div>
                                    </Link>
                                </div>
                            :
                                <div>
                                    <input className="payment-input" placeholder="CARD NUMBER"/>
                                    <input className="payment-input" placeholder="CARD HOLDER'S NAME"/>
                                    <div>
                                        <select className="payment-input">
                                            <option value="" disabled selected hidden>MM</option>
                                        </select>
                                        <select className="payment-input">
                                            <option value="" disabled selected hidden>YYYY</option>
                                        </select>
                                        <input className="payment-input" placeholder="CVV"/>
                                    </div>
                                    <div>
                                        <Checkbox
                                            defaultChecked
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />                                
                                        <label for="credit">Save credit card information</label><br/>
                                    </div>
                                    <div style={{textAlign:"center"}}>
                                    <button className="pay-button" disabled={no === 0?true:false} onClick={()=>{
                                        console.log(no)
                                        console.log("Payment done for these Items: ",items,"by this user:",user);
                                        dispatch(itemSlice.actions.removeItems());
                                        dispatch(cartSlice.actions.removeAll());
                                        setPay(true);
                                    }}>Pay</button>
                                    </div>
                                </div>
                            
                        :
                        <div style={{textAlign:"center"}}>
                            <h4>Please Sign In to proceed</h4>
                            <Link to="/signin"><button className="pay-button">Sign In</button></Link>
                        </div>
                        }
                        
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Payment;