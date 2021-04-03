import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
      marginTop: 80,
      paddingBottom: 40
    },
    title: {
      marginBottom: 20,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 34,
      color: theme.palette.secondary.main,
      opacity: "70%",
    },
    image: {
      height: 550,
      width: 550,
      [theme.breakpoints.down("xs")]: {
        height: 320,
        width: 320,
      },
    },
    form: {
      marginTop: 40,
      marginLeft: 70,
      maxWidth: "60%",
      maxHeight: "60%",
    },
    submit: {
      marginBottom: 8,
      color: theme.palette.primary.light,
      opacity: "90%",
    },
    label: {
      color: theme.palette.secondary.main,
      opacity: "80%",
    },
    text: {
      color: theme.palette.secondary.main,
    },
  }));

  export default useStyles