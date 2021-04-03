import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import NearMeIcon from "@material-ui/icons/NearMe";
import contact from "../../images/contact.png";
import useStyles from "../../styles/Contact";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} lg={6} md={7} sm={7}>
            <img className={classes.image} src={contact} />
          </Grid>
          <Grid item xs={12} lg={6} md={5}>
            <form className={classes.form} noValidate>
              <Typography className={classes.title}>
                Let's get in touch
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={6} lg={6}>
                  <TextField
                    className={classes.text}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="fname"
                    label="First Name"
                    name="fname"
                  />
                </Grid>
                <Grid item xs={6} lg={6}>
                  <TextField
                    className={classes.text}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="lname"
                    label="Last Name"
                    name="lname"
                  />
                </Grid>
              </Grid>
              <TextField
                className={classes.text}
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                type="password"
                id="message"
                multiline
                rows={5}
                className={classes.text}
              />
              <br></br>
              <Button
              color="secondary"
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                <Typography style={{ marginRight: 8 }}>SEND</Typography>{" "}
                <NearMeIcon />
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
