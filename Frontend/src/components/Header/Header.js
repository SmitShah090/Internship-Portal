import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import Logo from "../../images/Charusat-logo.png";
import useStyles from "../../styles/Header";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import AuthContext from "../../context/AuthContext";

const Header = (props) => {

  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "About",
      pageURL: "/about",
    },
    {
      menuTitle: "Internships",
      pageURL: "/internships",
    },
    {
      menuTitle: "Project",
      pageURL: "/project",
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography className={classes.logo}>
            <img src={Logo} />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/")}
              >
                Home
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/about")}
              >
                About Us
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/internship")}
              >
                Internships
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/project")}
              >
                Projects
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/contact")}
              >
                Contact
              </Button>
              
                {/* <Button
                  className={classes.authButton}
                  color="secondary"
                  variant="contained"
                  onClick={() => handleButtonClick("/login")}
                >
                  Login
                </Button> */}
                {/* <Button
              className={classes.authButton}
              color="secondary"
                variant="contained"
                onClick={() => handleButtonClick("/signup")}
              >
                Signup
              </Button> */}
                <FormControl
                  color="secondary"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel >
                    Login
                  </InputLabel>
                  <Select autoWidth label="Login">
                    <MenuItem onClick={() => handleButtonClick("/studentlogin")} >As a Student</MenuItem>
                    <MenuItem onClick={() => handleButtonClick("/employeelogin")}>As a Employer</MenuItem>
                  </Select>
                </FormControl>

                
                <FormControl
                  color="secondary"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Register
                  </InputLabel>
                  <Select autoWidth label="Register">
                    <MenuItem onClick={() => handleButtonClick("/studentsignup")}>As a Student</MenuItem>
                    <MenuItem onClick={() => handleButtonClick("/employeesignup")}>As a Employer</MenuItem>
                  </Select>
                </FormControl>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);

/* import React from 'react'
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core'
import { useStyles } from '../styles/Header'
import Logo from '../images/Charusat-logo.png'
import {Link} from 'react-router-dom'

const Header = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar color='inherit' position="sticky" lg={12} md={12} sm={12} xs={12}>
                <Toolbar variant="dense">
                    <Typography><img src={Logo} /></Typography>
                    
                    <div className={classes.headerOptions}>
                   <Button color="inherit" className={classes.title}>Home</Button> 
                    <Button color="inherit" className={classes.title}>About Us</Button>
                    <Button color="inherit" className={classes.title}>Internships</Button>
                    <Button color="inherit" className={classes.title}>Projects</Button>
                    <Button color="inherit" className={classes.title}>Contact</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header */
