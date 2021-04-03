import { Container, Grid, Link, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Auth from "../../../images/auth.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Axios from "axios";
import useStyles from "../../../styles/Login";
import { useHistory } from "react-router-dom";

const LoginE = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const classes = useStyles();

  async function loginEmployee(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      // await axios.post("http://localhost:5000/auth/", registerData);
      const createdEmployee = await Axios.post(
        "http://localhost:5000/employee/login",
        loginData
      );
      localStorage.setItem(
        "employeeInfo",
        JSON.stringify(createdEmployee.data)
      );
      console.log(createdEmployee.data);
      // localStorage.setItem('userInfo', JSON.stringify(createdUser.data))
      // console.log(createdUser.data._id)
      history.push("/employee");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <img className={classes.image} src={Auth} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <form className={classes.form} onSubmit={loginEmployee}>
              <Typography className={classes.title}>EMPLOYEE LOGIN</Typography>
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
                /* InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }} */
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
                color="secondary"
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                Log In
              </Button>
              <Typography className={classes.label}>
                Don't have an account?{" "}
                <Button>
                  <Link
                    to="/signup"
                    style={{ textDecorationLine: "none", color: "#00B074 " }}
                  >
                    {" "}
                    Sign Up{" "}
                  </Link>
                </Button>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginE;
