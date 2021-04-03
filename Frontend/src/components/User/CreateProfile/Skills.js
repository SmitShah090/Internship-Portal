import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/ProfileForm";

const Skills = ({ skills, setSkills }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper>
        <Container>
          <Typography variant="h6">Skills</Typography>
          <Grid item>
            <Grid container spacing={1} direction="row">
              <Grid item>
                <Typography className={classes.skill}>
                  <Button onClick={(e) => setSkills(e.target.value)}>JavaScript</Button>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.skill}>
                  <Button onClick={(e) => setSkills(e.target.value)}>Python</Button>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.skill}>
                  <Button onClick={(e) => setSkills(e.target.value)}>Flutter</Button>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.skill}>
                  <Button onClick={(e) => setSkills(e.target.value)}>Backend</Button>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.skill}>
                  <Button onClick={(e) => setSkills(e.target.value)}>Mobile App Design App</Button>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.skill}>
                  <Button onClick={(e) => setSkills(e.target.value)}>Adobe XD</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default Skills;
