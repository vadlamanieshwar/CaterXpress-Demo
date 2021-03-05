// imports from downloads
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, InputBase, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useSelector,  useDispatch } from "react-redux";
import moment from 'moment';
// local imports
import exBur from '../Assets/img/exBur.png';
import { ReactComponent as RemoveIcon } from '../Assets/img/remove-button.svg';
import reviewsSlice, { getReviews } from "../store/slices/reviews";
import HeaderNext from "../Default/HeaderNext";
import userDetailSlice, { getUserDetail } from "../store/slices/userDetail";
import userSlice, { getUser } from "../store/slices/user";

const useStyles = makeStyles({
    root:{
        margin: "1% 10% 5%",
        textAlign: "left"
    },
    card:{
        display: "flex",
        position: "relative"
    },
    back:{
        textAlign: "end",
        font: "normal normal normal 23px/28px Roboto",
        color: "#E87803",
        padding: 10
    },
    commentCont: {
        border: "1px solid #adb5bd"
    },
    comment:{
        padding: 20
    },
    head:{
        display: "flex",
        padding: "20px 20px 0 20px"
    },
    body:{
        padding: "0 20px 20px 20px",
        color: "#ACACAC"
    },
    userRate:{
        padding: "10px",
        marginLeft: 20
    },
    revCont:{
        boxShadow: "-1px 1px 4px 0px darkgrey",
        marginBlockStart: "10px",
        marginBlockEnd: "10px"
    }
})

const Ratings = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const [comment, setComment] = React.useState("");
    const review = useSelector(getReviews) || [];
    const reviews = [
        {
            "Rest" : 'Example Burgers',
            'name': 'barbarasanders',
            'rating': '5',
            'comment': 'Picture serve someone. Seem second past cover relationship pay other.\nMaintain current career light wide article. Ten science her with shake. Amount him area despite class receive lot.'
        },
        {
            "Rest" : 'Example Burgers',
            'name': 'barbarasanders',
            'rating': '5',
            'comment': 'Picture serve someone. Seem second past cover relationship pay other.\nMaintain current career light wide article. Ten science her with shake. Amount him area despite class receive lot.'
        },
        {
            "Rest" : 'Example Burgers',
            'name': 'barbarasanders',
            'rating': '5',
            'comment': 'Picture serve someone. Seem second past cover relationship pay other.\nMaintain current career light wide article. Ten science her with shake. Amount him area despite class receive lot.'
        }
    ];
    const dispatch = useDispatch();
    const user = useSelector(getUserDetail) || "";
    const isUser = useSelector(getUser) || false;

    useEffect(() => {

        axios.get("https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/rating?entity=Example%20Burgers")
    .then(res => {
        dispatch(reviewsSlice.actions.addReviews(res.data));
    })
    .catch((err)=>{
        console.log("error:",err)
    })
    // console.log();
    }, [])

    const reviewPost = (r) => {
        axios.post('https://f2w5o7vsrc.execute-api.us-east-2.amazonaws.com/alpha/rating', r)
          .then(function (response) {
            console.log(response);
          })
    }

    return(
        <div>
            <HeaderNext />
        <div  className={classes.root}>
            <h2>Rate your food</h2>
            <div className={classes.commentCont}>
                <Card className={classes.card}>
                    <div className="rating-img">
                        <img src={exBur} alt="Example burger"/>
                    </div>
                    <div className="rest-rating-sec">
                        <div className="rat-title-sec">
                            <div className="ret-rest-tit">Example Burger</div>
                            <div>Help the community to decide</div>
                        </div>
                        <div>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography style={{color: "#E87803"}} component="legend">Food</Typography>
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                className="rating-box"
                                />
                            </Box>
                        </div>
                        <div style={{display:"flex"}}>

                            <Paper style={{height:"fit-content",margin:"15px"}}>

                                <InputBase
                                    // className={classes.input}
                                    placeholder="    Your Comments..."
                                    onChange={(event, newValue) => {
                                        setComment(event.target.value);
                                    }}
                                    value={comment}
                                    // inputProps={{ 'aria-label': 'search' }}
                                />          
                            
                            </Paper> 
                            <Link to="/main">
                            <button
                                className="submit-button"
                                onClick={()=>{
                                    reviewPost("username="+user.username+"&restaurant=Example Burger&rating="+value+"&review="+comment+"&created_at="+moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS"));
                                    // console.log(
                                    //     {
                                    //         "restaurant": "Example Burger",
                                    //         "username":user.username,
                                    //         "rating":value,
                                    //         "review":comment,
                                    //         "created_at":moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS")
                                    //     }
                                    //     )
                                }}
                                disabled={value===0?true:false}
                            >Submit</button>    
                            </Link>         
                        </div>
                    </div>
                    <div className="remove-sec">
                        <Link to="/myorders"><RemoveIcon /></Link>
                    </div>
                </Card>
                {/* {Object.keys(review).length>0?
                    <div className={classes.comment}>
                        <h2>Ratings from others</h2><br/>
                        <h2 style={{color:"#E87803"}}>Example Burger</h2>
                        <p>$. American . Fast Food . Burger</p>
                        <h4>{review["reviews"]["Example Burgers"]["Address"]["S"]}</h4>
                        {review["reviews"]["reviews"].map((r,i) => {
                            return <div className={classes.revCont}>
                                <Card>
                                    <div className={classes.head}>
                                        <div>
                                            <h3>{r.Name["S"]}</h3>
                                            <p>{r.Created_At}</p>
                                        </div>
                                        <div className={classes.userRate}>
                                            <Rating
                                                name="simple-controlled"
                                                value={r.Rating["N"]}
                                            />
                                        </div>
                                    </div>
                                    <div className={classes.body}>
                                        {r.Review["S"]}
                                    </div>
                                </Card>
                            </div>
                        })}
                </div>
                :
                ""
                } */}
                
            </div>
            <Link to="/main"><div className={classes.back}>Back to home</div></Link>
        </div>
        </div>
    );
}

export default Ratings;
