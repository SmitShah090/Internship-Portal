import { Container, Grid, Link, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Auth from "../../../images/auth.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import useStyles from "../../../styles/Login";
import axios from "axios";

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      // await axios.post("http://localhost:5000/auth/", registerData);
      const createdUser = await axios.post(
        "http://localhost:5000/auth/login",
        loginData,
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("userInfo", JSON.stringify(createdUser.data));
      // console.log(createdUser.data._id)
      history.push("/user");
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
            <form className={classes.form} >
              <Typography className={classes.title}>STUDENT LOGIN</Typography>
              <TextField
                className={classes.text}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <br></br>
              <Button
              onClick={login}
                color="secondary"
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Typography className={classes.label}>
                Don't have an account?{" "}
                <Button
                style={{ textDecorationLine: "none", color: "#00B074 " }}
                  onClick={() => {
                    history.push("/studentsignup")
                  }}
                >
                  SIGN UP
                </Button>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
