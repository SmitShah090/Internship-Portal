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

const EducationInfo = ({education, setEducation, loading}) => {
  const handleChangeInput = (id, event) => {
    event.preventDefault ();
    const newEducation = education.map (i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
        console.log (event.target);
      }
      return i;
    });

    console.log (newEducation);
    setEducation (newEducation);
  };

  const classes = useStyles ();

  const addIcon = () => {
    setEducation ([
      ...education,
      {id: uuidv4 (), university: '', edescription: ''},
    ]);
    console.log (education);
  };

  const remove = id => {
    const details = [...education];
    details.splice (details.findIndex (detail => detail.id === id), 1);
    setEducation (details);
  };

  return (
    <Paper className={classes.mt_30}>
      <Container>

        <Grid container spacing={6}>
          <Grid item lg={11}>
            <Typography variant="h6">Education</Typography>
          </Grid>
          <Grid item lg={1}>
            <Button onClick={() => addIcon ()}><AddIcon /></Button>
            {/* <Button
              disabled={education.length === 1}
              onClick={() => remove (education.id)}
            >
              <RemoveIcon />
            </Button> */}
          </Grid>
        </Grid>
        {education.map ((edu, key) => (
          <Grid container spacing={2} key={edu.id}>
            <Grid container spacing={5}>

              <Grid item lg={11} />
              <Grid item lg={1}>

                <Button
                  disabled={education.length === 1}
                  onClick={() => remove (edu.id)}
                >
                  <RemoveIcon />
                </Button>
              </Grid>
            </Grid>
            <Grid item lg={12} xl={12} sm={12} md={12}>
              <Typography className={classes.info} variant="subtitle2">
                <InputBase
                  name="university"
                  value={edu.university}
                  onChange={event => handleChangeInput (edu.id, event)}
                  fullWidth
                  placeholder="University Name*"
                />
                {' '}
                {loading && <CircularProgress variant="static" />}
              </Typography>
            </Grid>
            <Grid item lg={12} xl={12}>
              <Typography className={classes.info} variant="subtitle2">
                <InputBase
                  name="edescription"
                  value={edu.edescription}
                  onChange={event => handleChangeInput (edu.id, event)}
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
  );
};

export default EducationInfo;
