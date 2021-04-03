import { Container, Grid, Link, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Auth from "../../../images/auth.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import useStyles from "../../../styles/Signup";
import axios from "axios";

const Signup = ({history}) => {
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        username,
        email,
        password,
      };

      // await axios.post("http://localhost:5000/auth/", registerData);
      await axios.post(
        "http://localhost:5000/auth/",
        registerData, {
          withCredentials: true
        }
      )
       history.push("/studentlogin")
    } catch (err) {
      console.error(err);
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <img className={classes.image} src={Auth} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <form className={classes.form} onSubmit={register}>
              <Typography className={classes.title}>
                STUDENT REGISTER
              </Typography>
              <TextField
                className={classes.text}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.text}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <br></br>
              <Button
                color="secondary"
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                Register
              </Button>
              <Typography className={classes.label}>
                Already a member?{" "}
                <Button
                style={{ textDecorationLine: "none", color: "#00B074 " }}
                  onClick={() => {
                    history.push("/studentlogin")
                  }}
                >
                  LOGIN
                </Button>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Signup;
