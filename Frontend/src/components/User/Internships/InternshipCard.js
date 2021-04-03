import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import useStyles from "../../../styles/User/Internship";
import ScheduleIcon from "@material-ui/icons/Schedule";

const InternshipCard = ({ job }) => {

  const classes = useStyles();
  return (
    <div>
      <Paper variant={4}>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              <Grid
                container
                direction="column"
                justify="space-around"
                spacing={2}
              >
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.jobTitle} variant="h6">
                        {job.jobTitle}
                      </Typography>
                      <Typography variant="subtitle2"> {job.companyName} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    className={classes.submit}
                    type="submit"
                    variant="contained"
                  >
                    Sign In
                  </Button>
                  <Button
                    color="secondary"
                    className={classes.submit}
                    type="submit"
                    variant="contained"
                  >
                    Sign In
                  </Button>
                  <Button
                    color="secondary"
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={6}>
              <Grid
                container
                direction="column"
                spacing={8}
                alignItems="flex-end"
              >
                <Grid className={classes.stipned} item>
                  {job.payScale}
                </Grid>
                <Grid item direction="row">
                  <Grid container spacing={4}>
                    <Grid direction="row" item>
                      <Grid container>
                        <Grid item>
                          <LocationOnIcon opacity="40%" fontSize="small" />
                        </Grid>
                        <Grid item>
                          <Typography className={classes.text}>
                            {job.workType}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid direction="row" item>
                      <Grid container>
                        <Grid item>
                          <WorkRoundedIcon opacity="40%" fontSize="small" />
                        </Grid>
                        <Grid item>
                          <Typography className={classes.text}>
                            {" "}
                            {job.jobType}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid direction="row" item>
                      <Grid container>
                        <Grid item>
                          <ScheduleIcon opacity="40%" fontSize="small" />
                        </Grid>
                        <Grid item>
                          <Typography className={classes.text}>
                            21,Oct,2020
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default InternshipCard;
