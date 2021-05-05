import {Container, Grid, Paper, Typography} from '@material-ui/core';
import React from 'react';
import useStyles from '../../../styles/User/Profile';

const EduInfo = ({education}) => {
  const classes = useStyles ();
  return (
    <div>
      
      <Paper>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={12} sm={12} md={12}>
              <Typography className={classes.titleCard} variant="h6">
                Education
              </Typography>
            </Grid>
            {education.map ((edu, key) => {
              console.log (edu);
              return (
                <Grid key={edu._id} item lg={12} sm={12} md={12}>

                  <Typography variant="subtitle2">{edu.university}</Typography>
                  <Typography variant="caption">{edu.edescription}</Typography>
                </Grid>
              );
            })}

            {/* <Typography variant="caption">
              Studied project planning, coordination, and ethics
            </Typography>
            <br></br>
            <Typography variant="caption">
              Worked with various startups on launching new apps and services
            </Typography> */}

            {/* <Grid item lg={12} sm={12} md={12}>
              <Typography variant="subtitle1">Cliffmoor College</Typography>
              <Typography variant="subtitle2">
                BA Product Design | Dec 2008 - Dec 2012
              </Typography>
              <Typography variant="caption">GPA: 3.26</Typography>
              <br />
              <Typography variant="caption">Minor in Management</Typography>
              <br />
              <Typography variant="caption">
                Thesis involved studying several technology companies and
                optimizing their product design process
              </Typography>
            </Grid> */}
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default EduInfo;
