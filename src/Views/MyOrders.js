import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import HeaderNext from '../Default/HeaderNext';

const useStyles = makeStyles({
    root:{
        margin: "1% 10% 5%"
    },
    card:{
        color: "#8E8E8E"
    }
})
const MyOrders = () => {
    const classes = useStyles();

    return(
        <div>
            <HeaderNext/>
            <div  className={classes.root}>
            <div className="orders-title">Orders</div>
            <div className="orders-subtitle">Previous Orders</div>
            <Card className={classes.card}>
                <div className="Order-sec">
                    <div className="rest-name">Example Burger</div>
                    <div className="row">
                        <div className="col-sm-6 delivery-det">
                            <div>Delivered. January 28, 6:00am - $9.75 </div>
                            <div>1.McRib Meal</div>
                        </div>
                        <div className="col-sm-6 nxt-steps">
                            <Link to="/rating"><div className="rate-food" style={{backgroundColor:"antiquewhite"}}>Rate your Food</div></Link>
                            <Link to="/main"><div className="rate-food" style={{backgroundColor:"antiquewhite"}}>View Store</div></Link>
                            <Link to="/main"><div className="reorder" style={{backgroundColor:"antiquewhite"}}>Reorder</div></Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="Order-sec">
                    <div className="rest-name">Example Cafe</div>
                    <div className="row">
                        <div className="col-sm-6 delivery-det">
                            <div>Delivered. January 12, 5:30am - $19.75 </div>
                            <div>1.Coffee</div>
                        </div>
                        <div className="col-sm-6 nxt-steps">
                            <div className="rate-food">Rate your Food</div>
                            <div className="rate-food">View Store</div>
                            <div className="reorder">Reorder</div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="Order-sec">
                    <div className="rest-name">AnyCompany</div>
                    <div className="row">
                        <div className="col-sm-6 delivery-det">
                            <div>Delivered. January 3, 7:00am - $32.75 </div>
                            <div>1.Meal</div>
                        </div>
                        <div className="col-sm-6 nxt-steps">
                            <div className="rate-food">Rate your Food</div>
                            <div className="rate-food">View Store</div>
                            <div className="reorder">Reorder</div>
                        </div>
                    </div>
                </div>
                <hr/>
            </Card>
            </div>
        </div>
    );
}

export default MyOrders;