// imports from downloads
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

// local imports
import ItemModal from "./ItemModal";
import restMenuSlice, { getRestMenu } from "../store/slices/restMenu";
import restBack from '../Assets/img/restBack.png';
import loader1 from '../Assets/img/loader1.gif';
import nug from '../Assets/img/nug.png';
import fries from '../Assets/img/fries.png';
import cake from '../Assets/img/cake.png';
import mcrib from '../Assets/img/mcrib.png';
import m1 from '../Assets/img/m1.png';
import m2 from '../Assets/img/m2.png';
import m3 from '../Assets/img/m3.png';
import m4 from '../Assets/img/m4.png';
import m5 from '../Assets/img/m5.png';
import m6 from '../Assets/img/m6.png';
import m7 from '../Assets/img/m7.png';
import m8 from '../Assets/img/m8.png';
import Header from "../Default/Header";
import HeaderNext from "../Default/HeaderNext";

const useStyles = makeStyles((theme) => ({
    menuBack: {
        width: "100%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundImage: `url(${restBack})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 300px",
        color: "white",
        marginBlockEnd: 20
    },
    title: {
        fontSize: "34px",
        padding: "10px"
    },
    deliverinfo: {
        padding: "10px",
        color: "#FFFFFF",
        marginBlockEnd: 20
    },
    underlined: {
        borderBottom: "2px solid red"
    },
    opt:{
        marginBlockEnd: 20,
        padding: "0px 5% 0px 5%",
        '& span':{
            padding: "10px"
        }
    },
    root: {
        float: "left",
        width: "45%",
        margin: 10,
        display: "flex",
        justifyContent: "space-between"
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "200px"
      },
      cover: {
        width: 230,
      },
      mostPopular: {
        margin: "0 -5px",
        "& :after": {
            content: "",
            display: "table",
            clear: "both"
          }
      },
      comboMeals: {
        margin: "0 -5px",
        "& :after": {
            content: "",
            display: "table",
            clear: "both"
          }      },
      det:{
        color: "#191919",
        fontWeight: 500
      },
      address: {
        fontSize: "19px",
        paddingBlockStart: 5,
        fontWeight: 500
      },
      dd: {
        fontWeight: 500,
        paddingBlockStart: 25,
        paddingBlockEnd: 15,
        "& :last-child":{
            color: "#C1C1C1"
        }
      }
}))

const RestaurantMenu = ({match}) => {
    const dispatch = useDispatch();
    const res = match.params.id;
    const classes = useStyles();
    const menu = useSelector(getRestMenu) || {};
    // console.log(res,menu);
    const [open,setOpen] = useState(false);
    const [clicked,setClicked] = useState({})
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const fetchMenu = () => {
          console.log("iam here!")
        let q = "";
        if(res === "Example Burger"){
            q = "Example%20Burger";
        }
        else if( res === "Example Mexican" ){
            q = "Example%20Mexican";
        }
        return new Promise((resolve, reject) => {
    
         axios.get("https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/restaurant/food?restaurant_name=" + q)
        .then(res => resolve(res.data))
        .catch((err)=>{
            console.log("error:",err)
        })
        })
    
    };
    useEffect(() => {
        dispatch(restMenuSlice.actions.removeMenu());

        fetchMenu().then(res => {
            dispatch(restMenuSlice.actions.addMenu(res));
            // console.log(res);
        })       
        console.log(match.params.id)                                
    }, [])
    
    return(<div>
        <HeaderNext/>
        <div>
            {Object.keys(menu).length > 0 && Object.keys(menu.restMenu)[0]===res ?
        
            <div className="menu-page-cont">
                <div className={classes.menuBack}>
                    {/* {console.log()} */}
                    <div className="App">
                        <div className={classes.title}>{menu.restMenu[res][0].name}</div>
                        <div className={classes.deliverinfo}>
                            $ {menu.restMenu[res][0].deliverinfo[0].deliverinfo} Delivery fee.  
                            Delivered in {menu.restMenu[res][0].deliverinfo[0].delivertime} mins . 
                            &nbsp;{menu.restMenu[res][0].deliverinfo[0].rating} . 
                            ({menu.restMenu[res][0].deliverinfo[0].reviewno}+ ratings)
                        </div>
                    </div>
                </div>
                <div className="App">
                    <div className={classes.det}>$ . American . Fast Food . Burger</div>
                    <div className={classes.address}>{menu.restMenu[res][0].address}</div>
                    <div className={classes.dd}>
                        <div>Break Fast&nbsp;<ExpandMoreIcon color="primary"/></div>
                        <div>6:00 am - 11 am</div>
                    </div>
                </div>
                <div className={classes.opt}>
                    <DehazeIcon/>&nbsp;
                    <span className={classes.underlined}>Signature Dish</span>&nbsp;
                    <span>Combo Meals</span>
                    <span>Shareables&nbsp;</span>
                    <span>Fries, sides and more&nbsp;</span>
                    <span><ArrowForwardRoundedIcon/></span>
                </div>
                <div className="App">
                    <h3>Signature Dish</h3>
                    <div className={classes.mostPopular}>
                    {menu.restMenu[res][0]["Signature Dish"].map( (cm,idx) => {
                        let url=cm.url;
                        if(cm.pname === "McRib Meal"){
                            url=mcrib;
                        }
                        else if(cm.pname === "40 McNuggets"){
                            url=nug;
                        }
                        else if(cm.pname === "Medium French Fries"){
                            url=fries;
                        }
                        else if(cm.pname === "Cake"){
                            url=cake;
                        }
                        // else if(cm.pname === "Horchata"){
                        //     url=m1;
                        // }
                        // else if(cm.pname === "Carnitas Huevos Rancheros"){
                        //     url=m2;
                        // }
                        // else if(cm.pname === "Chicken Tamales"){
                        //     url=m3;
                        // }
                        // else if(cm.pname === "Mole Poblano"){
                        //     url=m4;
                        // }
                        return <Card className={classes.root}  onClick={()=>{
                            if(cm.pname === "McRib Meal"  || cm.pname === "Horchata"){
                                handleOpen();
                                // console.log(cm,menu.restMenu[res][0]["name"])
                                setClicked({...cm,restaurant:menu.restMenu[res][0]["name"]});
                            }
                        }}>
                            <div
                             className={classes.details}
                            >
                                <CardContent 
                                className={classes.content}
                                >
                                    <Typography component="h5" variant="h5">
                                        {cm.pname}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {cm.cal}<br/>${cm.price}
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={url}
                                title="media"
                            />
                        </Card>
                    } )}
                
                    </div>
                </div>
                <div className="App">
                    <h3>Combo Meals</h3>
                    <div className={classes.comboMeals}>

                        {menu.restMenu[res][0]["Combo Meals"].map( (cm,idx) => {
                            let url=cm.url;
                            if(cm.pname === "McRib Meal"){
                                url=m5;
                            }
                            else if(cm.pname === "40 McNuggets"){
                                url=m6;
                            }
                            else if(cm.pname === "Medium French Fries"){
                                url=m7;
                            }
                            else if(cm.pname === "Cake"){
                                url=m8;
                            }
                            return    <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {cm.pname}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {cm.cal}<br/>${cm.price}
                                </Typography>
                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={url}
                                title="food images"
                            />
                        </Card> 
                        }
                    )}
                    </div>                
                </div>
            </div>
        
            :

            <div className="menu-loader">
                <img src={loader1} alt="loading"/>
            </div>

            }
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <ItemModal handleClose={handleClose} clicked={clicked}/>
        </Modal>
    </div>
    )
}

export default RestaurantMenu;