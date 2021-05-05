import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 30
    },
    illustration: {
        width: "100%",
        height: "100%",
        marginTop: 90,
        [theme.breakpoints.down("xs")]: {
            width: 30,
            height: 50,
          },
        [theme.breakpoints.down("md")]: {
            marginLeft: 15,
            width: 350,
            height: 350,
          }
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginBottom: 20,
        color: theme.palette.primary.main,
        [theme.breakpoints.down("xs")]: {
            marginTop: 30,
            fontSize: 33
        }
    },
    caption: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'light',
        marginBottom: 50
    },
    submit: {
        marginLeft: 40,
        marginBottom: 6,
        color: theme.palette.primary.light,
        opacity: "90%",
        [theme.breakpoints.down("xs")]: {
           width: 200
        }
      },
    
    container: {
        marginTop: 40,
        textAlign: "center"
    },
    grid: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        height: '35vh',
        backgroundColor: '#e6f7f1',
    },
    typography: {
        paddingTop: 40
    },
    image: {
        width: 120,
        height: 120
    },
    categories: {
        color: '#2B3940',
        marginTop: 20,
        fontSize: 22,
        paddingBottom: 5
    },
    headingGrid: {
        paddingTop: 100,
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: 20
        }
    },
    firstHeading: {
        fontSize: 40,
        paddingBottom: 30,
        color: '#2B3940'
    },
    secondHeading: {
        fontSize: 22,
        color: '#2B3940',
        opacity: '80%'
    },
    cover: {
        alignItems: "center",
        marginTop: 40
    }
}))

export default useStyles