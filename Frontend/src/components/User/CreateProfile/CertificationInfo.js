import {
  CircularProgress,
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/ProfileForm";

const CertificationInfo = ({certiname, setCertiname, cdescription, setCdescription, loading}) => {

  const classes = useStyles();

  return (
    <div>
      <Paper>
        <Container>
          <Typography variant="h6">Certificate</Typography>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Typography className={classes.info} variant="subtitle2">
                <InputBase
                value={certiname}
                  onChange={(e) => setCertiname(e.target.value)}
                  fullWidth
                  placeholder="Certificate Name*"
                /> {loading && <CircularProgress />}
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography className={classes.info} variant="subtitle2">
                <InputBase
                value={cdescription}
                  onChange={(e) => setCdescription(e.target.value)}  
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
    </div>
  );
};

export default CertificationInfo;
