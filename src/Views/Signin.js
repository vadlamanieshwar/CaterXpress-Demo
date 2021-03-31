import React from 'react';
import { AmplifyAuthenticator, AmplifySignIn,AmplifySignUp } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Default/Header';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import userSlice from "../store/slices/user";
import userDetailSlice from "../store/slices/userDetail";

const useStyles = makeStyles((theme) => ({
    wrap:{
        display:"flex",
        justifyContent:"center"
    }
}));


function  Signin(){
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            console.log(nextAuthState);
            if(nextAuthState === "signedin"){
                dispatch(userSlice.actions.addUser());
                console.log("User email :",authData["attributes"]["email"])
                dispatch(userDetailSlice.actions.addUserDetail(authData["attributes"]["email"]));
                history.push("/main");
            }
        });
    }, []);


    return  <div>
                <Header/>
                <div className={classes.wrap}>
                    {/* Amplify components used for sign in and sign up 
                    these components are used because of the need for custom design */}
                    <AmplifyAuthenticator>
                        <AmplifySignUp
                            headerText="Sign Up"
                            slot="sign-up"
                            formFields={[
                            { type: "username" },
                            { type: "password" },
                            { type: "email" }
                            ]}
                        />
                        <AmplifySignIn
                            headerText="Sign In"
                            slot="sign-in"
                        ></AmplifySignIn>
                    </AmplifyAuthenticator>
                </div>
            </div>
        
}

export default Signin;