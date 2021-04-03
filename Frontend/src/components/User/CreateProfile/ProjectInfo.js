import {
  CircularProgress,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/ProfileForm";

const ProjectInfo = ({projectname, setProjectname, pdescription, setPdescription, loading}) => {

  const classes = useStyles();

  return (
    <div>
      <Paper>
        <Container>
          <Typography variant="h6">Projects</Typography>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Typography className={classes.info} variant="subtitle2">
                <InputBase
                value={projectname}
                  onChange={(e) => setProjectname(e.target.value)}
                  fullWidth
                  placeholder="Project Name*"
                /> {loading && <CircularProgress />}
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography className={classes.info} variant="subtitle2">
                <InputBase
                value={pdescription}
                  onChange={(e) => setPdescription(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Description*"
                /> {loading && <CircularProgress />}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default ProjectInfo;
