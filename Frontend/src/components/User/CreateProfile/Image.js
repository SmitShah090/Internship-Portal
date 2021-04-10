import { Avatar, Fab, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/ProfileForm";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const Image = ({photo, setPhoto}) => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.imageform} container spacing={3} justify="center">
        <input
          onChange={(e) => setPhoto(e.target.value)}
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
