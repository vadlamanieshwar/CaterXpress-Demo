import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Chip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// import { ReactComponent as CxLogo } from '../Assets/img/cx-logo.svg';
import cxLogo from '../Assets/img/cx-logo.svg'
import headerMenu  from '../Assets/img/headerMenu.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "transparent linear-gradient(180deg, #DB750A 0%, #dc730a 100%) 0% 0% no-repeat padding-box",
    padding: 10

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  log: {
    marginLeft: theme.spacing(95),
    justifyContent: "space-between",
    display: "flex",
    width: 200
  }
}));

export default function Header( props ) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <img style={{width:"28px"}} className={classes.menuButton} src={headerMenu} alt="caterXpress"/>

          <img style={{width:"200px"}} src={cxLogo} alt="caterXpress" onClick={props.home}/>

          <div className={classes.log}>
          <Chip
            style={{
              color: "white",
              // fontSize: "small",
              background: "transparent linear-gradient(180deg, #DB750A 0%, #DB4300 100%) 0% 0% no-repeat padding-box"
            }}
           label="sign in"
           onClick={props.signIn}></Chip>
          <Chip
            label="sign up"
            style={{
              // fontSize: "large",
            }}
            onClick={props.signUp}></Chip>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}