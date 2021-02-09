import { getItems } from "../store/slices/items";
import { useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    }
  });

const Payment = () => {
    const items = useSelector(getItems) || [];
    const classes = useStyles();
    return(
        <div className="payment">
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.content}>
                    <h2>Payment</h2>
                    <hr/>
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
                        <input className="payment-input" type="radio" id="credit" name="credit" value="Save credit card information"/>
                        <label for="credit">Save credit card information</label><br/>
                    </div>
                    <div className="pay-button" onClick={()=>{
                        console.log(items)
                    }}>Pay</div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Payment;