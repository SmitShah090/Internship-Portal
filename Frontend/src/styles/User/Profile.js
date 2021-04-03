import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: 40,
    },
    icon: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    skill: {
      color: theme.palette.secondary.main,
      padding: 5,
      border: "1px solid rgba(0, 176, 116, 0.1) ",
      borderRadius: 15,
      backgroundColor: "rgba(0, 176, 116, 0.2)",
      textAlign: "center",
      textDecoration: "none"
    },
    fButton: {
      fontSize: "small",
      color: theme.palette.primary.light,
    },
    infoTitle: {
      opacity: "50%",
    },
    titleCard: {
      fontWeight: "inherit",
    },
    skillTitle: {
      textAlign: 'center'
    },
    profilePic: {
      width: theme.spacing(8),
      height: theme.spacing(8)
    }
  }));

  export default useStyles