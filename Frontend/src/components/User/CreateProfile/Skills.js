import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/ProfileForm";

const Skills = ({ skills, setSkills }) => {
  const skillsList = [
    "JavaScript",
    "React Js",
    "Node Js",
    "React Native",
    "Python",
    "Mobile App Development",
    "UI/UX Designing",
  ];
  const classes = useStyles();

  return (
    <div>
      <Paper>
        <Container>
          <Typography variant="h6">Skills</Typography>
          <Grid item>
            <Grid container spacing={1} direction="row">
              {skillsList.map((skill, index) => (
                <Grid item key={index}>
                  <Typography className={classes.skill}>
                    <Button
                      onClick={(e) => {
                        let user = {
                          skills: skill,
                        };
                        const skillList = skills.concat(user.skills);
                        setSkills(skillList);
                      }}
                    >
                      {skill}
                    </Button>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default Skills;
