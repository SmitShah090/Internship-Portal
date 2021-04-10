import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    marginBottom: 40,
  },
  steps: {
    margin: 20,
    alignItems: "center",
  },
  stepheading: {
    margin: 40,
  },
  submit: {
    opacity: 1,
    color: theme.palette.primary.light,
  },
  skill: {
    color: theme.palette.primary.main,
    margin: 10,
    padding: 2,
    border: "1px solid rgba(0, 176, 116, 0.1) ",
    borderRadius: 15,
    backgroundColor: theme.palette.secondary.light,
    textAlign: "center",
  },
}));

export default useStyles;
