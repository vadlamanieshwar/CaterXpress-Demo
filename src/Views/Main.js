// local imports
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleSharpIcon from '@material-ui/icons/ArrowDropDownCircleSharp';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { API, graphqlOperation } from 'aws-amplify';
import { useSelector, useDispatch } from "react-redux";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// imports from downloads
import restMenuSlice, { getRestMenu } from "../store/slices/restMenu";
import ad1 from '../Assets/img/ad1.png';
import ad2 from '../Assets/img/ad2.png';
import option1 from '../Assets/img/option1.svg';
import option2 from '../Assets/img/option2.svg';
import option3 from '../Assets/img/option3.svg';
import option4 from '../Assets/img/option4.svg';
import option5 from '../Assets/img/option5.svg';
import option6 from '../Assets/img/option6.svg';
import option7 from '../Assets/img/option7.png';
import option8 from '../Assets/img/option8.png';
import { ReactComponent as Icon } from '../Assets/img/options.svg';
import { Menu, FilterMenu } from '../Data/Data';
import reviewsSlice from "../store/slices/reviews";


const useStyles = makeStyles((theme) => ({
    button: {
      width: 50,
      height: 70,
      margin: theme.spacing(1),
      background: "black",
      borderRadius: "50%",
      " & .MuiButton-label ": {
          marginLeft: 10
      }
    },
    arrow: {
        width: 50,
        height: 70,
        margin: theme.spacing(1),
        borderRadius: "50%",
        background: "#f8f9fa",
        " & .MuiButton-label ": {
            marginLeft: 10
        }
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
      viweAllChip:{
        background: "transparent linear-gradient(180deg, #DB750A 0%, #DB4300 100%) 0% 0% no-repeat padding-box",
        borderRadius: 36,
        padding: "5px 20px",
        color: "white"
      },
      starColor: {
          color: "#E87803"
      },
      optChange: {
          background: "#DBDBDB",
          borderRadius: "50%",
          fontSize: "xx-large",
          color: "#6C6C6C",
          padding: "5px",
          marginLeft: "10px"
      },
      media:{
          width: 400,
          height: 270,
          padding: "20px 20px 0 20px"
      },
      flex:{
          display: "flex"
      },
      filterContent:{
        display: "flex",
        justifyContent: "space-between",
        color: "#898989",
        font: "normal normal normal 14px Roboto",
        paddingBottom: 10
      },
      filteredMenuCont:{
          paddingBlockStart: 10,
          paddingBlockEnd: 10
      }
  }));

const FoodOptions = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <div className="option-sec-cont">
                {/* can map all these by storing in state or getting from api */}
                <div className="opt-food">
                    <Link to="/restaurant/Example Burger">
                    <img src={option1} alt="Burgers"
                    onClick={
                        ()=>{
                            fetchMenu("Example Burger").then(res => {
                                dispatch(restMenuSlice.actions.addMenu(res));
                            })                                       
                        }
                    }></img>
                    </Link>
                    <span className="opt-food-span">Burgers</span>
                </div>
                <div className="opt-food">
                    <img src={option7} alt="Latin America"></img>
                    <span className="opt-food-span">Latin America</span>
                </div>
                <div className="opt-food">
                    <img src={option6} alt="Spanish"></img>
                    <span className="opt-food-span">Spanish</span>
                </div>
                <div className="opt-food">
                    <img src={option3} alt="Thai"></img>
                    <span className="opt-food-span">Thai</span>
                </div>
                <div className="opt-food">
                    <img src={option5} alt="Cafe"></img>
                    <span className="opt-food-span">Cafe</span>
                </div>
                <div className="opt-food">
                    <img src={option4} alt="Chinese"></img>
                    <span className="opt-food-span">Chinese</span>
                </div>
                <div className="opt-food">
                    <img src={option8} alt="Fast Food"></img>
                    <span className="opt-food-span">Fast Food</span>
                </div>
                <div className="opt-food">
                    <img src={option2} alt="Sea food"></img>
                    <span className="opt-food-span">Sea food</span>
                </div>
                <Button
                    variant="contained"
                    className={classes.arrow}
                    startIcon={<ArrowForwardIosIcon />}
                >
                </Button>
                <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<Icon />}
                >
                </Button>
            </div>
    );
}

const Ad = () => (
    <div className="ad-sec-cont">
        <div className="ad-msg">
            <h2>Feel hungry? Get it.</h2>
            <h5>Search your favourite food and exciting offers</h5>    
        </div>
        <img src={ad1} alt="food"></img>
        <img src={ad2} alt="food"></img>
    </div>
);

