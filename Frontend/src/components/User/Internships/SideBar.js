import React from "react"
import { Checkbox, Container, Grid, Slider, Typography } from "@material-ui/core";

const SideBar = () => {
    return (
      <Container>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h6"> Category</Typography>
            <Typography variant="subtitle2">
              <Checkbox
                backgroundColor="#00B074"
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              Frontend
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Backend
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              FullStack
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Mobile Development
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              UI/UX Designer
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Project Management
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Salary</Typography>
            <Slider
              max="1200"
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </Grid>
          <Grid item>
            <Typography variant="h6"> Type</Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Full Time
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Part Time
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Remote
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Experiance level</Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Junior
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Intermediate
            </Typography>
            <Typography variant="subtitle2">
              <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
              Experiance
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  };

  export default SideBar