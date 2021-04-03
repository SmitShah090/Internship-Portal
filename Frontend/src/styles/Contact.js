import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
    paddingBottom: 100,
    textAlign: "center",
  },
  submit: {
    marginTop: 30,
    color: theme.palette.primary.light,
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: 40,
  },
  text: {
    backgroundColor: theme.palette.secondary.light,
  },
  image: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
}));

export default useStyles;
