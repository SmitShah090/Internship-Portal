import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import useStyles from "../../styles/Employee/EmployeeHeader";
import Axios from 'axios'

const EmployeeHeader = () => {
    const classes = useStyles()
    const [anchor, setAnchor] = useState(null);
    const history = useHistory()
  
    const handleClick = (event) => {
      setAnchor(event.currentTarget);
    };
  
    const handleClose = (PageUrl) => {
      history.push(PageUrl)
      setAnchor(null)
    };

    const logOut = async () => {
        await Axios.get("http://localhost:5000/employee/logout")
        history.push("/")
      }
  return (
    <div>
      <Button onClick={handleClick}>
        <Avatar className={classes.profile}>S</Avatar>
      </Button>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("/create-employee-profile")}>
          Create Profile
        </MenuItem>
       <MenuItem onClick={() => logOut()}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default EmployeeHeader;