const Filter = (props) => {
    const classes = useStyles();

    return(
        <div className="food-filter">
                    {/* <Link to='/filter/rate'> */}
                    <Button 
                        className={classes.chip} 
                        variant="outlined"
                        onClick={()=>{
                            // need to call fetchFilter() to display from DB over 4.5 ratings
                            // dispatch to filtered menu slice which need to be created
                            // fetchMenu("rating").then(res => {
                                // dispatch(filterSlice.actions.addFilter(res));
                            // })
                            if(props.sel && props.filter !== "rate"){
                                props.setFilter({filter:"rate",sel:props.sel});
                            }
                            else{
                                props.setFilter({filter:"rate",sel:!props.sel});
                            }
                        }} 
                        endIcon={<div><StarOutlineIcon className={classes.starColor} /><ArrowDropDownCircleSharpIcon /></div>}>
                            Over 4.5
                    </Button>
                    {/* </Link> */}
                    <Button className={classes.chip} variant="outlined">Under 30 min</Button>
                    <Button className={classes.chip} variant="outlined">Vegetarian</Button>
                    <Button className={classes.chip} variant="outlined" endIcon={<ArrowDropDownCircleSharpIcon />}>$$$</Button>
                    <Button className={classes.chip} variant="outlined"
                    onClick={()=>{
                        if(props.sel && props.filter !== "rate"){
                            props.setFilter({filter:"rate",sel:props.sel});
                        }
                        else{
                            props.setFilter({filter:"rate",sel:!props.sel});
                        }
                    }} 
                    >New</Button>
                    <Button className={classes.chip} variant="outlined">Group Order</Button>
                </div>
                
    );
}

const MainMenu = ( props ) => {
    const menu = Menu.data;
    const classes = useStyles();

    return(
        <div>
            {menu.map((cat,idx) => (

                <div className="cat-cont">
                    <div className="cat-title-cont">  
                        <div className="cat-title">{cat.category}</div>
                        <div className="cat-buttons">
                            {/* <Link to="/viewall"> */}
                                <Button className={classes.viweAllChip} variant="outlined"
                                    onClick={()=>{
                                        props.setFilter({filter:"rate",sel:!props.sel})
                                    }}
                                >View All</Button>
                            {/* </Link> */}
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
    );
}

const FilteredMenu = ( props ) => {
    const dispatch = useDispatch();
    // get filtered menu from store
    const filMenu = FilterMenu.data
    const classes = useStyles();

    return(
        // add loading till you get filMenu from store
        <div style={{paddingTop: "40px",paddingBottom: "40px"}}>
            {filMenu.map((fil,i) => (
                <div className={classes.filteredMenuCont}>
                    <Card>
                        <div className={classes.flex}>
                            {fil.img.map((im,idx) => {
                                if(fil.category === "Example Cafe"){
                                    return <img
                                    className={classes.media}
                                    src={im}
                                    alt={fil.category}
                                />                                    
                                }else{
                                    return <Link to={"/restaurant/"+fil.category}>
                                    <img
                                        className={classes.media}
                                        src={im}
                                        alt={fil.category}
                                        onClick={
                                            ()=>{
                                                console.log(fil.category)
                                                fetchMenu(fil.category).then(res => {
                                                    dispatch(restMenuSlice.actions.addMenu(res));
                                                })                                       
                                            }
                                        }
                                    />
                                </Link>
                                    
                                }
                                
                            })}
                        </div>
                    <CardContent>
                        <Typography style={{textAlign:"initial", paddingBottom:"0", fontSize: "18px",fontWeight: "600"}} gutterBottom variant="h5" component="h2">
                            {fil.category}
                        </Typography>
                        <div className={classes.filterContent}>
                            <div>$. {fil.available}</div>
                            <div>{fil.time} mins</div>
                        </div>
                        <div className={classes.filterContent}>
                            <div className={classes.flex}>
                                <div style={{marginRight: "20px"}}>{fil.ratings}<StarOutlineIcon style={{ fontSize: 15, paddingInlineStart: 3, marginBlockEnd: 3 }} /></div>
                                <div>{fil.reviews}+ Reviews</div>
                            </div>
                            <div>${fil.delivery} Delivery</div>
                        </div>
                    </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}

async function fetchMenu(rest){
    let q = "";
    if(rest === "Example Burger"){
        q = "Example%20Burger";
    }
    else if( rest === "Example Mexican" ){
        q = "Example%20Mexican";
    }
    return new Promise((resolve, reject) => {

     axios.get("https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/restaurant/food?restaurant_name=" + q)
    .then(res => resolve(res.data))
    })

}

//need to be changed accordingly once API is ready

async function fetchFilter(filter){
    let q="";
    if(filter === "rating"){
        q= "raring 4.5";
    }
    // else if( q === "" ){
    // 
    // }
    return new Promise((resolve, reject) => {

        axios.get("https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/"+ q)
        .then(res => resolve(res.data))
    })

}

const Main = () => {
    const [filter,setFilter] = useState({
        filter:"",
        sel:false
    });
    const menu = useSelector(getRestMenu) || [];
    const dispatch = useDispatch();
    useEffect(() => {

        axios.get("https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/rating?entity=Example%20Burgers")
    .then(res => {
        dispatch(reviewsSlice.actions.addReviews(res.data));
    })
    // axios.get("https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/restaurant/product?restaurant_name=Example Mexican")
    // .then(res => {
    //     console.log(res.data)
    // })

    }, [])

    return (
        <div className="Main-cont">
            
            <FoodOptions />

            <Ad />
            
            <div className="food-sec-cont">
                {/* use router once the API done */}
                {/* <Router> */}

                <Filter setFilter={setFilter} sel={filter.sel} filter={filter.filter}/>
                {/* <Switch> */}

                {/* <Route path="/filter/:id" render={props => <FilteredMenu {...props}/>} /> */}
                {/* <Route path="/mainmenu" render={props => <MainManu {...props}/>} /> */}

                {/* </Switch> */}
                { !filter.sel ? <MainMenu setFilter={setFilter} sel={filter.sel}/> : <FilteredMenu filter={filter} /> }


                {/* </Router> */}

            </div>
        </div>
    );

}

export default Main;