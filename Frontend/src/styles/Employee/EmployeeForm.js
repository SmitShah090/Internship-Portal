import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
      },
    imageform: {
        marginTop: 20,
        [theme.breakpoints.down("xl")]: {
          marginLeft: 45,
          marginBottom: 20,
        },
      },
      profilePic: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
      input: {
        display: "none",
      },
      info: {
        color: theme.palette.primary.main,
        margin: 10,
        padding: 5,
        border: "1px solid rgba(0, 176, 116, 0.1) ",
        borderRadius: 5,
        backgroundColor: theme.palette.secondary.light,
        display: "flex",
        textAlign: "flex-start",
      },
      button: {
        marginTop: 40,
        marginBottom: 40,
        color: theme.palette.primary.light,

      },
      employeeForm: {
        marginBottom: 20,
      }
      
}))

export default useStyles