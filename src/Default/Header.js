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
    background: "transparent linear-gradient(180deg, #DB750A 0%, #DB4300 100%) 0% 0% no-repeat padding-box",
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
    width: 150
  }
}));

export default function Header( props ) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <img className={classes.menuButton} src={headerMenu} alt="caterXpress"/>

          <img src={cxLogo} alt="caterXpress"/>

          <div className={classes.log}>
          <Chip label="sign in"></Chip>
          <Chip style={{
            color: "white",
            background: "transparent linear-gradient(180deg, #DB750A 0%, #DB4300 100%) 0% 0% no-repeat padding-box"
          }} label="sign up"
          onClick={props.signUp}></Chip>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}