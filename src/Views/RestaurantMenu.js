import { useSelector } from "react-redux";
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ItemModal from "./ItemModal";
import restMenuSlice, { getRestMenu } from "../store/slices/restMenu";
import exBur from '../Assets/img/exBur.png';

const useStyles = makeStyles((theme) => ({
    menuBack: {
        width: "100%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundImage: `url(${exBur})`,
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
        '& span':{
            padding: "10px"
        }
    },
    root: {
        display: 'flex',
        margin: 20,
        justifyContent: "space-between",
        width: 350
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 120,
        borderRadius: "40px 0px 0px 40px"
      },
      mostPopular: {
          display: "flex",
      },
      comboMeals: {
          display: "flex"
      },
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
    // const dispatch = useDispatch();
    const classes = useStyles();
    const menu = useSelector(getRestMenu) || {};
    const [open,setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return(<div>
        <div>{Object.keys(menu).length > 0?
        
            <div className="menu-page-cont">
                {console.log(menu.restMenu["Example Burgers"][0].name)}
                <div className={classes.menuBack}>
                    <div className={classes.title}>{menu.restMenu["Example Burgers"][0].name}</div>
                    <div className={classes.deliverinfo}>
                        $ {menu.restMenu["Example Burgers"][0].deliverinfo[0].deliverinfo} Delivery fee.  
                        Delivered in {menu.restMenu["Example Burgers"][0].deliverinfo[0].delivertime} mins . 
                        &nbsp;{menu.restMenu["Example Burgers"][0].deliverinfo[0].rating} . 
                        ({menu.restMenu["Example Burgers"][0].deliverinfo[0].reviewno}+ ratings)
                    </div>
                </div>
                <div>
                    <div className={classes.det}>$ . American . Fast Food . Burger</div>
                    <div className={classes.address}>{menu.restMenu["Example Burgers"][0].address}</div>
                    <div className={classes.dd}>
                        <div>Break Fast&nbsp;<ExpandMoreIcon color="black"/></div>
                        <div>6:00 am - 11 am</div>
                    </div>
                </div>
                <div className={classes.opt}>
                    <DehazeIcon/>&nbsp;
                    <span className={classes.underlined}>Most Popular</span>&nbsp;
                    <span>Combo Meals</span>
                    <span>Shareables&nbsp;</span>
                    <span>Fries, sides and more&nbsp;</span>
                    <span><ArrowForwardRoundedIcon/></span>
                </div>
                <div>
                    <h3>Most Popular</h3>
                    <div className={classes.mostPopular}>
                    {menu.restMenu["Example Burgers"][0]["Most Popular"].map( (cm,idx) => (
                        <Card className={classes.root}  onClick={handleOpen}>
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
                                image={cm.url}
                                title="Live from space album cover"
                            />
                        </Card>
                     ) )}
                
                    </div>
                </div>
                <div>
                    <h3>Combo Meals</h3>
                    <div className={classes.comboMeals}>

                        {menu.restMenu["Example Burgers"][0]["Combo Meals"].map( (cm,idx) => (
                            <Card className={classes.root}>
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
                                    image={cm.url}
                                    title="Live from space album cover"
                                />
                            </Card>
                        ) )}
                    </div>                
                </div>
            </div>
        
            :"loading"}
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <ItemModal />
        </Modal>
    </div>
    )
}

export default RestaurantMenu;