import { Avatar, Button, Fab, Grid } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../../styles/User/ProfileForm";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import axios from "axios";

const Image = ({photo, setPhoto}) => {

  /* const [url, setUrl]  =useState("")

  const postImage = () => {
    const data = new FormData()
    data.append("file", photo)
    data.append("upload_preset", "internship-portal")
    data.append("cloud_name","smit")
    fetch("https://api.cloudinary.com/v1_1/smit/image/upload", {
      method: "post",
      body: data
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUrl(data.url);
    })
    .catch(err => {
      console.log(err);
    })
  } */

  const uploadImage = async(e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append('image', file);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const { data } = await axios.post(`http://localhost:5000/student/upload`, formData, config );
    console.log(data);
    setPhoto(data)
  }
  

  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.imageform} container spacing={3} justify="center">
        <form>
        <input
          onChange={uploadImage}
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Fab component="span" className={classes.profilePic}>
            <AddPhotoAlternateIcon />
      
          </Fab>
        </label>
        </form>
      </Grid>
    </div>
  );
};

export default Image;
