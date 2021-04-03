import { CircularProgress, Grid, InputBase, Paper, Typography } from "@material-ui/core";
import React, {  useState } from "react";
import useStyles from "../../../styles/User/ProfileForm";

import { useHistory } from "react-router-dom";

const FormInfo = ({name, setName, title, setTitle, description, setDescription, loading}) => {

  const history = useHistory();

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={6} justify="center">
        <Grid item xs={12} lg={5}>
          <Paper>
            <Typography className={classes.finput}>
              <InputBase
                value={name}
                onChange={(e)  => setName(e.target.value)}
              
                fullWidth
                placeholder="Name*"
              />
              {loading && <CircularProgress />}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Paper>
            <Typography className={classes.finput}>
              <InputBase
               value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                fullWidth
                placeholder="Title*"
              />{loading && <CircularProgress />}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Paper>
            <Typography className={classes.finput}>
              <InputBase
                fullWidth
                multiline
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                rows={5}
                placeholder="Description*"
              /> {loading && <CircularProgress />}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormInfo;
