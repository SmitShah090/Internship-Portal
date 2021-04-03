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
}));

export default useStyles;
