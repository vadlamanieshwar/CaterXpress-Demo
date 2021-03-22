// local imports 
import itemSlice, { getItems } from "../store/slices/items";
import cartSlice from "../store/slices/cart";
import exBur from '../Assets/img/exBur.png';

// imports from downloads
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: "22px",
    padding: 2,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  
  },
  button:{
    background: "#1B2430 0% 0% no-repeat padding-box",
    border: "1px solid #707070",
    borderRadius: "29px",
    color: "#C6C6C6",
    padding: "5px 15px"
  },
  submit:{
      display: "flex",
      justifyContent: "space-between",
      padding: 10
  }
}));

const ItemModal = ( props ) => {
    const dispatch = useDispatch();
    const items = useSelector(getItems) || [];
    const classes = useStyles();
    const clicked = props.clicked;

    return(

        <div 
             className={classes.paper}
            >
                <img src={exBur} style={{ borderRadius: "22px" }} alt="Burger"/>
                <h3 style={{padding: "5px"}}>{ clicked.pname }</h3>
                <p style={{padding: "5px"}}>{ clicked.cal }</p>
                <div style={{background: "#F4F4F4 0% 0% no-repeat padding-box",padding: "5px"}}>
                    <h4>Select option</h4>
                    <h6>Required</h6>
                </div>
                <div style={{padding: "5px"}}>
                    <input type="radio" id={ clicked.pname } name="food" value={ clicked.pname } checked/>
                    <label for={ clicked.pname }>{ clicked.pname }</label><br/>
                    <input type="radio" id={ clicked.pname + " Large"} name="food" value={ clicked.pname + " Large"}/>
                    <label for={ clicked.pname + " Large"}>{ clicked.pname + " Large"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+$4.20</label><br></br>
                </div>
                <hr/>
                <div className={classes.submit}>
                    <div className="change">
                        <Icon>remove_circle</Icon>
                        <div>1</div>
                        <Icon>add_circle</Icon>
                    </div>

                    <button
                        className={classes.button}
                        onClick={()=>{
                            if(document.getElementById( clicked.pname ).checked){
                                dispatch(cartSlice.actions.added());
                                dispatch(itemSlice.actions.addItems({
                                    itemName: clicked.pname ,
                                    itemNo: 1,
                                    cost: clicked.price,
                                    rest: clicked.restaurant,
                                    time: moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS")
                                }))
                                props.handleClose();
                            }else{
                                dispatch(cartSlice.actions.added());
                                dispatch(itemSlice.actions.addItems({
                                    itemName:clicked.pname+" Large",
                                    itemNo: 1,
                                    cost: +clicked.price + 4.20,
                                    rest: clicked.restaurant,
                                    time: moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS")
                                }))
                                props.handleClose();
                            }
                            
                        }}
                    
                        >Add 1 to order &nbsp;&nbsp; $9.75 </button>
                </div>
            
        </div>
    );
}

export default ItemModal;