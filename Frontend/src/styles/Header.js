import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  logo: {
    marginLeft: -20,
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    },
    [theme.breakpoints.down("md")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between"
  },
  button: {
      fontSize: 15,
      flexGrow: 2
  },
  authButton: {
    marginTop: 10,
    marginRight: 30,
    color: theme.palette.primary.light
  },
  formControl: {
    marginRight: 10,
    minWidth: 140
  }
}));

export default useStyles