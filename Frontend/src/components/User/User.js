import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useStyles from "../../styles/User/Profile";
import Axios from "axios"
import Internship from "./Internships/Internship";
import axios from "axios";

const User = () => {
  const classes = useStyles();

  const [anchor, setAnchor] = useState(null);
  const [photo, setPhoto] = useState("")
  const history = useHistory()

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = (PageUrl) => {
    history.push(PageUrl)
    setAnchor(null)
  };

  const logOut = async () => {
    await Axios.get("http://localhost:5000/student/logout")
    history.push("/")
  }

  const storedUser = JSON.parse (localStorage.getItem ('userInfo'));

  const user_ID = storedUser._id;

  useEffect(async() => {
    const userInfo = await axios.get (
      `http://localhost:5000/student/get-profile/${user_ID}`,
      {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    const Profile = userInfo.data.profile;
    console.log(Profile);

    Profile.photo !== undefined
      ? setPhoto (Profile.photo)
      : history.push ('/create-profile');
  }, [])

  const temp = photo.split('\\');
  const photoURL = temp[temp.length-2] + '\\' + temp[temp.length - 1];

  
  return (
    <div className={classes.root}>
      <Button onClick={handleClick}>
        <Avatar src={photoURL} alt="Profile Pic" className={classes.profilePic} />
      </Button>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
      <MenuItem onClick={() => handleClose("/profile")}>My Profile</MenuItem>
      <MenuItem onClick={() => handleClose("/create-profile")}>Create Profile</MenuItem>
      <MenuItem onClick={(e) => logOut()}>Logout</MenuItem>
      </Menu>
      <hr></hr>
      <Internship />
    </div>
  );
};

export default User;
