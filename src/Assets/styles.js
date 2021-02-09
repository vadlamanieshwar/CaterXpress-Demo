import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
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
  