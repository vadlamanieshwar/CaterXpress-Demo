import itemSlice, { getItems } from "../store/slices/items";
import cartSlice from "../store/slices/cart";
import exBur from '../Assets/img/exBur.png';

import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Icon from '@material-ui/core/Icon';

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

const ItemModal = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItems) || [];
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render

    return(

        <div 
             className={classes.paper}
            >
                <img src={exBur} style={{ borderRadius: "22px" }} alt="Burger"/>
                <h3 style={{padding: "5px"}}>McRib Meal</h3>
                <p style={{padding: "5px"}}>820 - 1200 cal</p>
                <div style={{background: "#F4F4F4 0% 0% no-repeat padding-box",padding: "5px"}}>
                    <h4>Select option</h4>
                    <h6>Required</h6>
                </div>
                <div style={{padding: "5px"}}>
                    <input type="radio" id="McRib Meal" name="food" value="McRib Meal"/>
                    <label for="McRib Meal">McRib Meal</label><br/>
                    <input type="radio" id="McRib Meal Large" name="food" value="McRib Meal Large"/>
                    <label for="McRib Meal Large">McRib Meal Large&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+$4.20</label><br></br>
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
                            console.log(items)
                            dispatch(cartSlice.actions.added());
                            dispatch(itemSlice.actions.addItems({
                                itemName:"McRib Meal",
                                itemNo: 1,
                                cost: 9.75
                            }))
                        }}
                    
                        >Add 1 to order &nbsp;&nbsp; $9.75 </button>
                </div>
            
        </div>
    );
}

export default ItemModal;