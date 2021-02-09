import React, {Component} from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import Icon from '@material-ui/core/Icon';

import { getCart } from "../store/slices/cart";
import { getItems } from "../store/slices/items";
import logo from '../Assets/img/logo.svg';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function HeaderNext() {
    const classes = useStyles();
    const no = useSelector(getCart) || 0;
    const items = useSelector(getItems) || [];

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
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        }
        else{
            return (
                <div className="right-drawer">
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
                            <div>$9.75</div>
                        </div>
                    </Link>
                    <div className="drawer-item">
                        <div>
                            <div>1 X McRib Meal</div>
                            <div><u>Remove</u></div>
                        </div>
                        <div className="change">
                            <Icon>remove_circle</Icon>
                            <div>1</div>
                            <Icon>add_circle</Icon>
                        </div>
                    </div>
                </div>
            );
        }
      
    }
    return (
              <div className="nav">

                  <div className="nav-left">
                    <div style={{padding:"20px"}}>
                        <MenuIcon fontSize="large" onClick={toggleDrawer("left", true)}/>
                    </div>
                    <div style={{paddingBlockStart:"20px"}}>
                        <Link to="/">
                            <img src={logo} alt="caterxpress"></img>
                        </Link>
                    </div>
                    <div style={{paddingBlockStart:"25px"}}>
                        <Chip label="Delivery" style={{marginRight:"10px"}} disabled />
                        <Chip icon={<LocationOnIcon fontSize="small" />} label="Apple Park Way" disabled/>
                    </div>
                  </div>

                    <div className="nav-right">
                        <Paper style={{height:"fit-content",margin:"15px"}}>
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
                            
                        </Paper>
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

