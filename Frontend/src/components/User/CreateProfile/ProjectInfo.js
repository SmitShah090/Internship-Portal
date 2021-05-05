import {
  Button,
  CircularProgress,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../../../styles/User/ProfileForm';

import AddIcon from '@material-ui/icons/Add';
import {v4 as uuidv4} from 'uuid';
import RemoveIcon from '@material-ui/icons/Remove';

const ProjectInfo = ({projects, setProjects, loading}) => {
  const classes = useStyles ();

  const handleChangeInput = (id, event) => {
    const newProject = projects.map (i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
        console.log (event.target);
      }
      return i;
    });

    setProjects (newProject);
  };

  const add = () => {
    setProjects ([
      ...projects,
      {id: uuidv4 (), projectname: '', pdescription: ''},
    ]);
  };

  const remove = id => {
    const details = [...projects];
    details.splice (details.findIndex (detail => detail.id === id), 1);
    setProjects (details);
  };

  return (
    <div>
      <Paper className={classes.mt_30}>
        <Container>
          <Grid container spacing={6}>
            <Grid item lg={11}>
              <Typography variant="h6">Projects</Typography>
            </Grid>
            <Grid item lg={1}>
              <Button onClick={() => add ()}><AddIcon /></Button>
              
            </Grid>
          </Grid>
          {projects.map ((project, key) => (
            <Grid key={project.id} container spacing={2}>
              <Grid container spacing={5}>

                <Grid item lg={11} />
                <Grid item lg={1}>

                  <Button
                    disabled={projects.length === 1}
                    onClick={() => remove (project.id)}
                  >
                    <RemoveIcon />
                  </Button>
                </Grid>
              </Grid>
              <Grid item lg={12}>
                <Typography className={classes.info} variant="subtitle2">
                  <InputBase
                    name="projectname"
                    value={project.projectname}
                    onChange={event => handleChangeInput (project.id, event)}
                    fullWidth
                    placeholder="Project Name*"
                  />
                  {' '}
                  {loading && <CircularProgress />}
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography className={classes.info} variant="subtitle2">
                  <InputBase
                    name="pdescription"
                    value={project.pdescription}
                    onChange={event => handleChangeInput (project.id, event)}
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Description*"
                  />
                  {' '}
                  {loading && <CircularProgress />}
                </Typography>
              </Grid>
            </Grid>
          ))}

        </Container>
      </Paper>
    </div>
  );
};

export default ProjectInfo;