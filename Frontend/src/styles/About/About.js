import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme  => ({
  root: {
    marginTop: 80,
    marginRight: 10,
    marginLeft: 10,
    paddingBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: -100,
      width: 300,
      height: 300,
    },
  },
  information: {
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
    },
  },
  container: {
    marginTop: 150,
    marginRight: 5,
  },
  ourPic: {
    marginTop: 80,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));

export default useStyles;
