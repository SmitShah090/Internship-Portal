import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/Profile";

const CertyInfo = ({certiName, description}) => {
    const classes = useStyles()
  return (
    <div>
      <Paper>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={12} sm={12} md={12}>
              <Typography className={classes.titleCard} variant="h6">
                Certification
              </Typography>
            </Grid>
            <Grid item lg={12} sm={12} md={12}>
              <Typography variant="subtitle2">{certiName}</Typography>
              <Typography variant="caption">{description}</Typography>
            </Grid>
            
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default CertyInfo;
