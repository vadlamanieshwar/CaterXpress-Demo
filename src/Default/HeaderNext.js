import React from 'react';
import { IconButton, InputBase, Paper, Chip, List, ListItem, ListItemText, Drawer, Icon, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { AmplifySignOut } from '@aws-amplify/ui-react';

import itemSlice, { getItems } from "../store/slices/items";
import restMenuSlice, { getRestMenu } from "../store/slices/restMenu";
import { getCart } from "../store/slices/cart";
import logo from '../Assets/img/logo.svg';
import home from '../Assets/img/home.png';
import pickup from '../Assets/img/pickup.png';
import offers from '../Assets/img/offers.png';
import myorders from '../Assets/img/myorders.png';
import signout from '../Assets/img/signout.png';
import { Auth } from 'aws-amplify';
import userSlice, { getUser } from "../store/slices/user";
import userDetailSlice, { getUserDetail } from "../store/slices/userDetail";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useHistory } from "react-router-dom";

export function ComboBox() {
    const classes = useStyles();
    const history = useHistory();

  return (
    <Autocomplete
      id="combo-box-demo"
      className={classes.comboBox}
      options={restaurant}
      getOptionLabel={(option) => option.name}
      onChange={(event, newValue) => {
            if(newValue !== null){
                if(newValue.name === "Example Burger"){
                    history.push("/restaurant/Example Burger");
                }
                if(newValue.name === "Example Mexican"){
                    history.push("/restaurant/Example Mexican");
                }
            }
        }}
      style={{ width: 300 }}
      renderInput={(params) => 
      <TextField {...params} placeholder="Search" 
        InputProps={{
            ...params.InputProps,
            startAdornment: (
            <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
            ),
        }}
        variant="outlined"
        />}
    />
  );
}

const restaurant = [
  { name: 'Example Burger'},
  { name: 'Example Mexican'},
  { name: 'Example Cafe'},
  { name: 'Express Chinese'},
  { name: 'AnyCompany Asian'},
  { name: 'AnyCompany Mongolian'},
  { name: "EgRestaurant African"},
  { name: 'EgRestaurant Indian'},
  { name: 'AnyCompany Steaks'},
  { name: 'Express Burgers'},
];
const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    myorders:{
        color: "black",
        textDecoration: "none",
        display: "flex",
        justifyContent: "space-evenly"
    },
    navItem:{
        fontSize: "1.1rem",
        fontWeight: "500",
        padding: "0px 25px",
        display: "flex",
        justifyContent: "space-evenly",
        color: "black",
        textDecoration: "none",
        
    },
    navText:{
        width: "100%",
        textAlign: "center"
    },
    comboBox:{
        paddingBlockStart: 10,
        paddingInlineEnd: 10
    }
  });

export default function HeaderNext( props ) {
    const items = useSelector(getItems) || [];
    const dispatch = useDispatch();
    const classes = useStyles();
    const no = useSelector(getCart) || 0;
    const [anchorEl, setAnchorEl] = React.useState(null);
    let total = 0;
    items.map((it,i)=>{
        total= total+(it.cost)
    })
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [state, setState] = React.useState({
      left: false,
      right: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    const list = (anchor) => {
        if(anchor === "left"){
           return <List>
                {['Order', 'Starred', 'Rating', 'Sign out'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        }
        else{
            return (
                <div className="right-drawer">
                    {items.length>0?
                        <div>
                            <div className="right-drawer-title">
                                <div>
                                    <h2>Your Order</h2>
                                    <p>From <u>Example Burger</u></p>
                                </div>
                                <CancelRoundedIcon onClick={toggleDrawer("right", false)}/>
                            </div>
                            <Link to="/payment" onClick={toggleDrawer("right", false)}>
                                <div className="checkout">
                                    <div>Checkout</div>
                                    <div>${total}</div>
                                </div>
                            </Link>
                            {items.map((item,i)=>(
                                <div>
                                    <div className="drawer-item">
                                        <div>
                                            <div>{item.itemNo} X {item.itemName}</div>
                                            <div><u>Remove</u></div>
                                        </div>
                                        <div className="change">
                                            <Icon>remove_circle</Icon>
                                            <div>1</div>
                                            <Icon>add_circle</Icon>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                
                        </div>
                    :
                        <div>
                            <div className="right-drawer-title">
                                <div>
                                    <h2>Your Order</h2>
                                </div>
                                <CancelRoundedIcon onClick={toggleDrawer("right", false)}/>
                            </div>
                        </div>
                    }
                    
                </div>
            );
        }
      
    }
    return (
              <div className="nav App">

                  <div className="nav-left">
                    <div style={{padding:"20px"}}>
                        <MenuIcon fontSize="large" onClick={handleClick}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Link to="/main"><MenuItem className={classes.navItem} onClick={handleClose}><img src={home} alt="home"/>&nbsp;&nbsp;<div className={classes.navText}>Home</div></MenuItem><hr/></Link>
                            <MenuItem className={classes.navItem} onClick={handleClose}><img src={pickup} alt="pick up"/>&nbsp;&nbsp;<div className={classes.navText}>Pick up</div></MenuItem><hr/>
                            <MenuItem className={classes.navItem} onClick={handleClose}><img src={offers} alt="offers"/>&nbsp;&nbsp;<div className={classes.navText}>Offers</div></MenuItem><hr/>
                            <Link to="/myorders"><MenuItem className={classes.navItem} onClick={handleClose}><img src={myorders} alt="My orders"/>&nbsp;&nbsp;<div className={classes.navText}>My Orders</div></MenuItem></Link><hr/>
                            <MenuItem onClick={handleClose} className={classes.navItem}><img src={signout} alt="sign out"/>&nbsp;&nbsp;<div className={classes.navText} onClick={()=> {
                               
                                Auth.signOut();
                                dispatch(userSlice.actions.removeUser());
                                dispatch(userDetailSlice.actions.removeUserDetail());
                                console.log("User signed out");

                            }}>Sign Out</div></MenuItem>
                            
                            {/* <MenuItem onClick={handleClose} className={classes.navItem}><img src={signout} alt="sign out"/>&nbsp;&nbsp;<AmplifySignOut/></MenuItem> */}
                        </Menu>
                    </div>
                    <div style={{paddingBlockStart:"20px"}}>
                        <Link to="/">
                            <img src={logo} alt="caterxpress"
                            onClick={()=>{

                                dispatch(restMenuSlice.actions.removeMenu());

                            }}></img>
                        </Link>
                    </div>
                    <div style={{paddingBlockStart:"25px"}}>
                        <Chip label="Delivery" style={{marginRight:"10px"}} disabled />
                        <Chip icon={<LocationOnIcon fontSize="small" />} label="Apple Park Way" disabled/>
                    </div>
                  </div>

                    <div className="nav-right">
                        <ComboBox/>
                        {/* <Paper style={{height:"fit-content",margin:"15px"}}>
                            <IconButton type="submit" 
                            // className={classes.iconButton} 
                            aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                // className={classes.input}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            
                        </Paper> */}
                        <div>
                            <Chip
                                icon={<AddShoppingCartIcon />}
                                label={"("+no+") cart"}
                                onClick={toggleDrawer("right", true)}
                                style={{color:"white",marginTop:"20px",width:"100px",backgroundImage: "linear-gradient(to right, #DB750A , #DB4300)"}}
                            />
                        </div>
                    </div>
                <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                    {list("left")}
                </Drawer>
                <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
                    {list("right")}
                </Drawer>
            </div>
        );
}

