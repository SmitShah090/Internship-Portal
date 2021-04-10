import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: 60,
    },
    jobTitle: {
      fontWeight: "bolder",
    },
    submit: {
      color: theme.palette.primary.light,
      opacity: "80%",
      marginRight: 10,
      marginTop: 7,
    },
    text: {
      opacity: "40%",
    },
    stipned: {
      fontWeight: "bolder",
    },
    search: {
      marginBottom: 10,
    },
    icon: {
      marginTop: 15,
      marginRight: 5,
    },
    skill: {
      color: theme.palette.secondary.main,
      padding: 5,
      margin: 5,
      border: "1px solid rgba(0, 176, 116, 0.1) ",
      borderRadius: 15,
      backgroundColor: "rgba(0, 176, 116, 0.2)",
      textAlign: "center",
      textDecoration: "none"
    },
  }));

  export default useStyles