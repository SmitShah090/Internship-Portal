import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "../../../styles/User/Profile";

const BasicInfo = ({age, experiance, phoneNo, ctc, location, email}) => {
    const classes = useStyles()
  return (
    <div>
      <Paper>
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item lg={12} xs={12}>
              <Typography className={classes.titleCard} variant="h6">
                Basic Information
              </Typography>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={6}>
              <Typography className={classes.infoTitle} variant="subtitle1">
                Age
              </Typography>
              <Typography variant="subtitle2">{age} years</Typography>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={6}>
              <Typography className={classes.infoTitle} variant="subtitle1">
                YEARS OF EXPERIENCE
              </Typography>
              <Typography variant="subtitle2">{experiance} years</Typography>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={6}>
              <Typography className={classes.infoTitle} variant="subtitle1">
                PHONE
              </Typography>
              <Typography variant="subtitle2">{phoneNo}</Typography>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={6}>
              <Typography className={classes.infoTitle} variant="subtitle1">
                CTC
              </Typography>
              <Typography variant="subtitle2">{ctc} Lakh</Typography>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={6}>
              <Typography className={classes.infoTitle} variant="subtitle1">
                LOCATION
              </Typography>
              <Typography variant="subtitle2">{location}</Typography>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={6}>
              <Typography className={classes.infoTitle} variant="subtitle1">
                EMAIL
              </Typography>
              <Typography variant="subtitle2">{email}</Typography>
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={6}>
              <Button
                className={classes.fButton}
                variant="contained"
                color="secondary"
                startIcon={<CloudDownloadIcon />}
              >
                Download Resume
              </Button>
            </Grid>
            <Grid item lg={4}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<EmailIcon />}
              >
                Sent Email
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default BasicInfo;
