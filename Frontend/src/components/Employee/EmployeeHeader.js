import {Avatar, Button, CircularProgress, Menu, MenuItem} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import useStyles from '../../styles/Employee/EmployeeHeader';
import Axios from 'axios';
import axios from 'axios';

const EmployeeHeader = () => {
  const classes = useStyles ();
  const [anchor, setAnchor] = useState (null);
  const [photo, setPhoto] = useState ();
  const [loading, setLoading] = useState(false)
  const history = useHistory ();

  const handleClick = event => {
    setAnchor (event.currentTarget);
  };

  const handleClose = PageUrl => {
    history.push (PageUrl);
    setAnchor (null);
  };

  const logOut = async () => {
    await Axios.get ('http://localhost:5000/employee/logout');
    history.push ('/');
  };

  const storedEmployee = JSON.parse (localStorage.getItem ('employeeInfo'));

  const employee_ID = storedEmployee._id;

  useEffect (async () => {
    setLoading(true)
    try {
      const companyDetails = await axios.get (
        `http://localhost:5000/employee/getinfo/${employee_ID}`
      );

      const ProfilePic = companyDetails.data.companyInfo.photo;
      const temp = ProfilePic && ProfilePic.split ('\\');
      const photoURL = temp[temp.length - 2] + '\\' + temp[temp.length - 1];
      console.log(photoURL);


       setPhoto(photoURL)

      setLoading(false)
    } catch (error) {
      console.log (error);
    }
  }, []);


  /* console.log(photo); */

  return (
    <div>
      {loading ? <CircularProgress /> :(
        <>
        <Button onClick={handleClick}>
        <Avatar  src={photo}  className={classes.profile} />
      </Button>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean (anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose ('/create-employee-profile')}>
          Create Profile
        </MenuItem>
        <MenuItem onClick={() => logOut ()}>Logout</MenuItem>
      </Menu>
        </>
      )}
      
    </div>
  );
};

export default EmployeeHeader;
