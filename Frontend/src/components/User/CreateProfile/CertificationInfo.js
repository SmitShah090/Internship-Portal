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

const CertificationInfo = ({certification, setCertification, loading}) => {
  const classes = useStyles ();

  const handleChangeInput = (id, event) => {
    const newCerti = certification.map (i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setCertification (newCerti);
  };

  const add = () => {
    setCertification ([
      ...certification,
      {id: uuidv4 (), certiname: '', cdescription: ''},
    ]);
  };

  const remove = id => {
    const details = [...certification];
    details.splice (details.findIndex (detail => detail.id === id), 1);
    setCertification (details);
  };

  return (
    <div>
      <Paper className={classes.mt_30}>
        <Container>
          <Grid container spacing={6}>
            <Grid item lg={11}>
              <Typography variant="h6">Certificate</Typography>
            </Grid>
            <Grid item lg={1}>
              <Button onClick={() => add ()}><AddIcon /></Button>
              
            </Grid>
          </Grid>
          {certification.map ((certi, key) => (
            <Grid container spacing={2}>
              <Grid container spacing={5}>

                <Grid item lg={11} />
                <Grid item lg={1}>

                  <Button
                    disabled={certification.length === 1}
                    onClick={() => remove (certi.id)}
                  >
                    <RemoveIcon />
                  </Button>
                </Grid>
              </Grid>
              <Grid item lg={12}>
                <Typography className={classes.info} variant="subtitle2">
                  <InputBase
                    name="certiname"
                    value={certi.certiname}
                    onChange={event => handleChangeInput (certi.id, event)}
                    fullWidth
                    placeholder="Certificate Name*"
                  />
                  {' '}
                  {loading && <CircularProgress />}
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography className={classes.info} variant="subtitle2">
                  <InputBase
                    name="cdescription"
                    value={certi.cdescription}
                    onChange={event => handleChangeInput (certi.id, event)}
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

export default CertificationInfo;
