import { Avatar, Button, Fab, Grid } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../../styles/User/ProfileForm";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const Image = ({photo, setPhoto}) => {

  const [url, setUrl]  =useState("")

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
      setUrl(data.url);
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  

  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.imageform} container spacing={3} justify="center">
        <input
          onChange={(e) =>setPhoto(e.target.files[0])}
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
      </Grid>
    </div>
  );
};

export default Image;
