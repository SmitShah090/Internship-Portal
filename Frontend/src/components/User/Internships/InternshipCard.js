import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from '@material-ui/core';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import useStyles from '../../../styles/User/Internship';
import ScheduleIcon from '@material-ui/icons/Schedule';
import moment from 'moment';

const InternshipCard = ({job}) => {
  const classes = useStyles ();

  const {photo} = job

  console.log(photo);

  const temp = photo && photo.split("\\");

  const photoURL = temp.length && (temp[temp.length-2] + '\\' + temp[temp.length - 1]); 

  return (
    <div>
      <Paper variant={4}>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={6} xl={6}>
              <Grid
                container
                direction="column"
                justify="space-around"
                spacing={2}
              >
                <Grid item xl={12}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar
                        alt="Remy Sharp"
                        src={photoURL}
                      />
                    </Grid>
                    <Grid item>
                      <Typography className={classes.jobTitle} variant="h6">
                        {job.jobTitle}
                      </Typography>
                      <Typography variant="subtitle2">
                        {' '}{job.companyName}{' '}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={1}>

                    {job.skills.map ((skill, index) => (
                      <Grid item>

                        <Box
                          key={index}
                          color="secondary"
                          className={classes.skill}
                          type="submit"
                          variant="contained"
                        >
                          {skill}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

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
                  {`${job.payScale}LPA`}
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

                            {moment (job.createdAt).format ('lll')}
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
