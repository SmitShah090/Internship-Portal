import {
  Avatar,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/Profile";

const SideBar = ({ name, title, description, loading, skills, photo }) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={2}
          justify="center"
        >
          <Grid item>
            <Grid container justify="center" alignItems="center" spacing={3}>
              {loading && <CircularProgress />}
              <Grid item lg={12}>
                <Avatar alt="zemy harp" src={photo} className={classes.icon} />
              </Grid>
              <Grid item lg={12}>
                <Typography className={classes.name} variant="h6">
                  {name}
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography className={classes.title} variant="h6">
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>
              {description}
              {/* Full stack product designer with hands-on experience in solving
              problems for clients ranging from Real Estate. Hospitality,
              Rentals, On Demand Healthcare, IT Services & Social Network among
              others. I’ve good communication skills, well-defined process for
              engagement, a toolkit for collaboration & a user-centered approach
              to design. */}
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>

        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography className={classes.skillTitle} variant="h6">
              Skills
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1} direction="row">
              {skills.map((skill, index) => (
                <Grid item lg={6} xs={4} key={index}>
                  <Typography className={classes.skill}>{skill}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SideBar;
