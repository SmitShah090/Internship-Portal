import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    submit: {
        opacity: 1,
        color: theme.palette.primary.light,
      },
      root: {
        marginTop: 40,
      },
      header: {
        marginBottom: 40,
      },
      jobCard: {
        paddingTop: 60
      }
}))

export default useStyles