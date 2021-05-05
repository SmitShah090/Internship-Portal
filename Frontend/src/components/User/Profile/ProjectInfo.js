import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/Profile";

const ProjectInfo = ({projects, loading}) => {
    const classes = useStyles()
  return (
    <div>
      <Paper>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={12} sm={12} md={12}>
              <Typography className={classes.titleCard} variant="h6">
                Projects
              </Typography>
            </Grid>
            {projects.map((project, key) => (

            <Grid key={project._id} item lg={12} sm={12} md={12}>
              <Typography variant="subtitle2">{project.projectname}</Typography>
              <Typography variant="caption">{project.pdescription}</Typography>
            </Grid>
            ))}
            
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default ProjectInfo;
