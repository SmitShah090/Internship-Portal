import {
  Button,
  CircularProgress,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/ProfileForm";
import AddIcon from '@material-ui/icons/Add';

const EducationInfo = ({university, setUniversity, edescription, setEdescription, loading}) => {

  const classes = useStyles();

  return (
    <Paper id="education">
      <Container>
        <Grid container>
          <Grid item lg={11}>
            <Typography variant="h6">Education</Typography>
          </Grid>
          <Grid item lg={1}>
           <Button ><AddIcon /></Button> 
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={12} xl={12} sm={12} md={12}>
            <Typography className={classes.info} variant="subtitle2">
              <InputBase
              value={university}
                onChange={(e) => setUniversity(e.target.value)}
                fullWidth
                placeholder="University Name*"
              /> {loading && <CircularProgress />}
            </Typography>
          </Grid>
          <Grid item lg={12} xl={12}>
            <Typography className={classes.info} variant="subtitle2">
              <InputBase
             value={edescription}
                onChange={(e) => setEdescription(e.target.value)}
                fullWidth
                multiline
                rows={4}
                placeholder="Description*"
              /> {loading && <CircularProgress />}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default EducationInfo;
